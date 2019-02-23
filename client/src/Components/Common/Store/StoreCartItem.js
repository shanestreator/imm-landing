import React, { Component } from 'react'
// import { packInfo, priceRight } from '../../../Utils/Utils'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import { getOneProduct } from '../../../Redux/Actions/productActions'
import {
  itemModalAddZeros,
  totalManualsForItemCalc
} from '../../../Utils/Utils'

class StoreCartItem extends Component {
  render() {
    // console.log('THIS_PROPS: ', this.props)
    const {
      title,
      manualsPerPack,
      total,
      price,
      quantity
    } = this.props.cart.currentProduct

    const totalManualsForItem = totalManualsForItemCalc({
      manualsPerPack,
      quantity
    })
    // console.log('CURRENT_PRODUCT: ', this.props.cart.currentProduct)
    return (
      <React.Fragment>
        <div className="group-item container">
          <div className="row">
            <div className="col-8 d-flex text-left pl-0 align-items-center">
              <h5 className="my-0">
                {title}

                <div className="row mt-2">
                  <div className="col-12">
                    <span className="text-muted" style={{ fontSize: '18px' }}>
                      ${commaNumber(total)}.00
                    </span>
                  </div>
                  <div className="col-12" style={{ fontSize: '10px' }}>
                    <span className="text-muted">
                      (${itemModalAddZeros(price)} x{' '}
                      {commaNumber(manualsPerPack)} x {quantity})
                    </span>
                  </div>
                  <div className="col-12 mt-3" style={{ fontSize: '14px' }}>
                    Manuals:{' '}
                    <span className="text-muted">
                      {commaNumber(totalManualsForItem)}
                    </span>
                  </div>
                </div>
              </h5>
            </div>
            {/*
            <div className="d-none d-md-block col-3 d-flex justify-content-end align-items-center">
              <div className="row">
                <div className="col-12">
                  <span className="text-muted">
                    ${commaNumber(itemModalAddZeros(total))}
                  </span>
                </div>
                <div className="col-12" style={{ fontSize: '12px' }}>
                  <span className="text-muted">
                    (${storeCardAddOneOrTwoZeros(price)} x{' '}
                    {commaNumber(manualsPerPack)} x {quantity})
                  </span>
                </div>
              </div>
            </div>
            */}
            <div className="col-4 d-flex justify-content-end align-items-center">
              <span
                style={{ fontSize: '16px' }}
                className="mb-0"
                htmlFor="quantity"
              >
                Qty: {quantity}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(
  mapState,
  { getOneProduct }
)(StoreCartItem)
