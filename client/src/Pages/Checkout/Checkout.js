import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TextFieldGroup from '../../Components/Common/TextFieldGroup'
import {
  sendShippingAddress,
  getShipTo
} from '../../Redux/Actions/checkoutActions'
import classNames from 'classnames'
import FinalOrderSummaryTable from '../../Components/Common/Cart/FinalOrderSummaryTable'
import commaNumber from 'comma-number'
import UseStripeCheckout from '../../Components/Common/Checkout/UseStripeCheckout'
import {
  calcForCartTotal,
  totalManualsForItemCalc,
  totalManualsInCartCalc
} from '../../Utils/Utils'
import { removeAllFromCart } from '../../Redux/Actions/cartActions'
import store from '../../Redux/store'
import axios from 'axios'

class Checkout extends Component {
  state = {
    firstName: '',
    lastName: '',
    shippingAddress: '',
    shippingAddress2: '',
    shippingCountry: '',
    shippingState: '',
    shippingZip: '',
    phone: '',
    email: '',
    emailConfirm: '',
    errors: {},
    toggleButton: true
  }

  componentWillReceiveProps(nextProps) {
    // console.log('NEXT_PROPS: ', nextProps)
    // console.log('STATE: ', this.state)

    // paypal-button paypal-button-number-0
    // paypal-button paypal-button-number-1
    // paypal-button paypal-button-number-2

    if (Object.keys(nextProps.errors).length > 0) {
      return this.setState({ errors: nextProps.errors, toggleButton: true })
    }

    nextProps.checkout.shipTo.errors = {}

    if (nextProps.checkout.shipTo !== this.state) {
      this.setState(nextProps.checkout.shipTo)
      if (this.state.emailConfirm !== '') {
        this.setState({ toggleButton: false })
      }
    }
  }

