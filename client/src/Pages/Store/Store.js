import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterStoreOption } from '../../Validation/Store'
import uuidv1 from 'uuid/v1'

import { addItemToCart } from '../../Redux/Actions/actions'

// CSS
import './Store.css'

class Options extends Component {
  state = {
    couplePack: '0',
    familyPack: '0',
    groupPack: '0',
    businessPack: '0',
    companyPack: '0',
    bigCompanyPack: '0',
    errors: {}
  }

  componentDidMount() {
    // console.log('COMPONENT_DID_MOUNT')
    // this.props.testAction()
  }

  filterName = name => {
    return [
      'couplePack',
      'familyPack',
      'groupPack',
      'businessPack',
      'companyPack',
      'bigCompanyPack'
    ].filter(el => el !== name)
  }

  onChange = evt => {
    const { name, value } = evt.target

    const filteredName = this.filterName(name)
    this.setState({
      [name]: value,
      [filteredName[0]]: '0',
      [filteredName[1]]: '0',
      [filteredName[2]]: '0',
      [filteredName[3]]: '0',
      [filteredName[4]]: '0',
      errors: {}
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    // Expects an object with a single property (pack type) set equal to the quantity desired
    const pack = filterStoreOption(this.state)
    const packSelected = Object.keys(pack)[0]
    // console.log('pack: ', typeof pack, 'selected: ', typeof packSelected)
    const itemData = {
      id: uuidv1(),
      pack: packSelected,
      quantity: Number(pack[packSelected]),
      created_At: Date()
    }
    console.log('itemData: ', itemData)
    this.props.addItemToCart(itemData)
  }

  render() {
    console.log('PROPS: ', this.props)
    // console.log('STATE: ', typeof this.state.couplePack)

    const { errors } = this.state

    const errorDiv = pack => (
      <div className="pt-2" style={{ fontSize: '16px' }}>
        <p style={{ color: 'red' }}>
          <small>{errors[pack]}</small>
        </p>
        <p>
          <small>
            More than 100? <Link to="/contact">Contact Us!</Link>
          </small>
        </p>
      </div>
    )

    return (
      <div className="container py-5 pb-3 bg-light d-flex justify-content-center">
        <div className="row">
          <div className="pricing-header px-5 text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>

          <div className="container px-5 pt-3">
            <div className="card-deck mb-3 text-center">
              <div className="row">
                {/* -------------------- $5 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4">
                    <img
                      src="/images/imm-1.PNG"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $5 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Couple Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 2 manuals)</small>
                          </li>
                          <li>
                            <div className="col-3 d-flex justify-content-center align-items-center">
                              <div className="row">
                                <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end px-0">
                                  <div className="mr-md-2 mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="couplePack"
                                    defaultValue={this.state.couplePack}
                                    id="quantity"
                                  >
                                    <option value="0">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <button type="submit" className="p-0 border-0">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt="add to cart"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* -------------------- $4.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/imm-10.PNG"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $4.50 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Family Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 10 manuals)</small>
                          </li>
                          <li>
                            <div>
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="familyPack"
                                placeholder="Quantity: 1-100"
                                value={this.state.familyPack}
                              />
                              {errors.familyPack && errorDiv('familyPack')}
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <button type="submit" className="p-0 border-0">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt="add to cart"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* -------------------- $4 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/imm-25.PNG"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $4 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Group Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 25 manuals)</small>
                          </li>
                          <li>
                            <div>
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="groupPack"
                                placeholder="Quantity: 1-100"
                                value={this.state.groupPack}
                              />
                              {errors.groupPack && errorDiv('groupPack')}
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <button type="submit" className="p-0 border-0">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt="add to cart"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* -------------------- $3.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/imm-25.PNG"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $3.50 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Business Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 100 manuals)</small>
                          </li>
                          <li>
                            <div>
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="businessPack"
                                placeholder="Quantity: 1-100"
                                value={this.state.businessPack}
                              />
                              {errors.businessPack && errorDiv('businessPack')}
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <button type="submit" className="p-0 border-0">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt="add to cart"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* -------------------- $3 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/imm-25.PNG"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $3 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Company Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 1,000 manuals)</small>
                          </li>
                          <li>
                            <div>
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="companyPack"
                                placeholder="Quantity: 1-100"
                                value={this.state.companyPack}
                              />
                              {errors.companyPack && errorDiv('companyPack')}
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <Link to="/store">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* -------------------- $2.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/imm-25.PNG"
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $2.50 <small className="text-muted">/ ea</small>
                      </h1>
                      <form onSubmit={this.onSubmit}>
                        <ul className="list-unstyled text-muted mt-3 mb-4">
                          <li className="font-italic">
                            <h3 className="mb-0">Big-Company Pack</h3>
                          </li>
                          <li style={{ fontSize: '12px' }}>
                            <small>(Pack of 5,000 manuals)</small>
                          </li>
                          <li>
                            <div>
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="bigCompanyPack"
                                placeholder="Quantity: 1-100"
                                value={this.state.bigCompanyPack}
                              />
                              {errors.bigCompanyPack &&
                                errorDiv('bigCompanyPack')}
                            </div>
                          </li>
                        </ul>
                        <div className="p-4">
                          <button type="submit" className="p-0 border-0">
                            <img
                              className="img-fluid"
                              src="/images/add-to-cart.png"
                              alt="add to cart"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
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

const mapState = ({ cart }) => ({
  cart
})

export default connect(
  mapState,
  { addItemToCart }
)(Options)
