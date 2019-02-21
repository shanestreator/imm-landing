import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UseStripeCheckout from '../../Components/Common/Checkout/UseStripeCheckout'
import UsePayPalCheckout from '../../Components/Common/Checkout/UsePayPalCheckout'
import commaNumber from 'comma-number'
import { calcForCartTotal } from '../../Utils/Utils'

// Components
import CartItem from '../../Components/Common/CartItem'

import './Cart.css'

class Cart extends Component {
  render() {
    // console.log('this.props: ', this.props)
    const { productsInCart } = this.props.cart

    const total = commaNumber(calcForCartTotal(productsInCart))
    // console.log('TOTAL: ', total)
    return (
      <div id="container" className="container vh-100 bg-light p-5">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h4 className="pt-5 pl-3 mb-3">
              <span className=" row text-muted">Your cart</span>
            </h4>
            <ul className="list-group mb-3">
              {productsInCart.length ? (
                productsInCart.map(product => {
                  // console.log('PRODUCT: ', product)
                  return (
                    <CartItem
                      key={product.uniqueId}
                      id={product._id}
                      product={product}
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
              <li className="list-group-item container d-sm-block d-md-none">
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
                  <div className="col-12 d-flex justify-content-end align-items-center">
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
                  <UsePayPalCheckout
                    name={'PayPal Checkout'}
                    productsInCart={productsInCart}
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* ----------------- SHOWN ON LARGER WIDTH ----------------- */}
          <div className="col-sm-12 col-md-4 d-none d-md-block">
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
                      <strong style={{ fontSize: '16px' }}>Subtotal</strong> (
                      {productsInCart.length} items): ${total}.00
                    </span>
                  </div>
                  <div className="col-12 d-flex align-items-center px-0">
                    {/* ----------------- STRIPE CHECKOUT ----------------- */}
                    <UseStripeCheckout
                      name={'The Road to learn React'}
                      amount={total}
                    />
                  </div>
                  <div className="col-12 d-flex align-items-center px-0">
                    {/* ----------------- PAYPAL CHECKOUT ----------------- */}
                    <UsePayPalCheckout
                      name={'PayPal Checkout'}
                      productsInCart={productsInCart}
                    />
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
