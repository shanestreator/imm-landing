import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addItemToCart } from '../../Redux/Actions/cartActions'
import { getAllProducts } from '../../Redux/Actions/productActions'

// Components
import StoreProductItem from '../../Components/Common/Store/StoreProductItem'
import Loading from '../../Components/Common/Loading/Loading'

class Store extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const { allProducts } = this.props.product

    return (
      <div
        id="container"
        className="container store__container-shadow text-center py-5 pb-3 bg-light d-flex justify-content-center"
      >
        <div className="container-md px-md-4">
          <div className="row d-flex justify-content-center">
            <div className="pricing-header px-5 text-center">
              <h1 className="display-4 mb-0">Pricing</h1>
              {/*
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
            */}
            </div>

            <div className="container px-2 px-md-5 pt-3">
              <div className="card-deck d-flex justify-content-center mb-3 text-center">
                <div className="row d-flex justify-content-center">
                  {allProducts.length ? (
                    allProducts.map(product => {
                      const alreadyInCart = !!this.props.cart.productsInCart.find(
                        p => p._id === product._id
                      )
                      console.log('alreadyInCart: ', alreadyInCart)
                      return (
                        <StoreProductItem
                          key={product._id}
                          id={product._id}
                          prodInfo={product}
                          alreadyInCart={alreadyInCart}
                        />
                      )
                    })
                  ) : allProducts.length === 0 ? (
                    <div className="">
                      <Loading />
                    </div>
                  ) : (
                    <h1>No Products</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ product, cart }) => ({
  product,
  cart
})

export default connect(
  mapState,
  { getAllProducts, addItemToCart }
)(Store)
