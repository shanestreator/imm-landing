import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UseStripeCheckout from '../../Components/Common/Checkout/UseStripeCheckout'
import UsePayPalCheckout from '../../Components/Common/Checkout/UsePayPalCheckout'
import commaNumber from 'comma-number'
import {
  calcForCartTotal,
  totalManualsForItemCalc,
  totalManualsInCartCalc
} from '../../Utils/Utils'

// Components
import CartItem from '../../Components/Common/CartItem'

class Cart extends Component {
  render() {
    // console.log('this.props: ', this.props)
    const { productsInCart } = this.props.cart

    const total = commaNumber(calcForCartTotal(productsInCart))
    const totalManuals = totalManualsInCartCalc(productsInCart)
    // console.log('pincart: ', productsInCart)
    // console.log('TOTAL: ', total)
    return (
      <div id="container" className="container vh-100 bg-light py-5">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4 className="text-center text-md-left pt-5 mb-5 mb-md-3 text-muted">
              Your Cart
            </h4>
            <ul className="list-group mb-3">
              {productsInCart.length ? (
                productsInCart.map(product => {
                  // console.log('PRODUCT: ', product)
                  const totalManualsForItem = totalManualsForItemCalc(product)
                  return (
                    <CartItem
                      key={product.uniqueId}
                      id={product._id}
                      product={product}
                      totalManualsForItem={totalManualsForItem}
                      totalManuals={totalManuals}
                      // onChange={this.onChange}
                    />
                  )
                })
              ) : (
                <li className="list-group-item container">
                  <div>
                    <h5 className="my-0">
                      No items in cart.{'  '}
                      <Link
                        to="/store"
                        style={{ fontSize: '16px' }}
                        className="btn btn-secondary btn-sm py-0"
                      >
                        Store
                      </Link>
                    </h5>
                  </div>
                </li>
              )}
              {/* ----------------- SHOWN ON SMALLER WIDTH ----------------- */}
              <li className="list-group-item container py-4 d-sm-block d-md-none">
                <div className="row">
                  <div className="col-12 d-flex justify-content-end align-items-center">
                    <span
                      className="mb-0 text-muted"
                      style={{ fontSize: '14px' }}
                    >
                      <strong style={{ fontSize: '16px' }}>Subtotal</strong> (
                      {productsInCart.length} items): ${total}.00
                    </span>
                  </div>
                  <div className="col-12 d-flex justify-content-end align-items-center mt-2">
                    <span
                      className="mb-0 text-muted"
                      style={{ fontSize: '14px' }}
                    >
                      <strong style={{ fontSize: '14px' }}>
                        Total Manuals:
                      </strong>{' '}
                      {commaNumber(totalManuals)}
                    </span>
                  </div>
                  <div className="col-12 d-flex justify-content-end align-items-center mt-5">
                    {/* ----------------- STRIPE CHECKOUT ----------------- */}
                    <UseStripeCheckout
                      name={'Stripe Checkout'}
                      amount={total}
                    />
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center px-0">
                  {/* ----------------- PAYPAL CHECKOUT ----------------- */}
                  {/* onClick = triggers post request to api/orders/paypal */}
                  {/* post request sends productsInCart array in req.body */}
                  {/* server sends data to paypal and redirects the user to paypal */}
                  {/* paypal responds payment success/cancel to server */}
                  {/* Success = open a thank you modal thanking user */}
                  {/* Cancel = return user to cart (items still in cart) */}
                  {/*
                  <UsePayPalCheckout
                    name={'PayPal Checkout'}
                    productsInCart={productsInCart}
                  />
                  */}
                </div>
              </li>
            </ul>
          </div>
          {/* ----------------- SHOWN ON LARGER WIDTH ----------------- */}
          <div className="col-sm-12 col-md-4 py-4 d-none d-md-block">
            <h4 className="pt-sm-3 pt-md-4 pl-3 mb-3">
              <span className=" row text-muted">Subtotal</span>
            </h4>
            <div className="row px-3">
              <div className="card w-100">
                <div className="card-body px-3 py-2">
                  <div className="col-12 d-flex align-items-center px-0">
                    <span
                      className="mb-0 text-muted"
                      style={{ fontSize: '14px' }}
                    >
                      <strong style={{ fontSize: '16px' }}>Subtotal</strong> (
                      {productsInCart.length}{' '}
                      {productsInCart.length === 1 ? 'item' : 'items'}): $
                      {total}
                      .00
                    </span>
                  </div>

                  <div className="col-12 d-flex align-items-center px-0 mt-2">
                    <span
                      className="mb-0 text-muted"
                      style={{ fontSize: '14px' }}
                    >
                      <strong style={{ fontSize: '14px' }}>
                        Total Manuals:
                      </strong>{' '}
                      {commaNumber(totalManuals)}
                    </span>
                  </div>

                  <div className="col-12 d-flex align-items-center px-0 mt-5">
                    {/* ----------------- STRIPE CHECKOUT ----------------- */}
                    <UseStripeCheckout
                      name={'The Road to learn React'}
                      amount={total}
                    />
                  </div>
                  <div className="col-12 d-flex align-items-center px-0">
                    {/* ----------------- PAYPAL CHECKOUT ----------------- */}
                    {/*
                    <UsePayPalCheckout
                      name={'PayPal Checkout'}
                      productsInCart={productsInCart}
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(mapState)(Cart)
