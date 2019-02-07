import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { validNumber, filterStoreOption } from '../../Validation/Store'
import uuidv1 from 'uuid/v1'

import { testAction, addItemToCart } from '../../Redux/Actions/actions'

// CSS
import './Store.css'

class Options extends Component {
  state = {
    couplePack: '',
    familyPack: '',
    groupPack: '',
    businessPack: '',
    companyPack: '',
    bigCompanyPack: '',
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

    if (validNumber(value)) {
      this.setState({
        errors: { [name]: '*Please enter a valid number' },
        couplePack: '',
        familyPack: '',
        groupPack: '',
        businessPack: '',
        companyPack: '',
        bigCompanyPack: ''
      })
    } else {
      const filteredName = this.filterName(name)
      this.setState({
        [name]: value,
        [filteredName[0]]: '',
        [filteredName[1]]: '',
        [filteredName[2]]: '',
        [filteredName[3]]: '',
        [filteredName[4]]: '',
        errors: {}
      })
    }
  }

  onSubmit = evt => {
    evt.preventDefault()
    // Expects an object with a single property (pack type) set equal to the quantity desired
    const pack = filterStoreOption(this.state)
    const packSelected = Object.keys(pack)[0]

    const itemData = {
      id: uuidv1(),
      pack: packSelected,
      quantity: Number(pack[packSelected]),
      created_At: Date()
    }

    this.props.addItemToCart(itemData)
  }

  render() {
    console.log('PROPS: ', this.props)
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
                            <div className="form-group">
                              <input
                                className="form-control mt-5"
                                onChange={this.onChange}
                                type="text"
                                name="couplePack"
                                placeholder="Quantity: 1-100"
                                value={this.state.couplePack}
                              />
                              {errors.couplePack && errorDiv('couplePack')}
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
                        <Link to="/store">
                          <img
                            className="img-fluid"
                            src="/images/add-to-cart.png"
                            alt=""
                          />
                        </Link>
                      </div>
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
                        <Link to="/store">
                          <img
                            className="img-fluid"
                            src="/images/add-to-cart.png"
                            alt=""
                          />
                        </Link>
                      </div>
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
                        <Link to="/store">
                          <img
                            className="img-fluid"
                            src="/images/add-to-cart.png"
                            alt=""
                          />
                        </Link>
                      </div>
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
                        <Link to="/store">
                          <img
                            className="img-fluid"
                            src="/images/add-to-cart.png"
                            alt=""
                          />
                        </Link>
                      </div>
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
  { testAction, addItemToCart }
)(Options)
