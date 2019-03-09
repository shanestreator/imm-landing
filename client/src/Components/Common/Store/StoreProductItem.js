import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'

import {
  addItemToCart,
  getAllCartItems
} from '../../../Redux/Actions/cartActions'

import { getAllProducts } from '../../../Redux/Actions/productActions'

import { calcForItemTotal, itemModalAddZeros } from '../../../Utils/Utils'

// Components
import StoreCartItem from './StoreCartItem'

class StoreProductItem extends React.Component {
  state = {
    quantity: '',
    alreadyInCart: false,
    modalToggle: false
  }

  componentWillMount() {
    this.setState({ quantity: '' })
  }

  componentDidMount() {
    this.setState({ quantity: '' })
  }

  onContinueShopping = () => {
    this.setState({ quantity: '' })

    this.props.getAllCartItems()
  }

  onClickGoToCart = () => {
    this.props.history.push('/cart')
  }

  // onModalToggle = () => {
  //   if (this.state.quantity === 0) {
  //     this.setState({ modalToggle: false })
  //   } else {
  //     this.setState({ modalToggle: true })
  //   }
  // }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { allProducts } = this.props.product
    const { quantity } = this.state

    this.setState({ quantity: '' })
    // Find database product that matches by id
    const itemData = allProducts.find(prod => prod._id === this.props.id)

    itemData.quantity = 1
    itemData.total = calcForItemTotal(
      itemData.price,
      1,
      itemData.manualsPerPack
    )

    this.props.addItemToCart(itemData)
  }

  render() {
    const { title, name, imageUrl, price, manualsPerPack } = this.props.prodInfo

    return (
      <React.Fragment>
        <div className="col-6 col-md-6 col-lg-4 col-xl-4 p-2 mt-5">
          <div className="card h-100 store__card-hover mb-4">
            <img src={imageUrl} className="card-img-top" alt="..." />

            <div className="card-body px-2 px-md-1">
              <h1 className="card-title pricing-card-title">
                <h3 className="mb-0 about__media-title">{title}</h3>
              </h1>

              <form onSubmit={this.onSubmit}>
                <ul className="list-unstyled mt-3 mb-4">
                  <li
                    className="about__media-price-total"
                    style={{ color: '#be141b', opacity: '.75' }}
                  >
                    ${commaNumber(itemModalAddZeros(price * manualsPerPack))}
                  </li>

                  <li>
                    <p className="card-title about__media-price-each pricing-card-title font-italic">
                      (${itemModalAddZeros(price)}
                      <small className="text-muted">
                        /
                        <span className="about__media-smaller-text-20px">
                          ea
                        </span>
                      </small>
                      )
                    </p>
                  </li>
                </ul>

                <div className="p-1 p-md-4">
                  <button
                    type="submit"
                    className="btn store__add-button about__media-smaller-text-button"
                    disabled={this.props.alreadyInCart}
                    data-toggle="modal"
                    data-target={`#${name}Modal`}
                  >
                    <strong>Add To Cart</strong>
                  </button>
                </div>

                {this.props.alreadyInCart && (
                  <Link to="/cart" style={{ fontSize: '12px', color: 'red' }}>
                    Item in cart
                  </Link>
                )}
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
              {/* ----------------- MODAL DISPLAY CONDITIONAL ----------------- */}
              {!this.state.alreadyInCart ? (
                <React.Fragment>
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
                    {/* -------- STORE CART ITEM -------- */}

                    <StoreCartItem />

                    {/* --------------------------------- */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={this.onContinueShopping}
                    >
                      Continue Shopping
                    </button>
                    <button
                      type="button"
                      className="btn store__add-button"
                      data-dismiss="modal"
                      onClick={this.onClickGoToCart}
                    >
                      Go To Cart
                    </button>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="modal-header">
                    <h5 className="modal-title" id={`${name}ModalLabel`}>
                      Not Available
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

                    <div className="mt-3">
                      <p>Select an option that is not already in your cart.</p>
                      <p>
                        Questions? <Link to="/contact">Contact us!</Link>
                      </p>
                    </div>

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
                      className="btn store__add-button"
                      data-dismiss="modal"
                      onClick={this.onClickGoToCart}
                    >
                      Go To Cart
                    </button>
                  </div>
                </React.Fragment>
              )}
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
  { getAllProducts, addItemToCart, getAllCartItems }
)(withRouter(StoreProductItem))
