const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const OrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
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
