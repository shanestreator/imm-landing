import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import UsePayPalCheckout from '../../Components/Common/Checkout/UsePayPalCheckout'
import commaNumber from 'comma-number'
import {
  calcForCartTotal,
  totalManualsForItemCalc,
  totalManualsInCartCalc
} from '../../Utils/Utils'

import OrderSummaryTable from '../../Components/Common/Cart/OrderSummaryTable'

// Components
import CartItem from '../../Components/Common/CartItem'

class Cart extends Component {
  render() {
    const { productsInCart } = this.props.cart

    const total = commaNumber(calcForCartTotal(productsInCart))
    const totalManuals = totalManualsInCartCalc(productsInCart)

    return (
      <div
        id="container"
        className="container cart__container-shadow min-vh-100 bg-light py-5"
      >
        <div className="container-md px-lg-4">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <div className="container pl-0">
                <h4 className="text-left pt-5 mb-4 mb-md-3 text-muted">
                  Your Cart
                </h4>
              </div>
              <ul className="list-group mb-3">
                {productsInCart.length ? (
                  productsInCart.map(product => {
                    const totalManualsForItem = totalManualsForItemCalc(product)
                    return (
                      <CartItem
                        key={product.uniqueId}
                        id={product._id}
                        product={product}
                        totalManualsForItem={totalManualsForItem}
                        totalManuals={totalManuals}
                      />
                    )
                  })
                ) : (
                  <li className="list-group-item container">
                    <div>
                      <h5 className="my-0 text-center">
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
                    </div>
                  </li>
                )}
                {/* ----------------- SHOWN ON SMALLER WIDTH ----------------- */}
                <li className="list-group-item container py-4 d-md-block d-lg-none">
                  <div className="row">
                    <div className="col-3 d-none d-sm-block d-lg-none">
                      <div
                        style={{ background: 'lightslategray', opacity: '.5' }}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <OrderSummaryTable
                        productsInCart={productsInCart}
                        totalManuals={totalManuals}
                        total={total}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* ----------------- SHOWN ON LARGER WIDTH ----------------- */}
            <div className="col-sm-12 col-md-4 py-4 d-none d-lg-block">
              <h4 className="pt-sm-3 pt-md-4 pl-3 mb-3">
                <span className=" row text-muted">Order Summary</span>
              </h4>
              <div className="row px-3">
                <div className="card w-100">
                  <div className="card-body px-3 py-2">
                    <OrderSummaryTable
                      productsInCart={productsInCart}
                      totalManuals={totalManuals}
                      total={total}
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
