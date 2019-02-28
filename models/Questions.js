const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const QuestionSchema = new Schema({
  fulfilled: {
    type: Boolean,
    required: true,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_At: {
    type: Date,
    required: true
  }
})

module.exports = Question = mongoose.model('questions', QuestionSchema)
