const router = require('express')()

const Order = require('../../models/Order')

const { validateProducts } = require('../validation/validateOrder')

// Add new order to database
// POST api/order/stripe
router.post('/stripe', async (req, res, next) => {
  try {
    // console.log('ORDER.REQ.BODY: ', req.body)
    const { email, productsInCart } = req.body

    const allProducts = await Product.find({})

    if (!validateProducts(productsInCart, allProducts)) {
      console.log('!!!!! --- SOMETHING WENT WRONG --- !!!!!')
      return res.status(400).json({ message: 'Something went wrong' })
    }

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
    // console.log('>>>>>ORDER_INFO<<<<<: ', orderInfo)

    const order = await Order.create(orderInfo)

    res.status(200).json({
      message: 'Success'
    })
  } catch (error) {
    next(error)
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
