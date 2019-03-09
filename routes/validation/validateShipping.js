const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateShippingInput(data) {
  let errors = {}

  data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
  data.shippingAddress = !isEmpty(data.shippingAddress)
    ? data.shippingAddress
    : ''
  data.shippingCountry = !isEmpty(data.shippingCountry)
    ? data.shippingCountry
    : ''
  data.shippingState = !isEmpty(data.shippingState) ? data.shippingState : ''
  data.shippingZip = !isEmpty(data.shippingZip) ? data.shippingZip : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.emailConfirm = !isEmpty(data.emailConfirm) ? data.emailConfirm : ''

  // First Name
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name required'
  } else if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'Must be between 2 and 30 characters'
  }

  // Last Name
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name required'
  } else if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Must be between 2 and 30 characters'
  }

  // Shipping Address
  if (Validator.isEmpty(data.shippingAddress)) {
    errors.shippingAddress = 'Address required'
  } else if (!Validator.isLength(data.shippingAddress, { min: 5, max: 100 })) {
    errors.shippingAddress = 'Must be between 5 and 100 characters'
  }

  // Shipping Country
  if (Validator.isEmpty(data.shippingCountry)) {
    errors.shippingCountry = 'Country required'
  }

  // Shipping State
  if (Validator.isEmpty(data.shippingState)) {
    errors.shippingState = 'State required'
  } else if (Validator.isPostalCode(data.shippingState, 'any')) {
    errors.shippingState = 'Invalid State'
  }

  // Shipping Zip
  if (Validator.isEmpty(data.shippingZip)) {
    errors.shippingZip = 'Zip code required'
  } else if (!Validator.isNumeric(data.shippingZip)) {
    errors.shippingZip = 'Invalid character'
  } else if (!Validator.isLength(data.shippingZip, { min: 5, max: 10 })) {
    errors.shippingZip = 'Must be between 5 and 10 characters'
  }

  // Phone
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone required'
  } else if (!Validator.isInt(data.phone)) {
    errors.phone = 'Invalid characters'
  } else if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = 'Must be 10 characters'
  }

  // Email
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email required'
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Format'
  }

  // Email Confirm
  if (Validator.isEmpty(data.emailConfirm)) {
    errors.emailConfirm = 'Email required'
  } else if (data.email !== data.emailConfirm) {
    errors.emailConfirm = 'Email does not match'
  }

  // Return errors && isValid: true || false
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
