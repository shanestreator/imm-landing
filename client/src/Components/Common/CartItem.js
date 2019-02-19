import React, { Component } from 'react'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'

import { getAllProducts } from '../../Redux/Actions/productActions'

import {
  removeItemFromCart,
  updateCartItem
} from '../../Redux/Actions/cartActions'

class CartItem extends Component {
  state = {
    quantity: this.props.product.quantity
  }
  onConfirmDelete = () => {
    // console.log('this.props.product: ', this.props.product)
    // const result = window.confirm(
    //   'Are you sure you want to remove this item from the cart?'
    // )
    // if (result) {

    // }
    const { _id } = this.props.product
    this.props.removeItemFromCart(_id)
  }

  onChange = evt => {
    const { _id } = this.props.product
    const { value: quantity } = evt.target
    const updateQuantity = { _id, quantity }

    console.log('onChange: ', updateQuantity)
    this.props.updateCartItem(updateQuantity)
  }

  render() {
    // console.log('CART.PROPS: ', this.props)
    // const { onChange } = this.props
    const { title, manualsPerPack, quantity, price, total } = this.props.product

    return (
      <React.Fragment>
        <li className="list-group-item container">
          <div className="row">
            <div className="col-7 d-flex align-items-center">
              <h5 className="my-0">
                {title}
                <p style={{ fontSize: '9px' }} className="text-muted mb-0">
                  Pack of {commaNumber(manualsPerPack)} manuals
                </p>
                <div className="row mt-2">
                  <div className="col-12">
                    <span className="text-muted">${commaNumber(total)}.00</span>
                  </div>
                  <div className="col-12" style={{ fontSize: '8.5px' }}>
                    <span className="text-muted">
                      (${price} x {manualsPerPack} x {quantity})
                    </span>
                  </div>
                </div>
              </h5>
            </div>

            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end px-0">
                  <div className="mr-md-2 mb-sm-1">
                    <h6
                      className="mb-0"
                      htmlFor="quantity"
                      style={{ fontSize: '12px' }}
                    >
                      Qty:
                    </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center px-0">
                  <select
                    className="form-control-sm"
                    onChange={this.onChange}
                    name="quantity"
                    defaultValue={quantity}
                    id="quantity"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-2 d-flex justify-content-end align-items-center">
              <button
                onClick={this.onConfirmDelete}
                className="btn btn-sm text-dark p-0"
                style={{ fontSize: '8.5px' }}
              >
                delete
              </button>
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(
  mapState,
  { getAllProducts, removeItemFromCart, updateCartItem }
)(CartItem)
