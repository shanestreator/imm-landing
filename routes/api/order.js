const router = require('express')()

const Order = require('../../models/Order')
const Product = require('../../models/Product')

const { validateProducts } = require('../validation/validateOrder')

const stripe = require('../../config/stripe')

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    // return res.status(500).send({ error: stripeErr })
    throw stripeErr
  } else {
    console.log('SUCCESS: ', stripeRes)
    return res.status(200).send({ success: stripeRes })
  }
}

// Add new order to database
// POST api/order/stripe
router.post('/stripe', async (req, res, next) => {
  let order = {}
  try {
    // console.log('ORDER.REQ.BODY: ', req.body)
    const { email, productsInCart, source, currency } = req.body

    const productsInCartIds = productsInCart.map(p => p._id)
    const orderedProducts = await Product.find({
      _id: { $in: productsInCartIds }
    })
    if (productsInCart.length !== orderedProducts.length) {
      throw '##!!##!!##!!##!!## ERROR ##!!##!!##!!##!!##'
    }

    let cartTotal = 0
    for (let i = 0; i < orderedProducts.length; i++) {
      const quantity = productsInCart[i].quantity
      const { price, manualsPerPack } = orderedProducts[i]

      cartTotal += quantity * price * manualsPerPack
    }

    console.log('>>>-----> CART_TOTAL <-----<<<: ', cartTotal)
    const billing = {
      name: req.body.billingAndShipping.billing_name,
      country: req.body.billingAndShipping.billing_address_country,
      country_code: req.body.billingAndShipping.billing_address_country_code,
      zip: req.body.billingAndShipping.billing_address_zip,
      street_address: req.body.billingAndShipping.billing_address_line1,
      city: req.body.billingAndShipping.billing_address_city,
      state: req.body.billingAndShipping.billing_address_state
    }

    const shipping = {
      name: req.body.billingAndShipping.shipping_name,
      country: req.body.billingAndShipping.shipping_address_country,
      country_code: req.body.billingAndShipping.shipping_address_country_code,
      zip: req.body.billingAndShipping.shipping_address_zip,
      street_address: req.body.billingAndShipping.shipping_address_line1,
      city: req.body.billingAndShipping.shipping_address_city,
      state: req.body.billingAndShipping.shipping_address_state
    }

    const orderInfo = {
      type: 'stripe',
      email,
      billing,
      shipping,
      products: productsInCart,
      created_At: Date()
    }
    console.log('>>>>>-----> ORDER_INFO <-----<<<<<: ', orderInfo)
    order = await Order.create(orderInfo)

    const description = 'Impact Motivation Manual - Champion Productions LLC'
    const fromUSDToCent = amount => amount * 100
    const payment = {
      description,
      source,
      currency,
      amount: fromUSDToCent(cartTotal)
    }

    stripe.charges.create(payment, postStripeCharge(res))
  } catch (error) {
    await Order.findOneAndDelete({ _id: order._id })
    return res.status(500).send({ error: stripeErr })
  }
})

// Add new order to database
// POST api/order/paypal
router.post('/paypal', (req, res, next) => {
  try {
    console.log('ORDER.REQ.BODY: ', req.body)
    const { email } = req.body

    const orderInfo = {
      type: 'paypal',
      email,
      billing,
      shipping,
      created_At: Date()
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
