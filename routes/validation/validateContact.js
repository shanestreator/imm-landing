const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateContactInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.description = !isEmpty(data.description) ? data.description : ''

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters'
  }
  // Using the Validator API and isEmpty function to check if data object property is empty
  // If data.name === '' => return error
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }
  // If data.email === '' => return error
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }
  // If data.email !== correct email format => return error
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }
  // If data.description === '' => return error
  if (Validator.isEmpty(data.description)) {
    errors.description = 'This field is required'
  }
  // If data.description.length < 10 || data.description.length > 500 => return error
  if (
    !Validator.isLength(data.description, { min: 10, max: 500 }) &&
    !errors.description
  ) {
    errors.description = 'This field must have between 10 and 500 characters'
  }

  // Return errors && isValid: true || false
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
