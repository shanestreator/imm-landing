// Determine which enviornment we need to run in
if (process.env.NODE_ENV === 'production') {
  // Production
  module.exports = require('./keys_prod')
} else {
  // Development
  module.exports = require('./keys_dev')
}
