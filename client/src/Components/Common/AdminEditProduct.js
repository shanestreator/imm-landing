import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProduct } from '../../Redux/Actions/productActions'

// Components
import AdminProductForm from '../../Components/Common/AdminProductForm'

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
    const { imageUrl, title, manualsPerPack, price } = this.state

    const newItemData = {
      imageUrl,
      title,
      manualsPerPack,
      price
    }

    this.props.updateProduct(newItemData)
  }

  render() {
    // console.log('ADMIN_PRODUCTS_PROPS: ', this.props)
    // console.log('ADMIN_PRODUCTS_STATE: ', this.state)
    const product = this.props.product.currentProduct

    return (
      <AdminProductForm
        product={product}
        title={this.state.title}
        imageUrl={this.state.imageUrl}
        manualsPerPack={this.state.manualsPerPack}
        price={this.state.price}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapState = ({ product }) => ({ product })

export default connect(
  mapState,
  { updateProduct }
)(AdminEditProduct)
