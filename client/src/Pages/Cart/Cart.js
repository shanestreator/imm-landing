import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import { packInfo } from '../../Utils/Utils'

import { removeItemFromCart } from '../../Redux/Actions/Cart/actions'

// Components
import CartItem from '../../Components/Common/CartItem'

import './Cart.css'

class Cart extends Component {
  getSubTotal = cart => {
    let subTotal = ''
    let temp = 0
    cart.map(item => {
      const { pack, quantity } = item
      const { price, multiplier } = packInfo(pack)

      temp += quantity * price * multiplier
    })

    temp = String(temp)

    if (!temp.includes('.')) {
      subTotal += temp + '.00'
    } else if (temp.includes('.5')) {
      subTotal += temp + '0'
    }

    return commaNumber(subTotal)
  }

  render() {
    const { cart, removeItemFromCart } = this.props

    return (
      <div id="container" className="container bg-light p-5">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4 className="pt-5 pl-3 mb-3">
              <span className=" row text-muted">Your cart</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.length ? (
                cart.map(item => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    pack={item.pack}
                    quantity={item.quantity}
                    created_At={item.created_At}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))
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
              <li className="list-group-item container d-sm-block d-md-none">
                <div className="row">
                  <div className="col-12 d-flex justify-content-end align-items-center">
                    <span
                      className="mb-0 text-muted"
                      style={{ fontSize: '14px' }}
                    >
                      <strong style={{ fontSize: '16px' }}>Subtotal</strong> (
                      {cart.length} items): ${this.getSubTotal(cart)}
                    </span>
                  </div>
                  <div className="col-12 d-flex justify-content-end align-items-center">
                    <button className="btn btn-secondary btn-sm mt-2">
                      PayPal
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-4 d-none d-md-block">
            {cart.length ? (
              <React.Fragment>
                <h4 className="pt-sm-3 pt-md-5 pl-3 mb-3">
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
                          <strong style={{ fontSize: '16px' }}>Subtotal</strong>{' '}
                          ({cart.length} items): ${this.getSubTotal(cart)}
                        </span>
                      </div>
                      <div className="col-12 d-flex align-items-center px-0">
                        <button className="btn btn-secondary btn-sm mt-2">
                          PayPal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h4 className="pt-sm-3 pt-md-5 pl-3 mb-3">
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
                          <strong style={{ fontSize: '16px' }}>Subtotal</strong>{' '}
                          ({cart.length} items): ${this.getSubTotal(cart)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(
  mapState,
  { removeItemFromCart }
)(Cart)
