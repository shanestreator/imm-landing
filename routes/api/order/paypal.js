const router = require('express')()
const axios = require('axios')

const Order = require('../../../models/Order')
const Product = require('../../../models/Product')

const braintree = require('braintree')

// const PAYPAL_SECRET_KEY = require('../../../config/paypal')
// console.log('PAYPAL_SECRET: ', PAYPAL_SECRET_KEY)
// paypal.configure(PAYPAL_SECRET_KEY)

// Add new order to database
// POST api/order/paypal
router.post('/', async (req, res, next) => {
  try {
    // Send products in cart in the req.body post request
    const { productsInCart } = req.body
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
    // -------------------------------- BRAINTREE --------------------------------
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
