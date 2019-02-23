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
import AdminProductItem from '../../Components/Common/Admin/AdminProductItem'
import AdminTextFieldGroup from '../../Components/Common/Admin/AdminTextFieldGroup'

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
    this.setState({
      imageUrl: '',
      title: '',
      manualsPerPack: '',
      price: ''
    })
  }

  render() {
    // console.log('ADMIN_PRODUCTS_PROPS: ', this.props)
    // console.log('ADMIN_PRODUCTS_STATE: ', this.state)
    const { allProducts, currentProduct: product } = this.props.product
    // console.log('CURRENT_PRODUCT: ', product)
    return (
      <div id="container" className="container py-5 pb-3 bg-light">
        <div className="row d-flex justify-content-center">
          <div className="pricing-header px-5 text-center w-100">
            <h1 className="">Add Product</h1>

            <div>
              <AdminTextFieldGroup
                onChange={this.onChange}
                label="Title"
                value={this.state.title}
                name="title"
                type="text"
                className="form-control"
                icon="fas fa-text-height"
                placeholder="Name"
              />
              <AdminTextFieldGroup
                onChange={this.onChange}
                label="ImageUrl"
                value={this.state.imageUrl}
                name="imageUrl"
                type="text"
                className="form-control"
                icon="fas fa-camera"
                placeholder="Image Url"
              />
              <AdminTextFieldGroup
                onChange={this.onChange}
                label="manualsPerPack"
                value={this.state.manualsPerPack}
                name="manualsPerPack"
                type="text"
                className="form-control"
                icon="fas fa-hashtag"
                placeholder="Pack of # manuals"
              />
              <AdminTextFieldGroup
                onChange={this.onChange}
                label="Price"
                value={this.state.price}
                name="price"
                type="text"
                className="form-control"
                icon="fas fa-dollar-sign"
                placeholder="Price Each"
              />
            </div>

            <div className="d-flex justify-content-end mt-2">
              <button
                disabled={!this.state.title}
                className="btn btn-secondary"
                onClick={this.onSubmit}
              >
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
