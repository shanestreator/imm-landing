import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProduct } from '../../../Redux/Actions/productActions'

// Components
import AdminProductForm from './AdminProductForm'

class AdminEditProduct extends Component {
  state = {
    imageUrl: '',
    title: '',
    manualsPerPack: '',
    price: ''
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { currentProduct } = this.props.product

    let { imageUrl, title, manualsPerPack, price } = this.state

    if (!imageUrl) {
      imageUrl = currentProduct.imageUrl
    }
    if (!title) {
      title = currentProduct.title
    }
    if (!manualsPerPack) {
      manualsPerPack = currentProduct.manualsPerPack
    }
    if (!price) {
      price = currentProduct.price
    }

    const newProductInfo = {
      id: currentProduct._id,
      imageUrl,
      title,
      manualsPerPack,
      price
    }

    this.props.updateProduct(newProductInfo)
  }

  render() {
    const product = this.props.product.currentProduct

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Product
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
                <AdminProductForm
                  product={product}
                  title={this.state.title}
                  imageUrl={this.state.imageUrl}
                  manualsPerPack={this.state.manualsPerPack}
                  price={this.state.price}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                  data-dismiss="modal"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
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
  { updateProduct }
)(AdminEditProduct)
