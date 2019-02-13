import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserAdmin } from '../../Redux/Actions/Admin/actions'

// Components
import TextFieldGroup from '../../Components/Common/TextFieldGroup'
import StoreCartItem from '../../Components/Common/StoreCartItem'
import AdminProductItem from '../../Components/Common/AdminProductItem'

class AdminProducts extends Component {
  state = {
    name: '',
    amount: '',
    price: ''
  }

  componentDidMount() {
    const id = localStorage.id
    this.props.getUserAdmin(id)
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { email, password } = this.state

    const userData = {
      email,
      password
    }

    this.props.loginUserAdmin(userData, this.props.history)
  }

  render() {
    console.log(this.props)
    return (
      <div
        id="container"
        className="container py-5 pb-3 bg-light d-flex justify-content-center"
      >
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
                <AdminProductItem
                  name="Couple Pack"
                  priceEach="5"
                  numManuals="2"
                  item={this.props.item}
                  onClickGoToCart={this.onClickGoToCart}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                {/* -------------------- $4.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/manuals/imm-10.PNG"
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
                            <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                                  <div className="mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="familyPack"
                                    defaultValue={this.state.familyPack}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!+this.state.familyPack}
                            data-toggle="modal"
                            data-target="#familyPackModal"
                          >
                            <strong>Add To Cart</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="familyPackModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="familyPackModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="familyPackModalLabel">
                          Added To Cart
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <StoreCartItem item={this.props.item} />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Continue Shopping
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={this.onClickGoToCart}
                        >
                          Go To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------- $4 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/manuals/imm-25.PNG"
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
                            <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                                  <div className="mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="groupPack"
                                    defaultValue={this.state.groupPack}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!+this.state.groupPack}
                            data-toggle="modal"
                            data-target="#groupPackModal"
                          >
                            <strong>Add To Cart</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="groupPackModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="groupPackModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="groupPackModalLabel">
                          Added To Cart
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <StoreCartItem item={this.props.item} />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Continue Shopping
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={this.onClickGoToCart}
                        >
                          Go To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------- $3.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/manuals/imm-100.png"
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
                            <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                                  <div className="mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="businessPack"
                                    defaultValue={this.state.businessPack}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!+this.state.businessPack}
                            data-toggle="modal"
                            data-target="#businessPackModal"
                          >
                            <strong>Add To Cart</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="businessPackModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="businessPackModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="businessPackModalLabel">
                          Added To Cart
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <StoreCartItem item={this.props.item} />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Continue Shopping
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={this.onClickGoToCart}
                        >
                          Go To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------- $3 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/manuals/imm-1000.png"
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
                            <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                                  <div className="mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="companyPack"
                                    defaultValue={this.state.companyPack}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!+this.state.companyPack}
                            data-toggle="modal"
                            data-target="#companyPackModal"
                          >
                            <strong>Add To Cart</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="companyPackModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="companyPackModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="companyPackModalLabel">
                          Added To Cart
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <StoreCartItem item={this.props.item} />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          Continue Shopping
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={this.onClickGoToCart}
                        >
                          Go To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------- $2.50 -------------------- */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                  <div className="card card-red-hover mb-4 shadow">
                    <img
                      src="/images/manuals/imm-5000.png"
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
                            <div className="col d-flex justify-content-center align-items-center px-0 mt-5">
                              <div className="row">
                                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end pl-0 pr-1">
                                  <div className="mb-sm-1">
                                    <h6
                                      className="mb-0"
                                      htmlFor="quantity"
                                      style={{ fontSize: '16px' }}
                                    >
                                      Qty:
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center px-0">
                                  <select
                                    className="form-control-sm"
                                    onChange={this.onChange}
                                    name="bigCompanyPack"
                                    defaultValue={this.state.bigCompanyPack}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!+this.state.bigCompanyPack}
                            data-toggle="modal"
                            data-target="#bigCompanyPackModal"
                          >
                            <strong>Add To Cart</strong>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="bigCompanyPackModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="bigCompanyPackModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="bigCompanyPackModalLabel"
                          >
                            Added To Cart
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <StoreCartItem item={this.props.item} />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Continue Shopping
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={this.onClickGoToCart}
                          >
                            Go To Cart
                          </button>
                        </div>
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

const mapState = ({ admin, item }) => ({ admin, item })

export default connect(
  mapState,
  { getUserAdmin }
)(AdminProducts)