  componentDidMount() {
    if (document.getElementsByClassName('div.paypal-button')[0]) {
      document.getElementsByClassName('div.paypal-button')[0].tabIndex = -1
    }

    const shippingId = localStorage.getItem('shippingId')
    this.props.getShipTo(shippingId)
    // console.log('SHIP_TO_MOUNT: ', this.props.checkout.shipTo)
    // ---------------------------------------------------------------

    const { productsInCart } = this.props.cart
    const total =
      calcForCartTotal(productsInCart) +
      Math.round(calcForCartTotal(productsInCart) / 10)
    if (productsInCart.length > 0) {
      window.paypal
        .Buttons({
          createOrder: function(data, actions) {
            // Set up the transaction
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${total}.00`
                  }
                }
              ]
            })
          },
          onApprove: function(data, actions) {
            // console.log('PAYPAL_DATA: ', data)
            // console.log('PAYPAL_ACTIONS: ', actions)
            // Capture the funds from the transaction
            return actions.order.capture().then(async function(details) {
              // Show a success message to your buyer
              alert('Transaction completed by ' + details.payer.name.given_name)
              store.dispatch(this.props.removeAllFromCart())
              // Call your server to save the transaction
              // console.log('data.orderID: ', data.orderID)
              const res = await axios.post('/api/order/paypal', {
                orderID: data.orderID,
                total
              })
              // console.log('FETCH_RES: ', res)
            })
          }
        })
        .render('#paypal-button-container')
    }
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()

    const shipTo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      shippingAddress: this.state.shippingAddress,
      shippingAddress2: this.state.shippingAddress2,
      shippingCountry: this.state.shippingCountry,
      shippingState: this.state.shippingState,
      shippingZip: this.state.shippingZip,
      phone: this.state.phone,
      email: this.state.email,
      emailConfirm: this.state.emailConfirm
    }
    // console.log('shippingData: ', shippingData)
    // this.setState({ errors: {} })
    this.props.sendShippingAddress(shipTo)

    // this.setState({ toggleButton: false })
  }

  render() {
    const { errors } = this.state
    const { productsInCart } = this.props.cart
    const { shipToIsEmpty } = this.props.checkout

    const total = commaNumber(calcForCartTotal(productsInCart))
    const totalManuals = totalManualsInCartCalc(productsInCart)
    // console.log('SHIP_TO_RENDER: ', this.props.checkout)

    return (
      <div
        id="container"
        className="container cart__container-shadow min-vh-100 bg-light py-5"
      >
        <div className="container-md px-lg-4">
          {this.props.cart.productsInCart.length > 0 ? (
            <React.Fragment>
              <h1 className="display-4 text-center">Checkout</h1>
              <div className="card">
                <div className="card-body">
                  <h4>Ship To</h4>

                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="firstName"
                          label="First Name"
                          value={this.state.firstName}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*First Name"
                          error={errors.firstName}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="lastName"
                          label="Last Name"
                          value={this.state.lastName}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Last Name"
                          error={errors.lastName}
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="shippingAddress"
                          label="Address"
                          value={this.state.shippingAddress}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Address"
                          error={errors.shippingAddress}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="shippingAddress2"
                          label="Address 2 (Optional)"
                          value={this.state.shippingAddress2}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="Apartment or Suite"
                          error={errors.shippingAddress2}
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-5 mt-2">
                        <label className="mb-0" htmlFor="country">
                          Country
                        </label>
                        <select
                          className={classNames(
                            'custom-select',
                            'd-block',
                            'w-100',
                            'bg-light',
                            { 'is-invalid': errors.shippingCountry }
                          )}
                          id="country"
                          required=""
                          name="shippingCountry"
                          value={this.state.shippingCountry}
                          onChange={this.onChange}
                        >
                          <option value="">*Choose...</option>
                          <option value="US">United States</option>
                        </select>

                        {errors.shippingCountry && (
                          <div className="invalid-feedback d-block">
                            {errors.shippingCountry}
                          </div>
                        )}
                      </div>

                      <div className="col-md-4 mt-2">
                        <label className="mb-0" for="state">
                          State
                        </label>
                        <select
                          className={classNames(
                            'custom-select',
                            'd-block',
                            'w-100',
                            'bg-light',
                            { 'is-invalid': errors.shippingState }
                          )}
                          id="state"
                          required=""
                          name="shippingState"
                          value={this.state.shippingState}
                          onChange={this.onChange}
                        >
                          <option value="">*Choose...</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                        {errors.shippingState && (
                          <div className="invalid-feedback">
                            {errors.shippingState}
                          </div>
                        )}
                      </div>

                      <div className="col-md-3 mt-2">
                        <label className="mb-0" for="zip">
                          Zip
                        </label>
                        <input
                          type="text"
                          className={classNames('form-control', 'bg-light', {
                            'is-invalid': errors.shippingZip
                          })}
                          id="zip"
                          placeholder="*Zip Code"
                          required=""
                          name="shippingZip"
                          value={this.state.shippingZip}
                          onChange={this.onChange}
                        />
                        {errors.shippingZip && (
                          <div className="invalid-feedback">
                            {errors.shippingZip}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-12 col-md-6 mt-2">
                        <label className="mb-0" for="phone">
                          Phone <small>(only used if shipping issue)</small>
                        </label>
                        <input
                          type="text"
                          value={this.state.phone}
                          className={classNames('form-control', 'bg-light', {
                            'is-invalid': errors.phone
                          })}
                          id="phone"
                          placeholder="*Phone (8001231234)"
                          required=""
                          name="phone"
                          maxLength="10"
                          onChange={this.onChange}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                      <div className="col-12 col-md-6" />
                    </div>

                    <div className="row mt-2">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="email"
                          label="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Email"
                          error={errors.email}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="emailConfirm"
                          label="Confirm Email"
                          value={this.state.emailConfirm}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Confirm Email"
                          error={errors.emailConfirm}
                        />
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col">
                        <button type="submit" className="btn btn-secondary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className={classNames('row', 'my-5', {
                  checkout__disabledbutton: shipToIsEmpty
                })}
              >
                <div className="col-12 col-sm-6">
                  <div className="card" style={{ height: '100%' }}>
                    <div className="card-body">
                      <h4>Order Summary</h4>

                      <FinalOrderSummaryTable
                        productsInCart={productsInCart}
                        totalManuals={totalManuals}
                        total={total}
                        // updated total with correct tax calculated on server using TaxJar API
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mt-5 mt-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h4>Pay With</h4>

                      {/* ----------------- STRIPE CHECKOUT ----------------- */}
                      {calcForCartTotal(productsInCart) > 0 && (
                        <div className="col-12  px-0 mt-5">
                          <div className="row ">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <img
                                style={{ height: '55px', width: '140px' }}
                                src="/images/stripe-logo-blue.png"
                                alt="stripe logo"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <UseStripeCheckout
                                disabled={this.state.toggleButton}
                                name={'Stripe Checkout'}
                                amount={commaNumber(
                                  calcForCartTotal(productsInCart) +
                                    Math.round(
                                      calcForCartTotal(productsInCart) / 10
                                    )
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {calcForCartTotal(productsInCart) > 0 && (
                        <div className="col-12 d-flex align-items-center justify-content-center px-0 mt-3">
                          <p className="mb-0">or</p>
                        </div>
                      )}

                      {/* ----------------- PAYPAL CHECKOUT ----------------- */}
                      {calcForCartTotal(productsInCart) > 0 && (
                        <div className="col-12 d-flex align-items-center justify-content-center px-0 mt-3">
                          <div
                            tabIndex={!this.state.toggleButton ? -1 : 0}
                            id="paypal-button-container"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <h5 className="mt-5 text-center">
              No items in cart{' '}
              <Link
                to="/store"
                className="base__hover-link-underline"
                style={{ color: '#be141b' }}
              >
                Click Here
              </Link>{' '}
              to go to the store
            </h5>
          )}
        </div>
      </div>
    )
  }
}

const mapState = ({ cart, checkout, errors }) => ({ cart, checkout, errors })

export default connect(
  mapState,
  { getShipTo, sendShippingAddress, removeAllFromCart }
)(Checkout)
