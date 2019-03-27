import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItemToCart } from '../../Redux/Actions/cartActions'
import { getAllProducts } from '../../Redux/Actions/productActions'
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
          <div className="py-4" />
          <div className="row d-flex justify-content-center align-items-center">
            <div className="row w-100 mt-5">
              <div className="col-3" />

              <div className="col-6 d-flex justify-content-center align-items-center">
                <h1 className="display-4 m-0">Pricing</h1>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-end">
                <picture>
                  <source
                    type="image/webp"
                    srcset="/images/free-shipping-car.webp"
                  />
                  <source
                    type="image/png"
                    srcset="/images/free-shipping-car.png"
                  />
                  <img
                    src="image/png"
                    alt="free shipping"
                    className="img-fluid px-md-4 px-lg-5"
                  />
                </picture>
              </div>
            </div>

            <div className="pricing-header px-5 mt-5 text-center">
              <h3 className="mt-2">Online purchase coming soon!</h3>

              <h3>
                To inquire about product availability{' '}
                <Link
                  className="base__hover-link-underline"
                  to="/contact"
                  style={{ color: '#be141b' }}
                >
                  Click Here
                </Link>
              </h3>
            </div>

            <div className="container px-2 px-md-5 pt-3">
              <div className="card-deck d-flex justify-content-center mb-3 text-center">
                <div className="row d-flex justify-content-center">
                  {allProducts.length ? (
                    allProducts.map(product => {
                      const alreadyInCart = !!this.props.cart.productsInCart.find(
                        p => p._id === product._id
                      )
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

            <div className="pricing-header px-5 mt-5 text-center">
              <h3>
                For custom size orders{' '}
                <Link
                  className="base__hover-link-underline"
                  to="/contact"
                  style={{ color: '#be141b' }}
                >
                  Click Here
                </Link>{' '}
                to contact us
              </h3>
            </div>
          </div>
          <div className="py-5" />
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
