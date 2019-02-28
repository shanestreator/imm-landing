const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_x7HEwxJuOgzhfMzTf6AdGrY7'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe

// mark: sk_test_x7HEwxJuOgzhfMzTf6AdGrY7
// shane: sk_test_TpXQqnBTEhPymy6ofQ3I3cMo
