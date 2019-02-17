const router = require('express')()
const Product = require('../../models/Product')
const stripe = require('../../config/stripe')

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

// GET api/payment
router.get('/', (req, res, next) => {
  try {
    res.send({
      message: 'Hello Stripe checkout server!',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// POST api/payment
router.post('/', (req, res) => {
  try {
    stripe.charges.create(req.body, postStripeCharge(res))
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
