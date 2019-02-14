import React, { Component } from 'react'

import AdminTextFieldGroup from '../../Components/Common/AdminTextFieldGroup'

class AdminProductForm extends Component {
  render() {
    const {
      product,
      title,
      imageUrl,
      manualsPerPack,
      price,
      onChange
    } = this.props
    return (
      <div>
        <AdminTextFieldGroup
          onChange={onChange}
          label="Title"
          value={title}
          name="title"
          type="text"
          className="form-control"
          icon="fas fa-text-height"
          placeholder={product ? product.title : 'Name Pack'}
        />
        <AdminTextFieldGroup
          onChange={onChange}
          label="ImageUrl"
          value={imageUrl}
          name="imageUrl"
          type="text"
          className="form-control"
          icon="fas fa-camera"
          placeholder={product ? product.imageUrl : 'Image Url'}
        />
        <AdminTextFieldGroup
          onChange={onChange}
          label="manualsPerPack"
          value={manualsPerPack}
          name="manualsPerPack"
          type="text"
          className="form-control"
          icon="fas fa-hashtag"
          placeholder={product ? product.manualsPerPack : 'Pack of # manuals'}
        />
        <AdminTextFieldGroup
          onChange={onChange}
          label="Price"
          value={price}
          name="price"
          type="text"
          className="form-control"
          icon="fas fa-dollar-sign"
          placeholder={product ? product.price : 'Price Each'}
        />
      </div>
    )
  }
}

export default AdminProductForm
