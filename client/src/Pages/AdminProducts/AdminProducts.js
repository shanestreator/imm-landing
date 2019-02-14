import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  addProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct
} from '../../Redux/Actions/productActions'
import titleToName from '../../Utils/titleToName'

// Components
import AdminProductItem from '../../Components/Common/AdminProductItem'
import AdminProductForm from '../../Components/Common/AdminProductForm'

class AdminProducts extends Component {
  state = {
    imageUrl: '',
    title: '',
    manualsPerPack: '',
    price: ''
  }

  componentDidMount() {
    this.props.getAllProducts()
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { imageUrl, title, manualsPerPack, price } = this.state

    const itemData = {
      imageUrl,
      title,
      manualsPerPack,
      price
    }

    this.props.addProduct(itemData)
  }

  render() {
    // console.log('ADMIN_PRODUCTS_PROPS: ', this.props)
    // console.log('ADMIN_PRODUCTS_STATE: ', this.state)
    const { allProducts } = this.props.product
    // console.log('ALL_PRODUCTS: ', allProducts)
    return (
      <div id="container" className="container py-5 pb-3 bg-light">
        <div className="row d-flex justify-content-center">
          <div className="pricing-header px-5 text-center w-100">
            <h1 className="">Add Product</h1>

            <AdminProductForm
              title={this.state.title}
              imageUrl={this.state.imageUrl}
              manualsPerPack={this.state.manualsPerPack}
              price={this.state.price}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />

            <div className="d-flex justify-content-end mt-2">
              <button className="btn btn-secondary" onClick={this.onSubmit}>
                Add Product
              </button>
            </div>
          </div>

          <div className="container px-5 pt-3">
            <div className="card-deck mb-3">
              <div className="row d-flex justify-content-center text-center">
                {allProducts.length ? (
                  allProducts.map(product => {
                    return (
                      <AdminProductItem
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        name={titleToName(product.title)}
                        imgUrl={product.imageUrl}
                        priceEach={product.price}
                        numManuals={product.manualsPerPack}
                        getOneProduct={this.props.getOneProduct}
                        deleteProduct={this.props.deleteProduct}
                      />
                    )
                  })
                ) : (
                  <h1>Currently No Products</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ product }) => ({ product })

export default connect(
  mapState,
  { addProduct, getAllProducts, getOneProduct, deleteProduct }
)(AdminProducts)
