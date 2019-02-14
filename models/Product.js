const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProductSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  manualsPerPack: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

module.exports = Product = mongoose.model('products', ProductSchema)
