const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateLoginInput(data) {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  // Using the Validator API and isEmpty function to check if data object property is empty

  // If data.email !== correct email format => return error
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  // If data.email === '' => return error
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  // If data.password === '' => return error
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  // Return errors && isValid: true || false
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
