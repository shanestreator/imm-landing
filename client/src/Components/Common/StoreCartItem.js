import React, { Component } from 'react'
import { packInfo, priceRight } from '../../Utils/Utils'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import { updateCartItem } from '../../Redux/Actions/cartActions'

class CartItem extends Component {
  render() {
    // Functions
    // const { pack, quantity } = this.props.item
    // console.log('STORE.CART.ITEM.THIS.PROPS: ', this.props)
    // PackInfo returns the correct pack information given as property
    // if (!pack) return null

    // const { title, description, price, multiplier } = packInfo(pack)
    // Item total from quantity selected and price of pack
    // const itemTotal = commaNumber(priceRight(quantity, +price, +multiplier))

    return (
      <React.Fragment>
        <div className="group-item container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <h5 className="my-0">
                title
                <p style={{ fontSize: '12px' }} className="text-muted mb-0">
                  description
                </p>
              </h5>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
              <div className="row">
                <div className="col ">
                  <span className="text-muted">itemTotal</span>
                </div>
              </div>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
              <div className="row">
                <h6
                  className="mb-0"
                  htmlFor="quantity"
                  style={{ fontSize: '12px' }}
                >
                  Qty: quantity
                </h6>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapState = ({ product }) => ({ product })

export default connect(
  mapState,
  { updateCartItem }
)(CartItem)
