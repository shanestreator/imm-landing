const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CheckoutSchema = new Schema({
  productsInCart: {
    type: Array,
    required: true
  },
  total: {
    type: String,
    required: true
  }
})

module.exports = CHeckout = mongoose.model('checkouts', CheckoutSchema)
