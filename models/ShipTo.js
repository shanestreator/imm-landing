const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ShipToSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  shippingAddress2: {
    type: String
  },
  shippingCountry: {
    type: String,
    required: true
  },
  shippingState: {
    type: String,
    required: true
  },
  shippingZip: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = ShipTo = mongoose.model('shiptos', ShipToSchema)
