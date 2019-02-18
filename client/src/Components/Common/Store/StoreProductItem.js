import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import uuidv1 from 'uuid/v1'

import { addItemToCart } from '../../../Redux/Actions/cartActions'

import { calcForItemTotal } from '../../../Utils/Utils'

// Components
import StoreCartItem from './StoreCartItem'

class StoreProductItem extends React.Component {
  state = {
    quantity: '',
    uniqueId: uuidv1()
  }

  onClickGoToCart = () => {
    this.props.history.push('/cart')
  }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { allProducts } = this.props.product
    const { quantity } = this.state

    // Find database product that matches by id
    const itemData = allProducts.find(prod => prod._id === this.props.id)

    const { price, manualsPerPack } = itemData

    itemData.quantity = quantity
    itemData.uniqueId = uuidv1()
    itemData.total = commaNumber(
      calcForItemTotal(price, quantity, manualsPerPack)
    )

    this.props.addItemToCart(itemData)
  }

  render() {
    const { title, name, imageUrl, price, manualsPerPack } = this.props.prodInfo
    // console.log('STORE_PRODUCT_ITEM_PROPS: ', this.props)
    // console.log('STORE_PRODUCT_ITEM_STATE: ', this.state)
    // console.log('CART: ', this.props.cart)
    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-2">
          <div className="card card-red-hover mb-4">
            <img src={imageUrl} className="card-img-top" alt="..." />

            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                ${price} <small className="text-muted">/ ea</small>
              </h1>
              <form onSubmit={this.onSubmit}>
                <ul className="list-unstyled text-muted mt-3 mb-4">
                  <li className="font-italic">
                    <h3 className="mb-0">{title}</h3>
                  </li>
                  <li style={{ fontSize: '12px' }}>
                    <small>
                      (Pack of {commaNumber(manualsPerPack)} manuals)
                    </small>
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
                            name="quantity"
                            defaultValue={this.state.quantity}
                          >
                            <option value="">Select</option>
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
                    disabled={!this.state.quantity}
                    data-toggle="modal"
                    data-target={`#${name}Modal`}
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
          id={`${name}Modal`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`${name}ModalLabel`}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${name}ModalLabel`}>
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
                {/* ----------------- STORE CART ITEM ----------------- */}

                <StoreCartItem />

                {/* --------------------------------------------------- */}
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
      </React.Fragment>
    )
  }
}

const mapState = ({ product, cart }) => ({ product, cart })

export default connect(
  mapState,
  { addItemToCart }
)(withRouter(StoreProductItem))
