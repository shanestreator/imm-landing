const router = require('express')()

const Order = require('../../../models/Order')
const Product = require('../../../models/Product')

const stripe = require('../../../config/stripe')

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     // return res.status(500).send({ error: stripeErr })
//     throw stripeErr
//   } else {
//     return res.status(200).send({ success: stripeRes })
//   }
// }

// Add new order to database
// POST api/order/stripe
router.post('/', async (req, res, next) => {
  try {
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

    // Check if customer's billing address in Illinois
    // Add 10% tax if this is true
    if (req.body.billingAndShipping.billing_address_state === 'IL') {
      cartTotal = cartTotal + Math.round(cartTotal / 10)
    }

    // console.log('>>>-----> CART_TOTAL <-----<<<: ', cartTotal)
    // console.log(
    //   '>>>-----> STATE <-----<<<: ',
    //   req.body.billingAndShipping.billing_address_state
    // )
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

    const description = 'Impact Motivation Manual - Champion Productions'
    const fromUSDToCent = amount => amount * 100
    const payment = {
      description,
      source,
      currency,
      amount: fromUSDToCent(cartTotal),
      receipt_email: email
    }

    stripe.charges.create(payment, async (stripeErr, stripeRes) => {
      if (stripeErr) {
        // return res.status(500).send({ error: stripeErr })
        throw stripeErr
      } else {
        const { id: orderId, created: order_created } = stripeRes
        // console.log(
        //   '>>>-----> STRIPE_CHARGE <-----<<<: ',
        //   orderId,
        //   order_created
        // )

        const orderInfo = {
          orderId,
          order_created,
          created_At: stripeRes.created,
          type: 'stripe',
          email,
          billing,
          shipping,
          products: productsInCart
        }
        const order = await Order.create(orderInfo)

        // console.log('>>>-----> STRIPE_ORDER <-----<<<: ', order)
        res.status(200).send({ success: stripeRes })
        return
      }
    })
  } catch (error) {
    await Order.findOneAndDelete({ _id: order._id })
    return res.status(500).send({ error: stripeErr })
  }
})

module.exports = router
