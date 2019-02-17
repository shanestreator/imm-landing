import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterStoreOption } from '../../Validation/Store'
import uuidv1 from 'uuid/v1'

import titleToName from '../../Utils/titleToName'
import nameToTitle from '../../Utils/nameToTitle'

import { addItemToCart } from '../../Redux/Actions/cartActions'
import { getAllProducts } from '../../Redux/Actions/productActions'
import { packInfo } from '../../Utils/Utils'

// Components
// import StoreCartItem from '../../Components/Common/Store/StoreCartItem'
import StoreProductItem from '../../Components/Common/Store/StoreProductItem'

// CSS
import './Store.css'

class Store extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const { allProducts } = this.props.product

    return (
      <div
        id="container"
        className="container py-5 pb-3 bg-light d-flex justify-content-center"
      >
        <div className="row">
          <div className="pricing-header px-5 text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>

          <div className="container px-5 pt-3">
            <div className="card-deck mb-3 text-center">
              <div className="row d-flex justify-content-center">
                {allProducts.length ? (
                  allProducts.map(product => {
                    return (
                      <StoreProductItem
                        key={product._id}
                        id={product._id}
                        prodInfo={product}
                      />
                    )
                  })
                ) : (
                  <h1>No Products</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ product }) => ({
  product
})

export default connect(
  mapState,
  { getAllProducts, addItemToCart }
)(Store)
