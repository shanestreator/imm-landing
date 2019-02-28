const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const OrderSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  fulfilled: {
    type: Boolean,
    required: true,
    default: false
  },
  email: {
    type: String,
    required: true
  },
  billing: {
    type: Object,
    required: true
  },
  shipping: {
    type: Object,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  created_At: {
    type: Date,
    required: true
  }
})

module.exports = Order = mongoose.model('orders', OrderSchema)
