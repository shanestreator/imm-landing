import React, { Component } from 'react'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'

import { getAllProducts } from '../../Redux/Actions/productActions'

import { itemModalAddZeros } from '../../Utils/Utils'

import {
  removeItemFromCart,
  updateCartItem
} from '../../Redux/Actions/cartActions'

class CartItem extends Component {
  state = {
    quantity: this.props.product.quantity
  }
  onConfirmDelete = () => {
    const { _id } = this.props.product
    this.props.removeItemFromCart(_id)
  }

  onChange = evt => {
    const { _id } = this.props.product
    const { value: quantity } = evt.target
    const updateQuantity = { _id, quantity }

    this.props.updateCartItem(updateQuantity)
  }

  render() {
    const { title, manualsPerPack, price, total } = this.props.product

    return (
      <React.Fragment>
        <li className="list-group-item container">
          <div className="row">
            <div className="col-9 d-flex align-items-center">
              <h5 className="my-0">
                {title}
                <div className="row mt-2">
                  <div className="col-12" style={{ fontSize: '14px' }}>
                    Item Total:
                  </div>
                  <div className="col-12 mb-1">
                    <span className="text-muted" style={{ fontSize: '18px' }}>
                      ${commaNumber(total)}.00
                    </span>
                  </div>
                  <div className="col-12" style={{ fontSize: '10px' }}>
                    <span className="text-muted">
                      (${itemModalAddZeros(price)} x{' '}
                      {commaNumber(manualsPerPack)} manuals)
                    </span>
                  </div>
                </div>
              </h5>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
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
