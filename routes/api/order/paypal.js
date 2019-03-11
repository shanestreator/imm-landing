const router = require('express')()
// const axios = require('axios')

// const Order = require('../../../models/Order')
// const Product = require('../../../models/Product')

// const paypal = require('paypal-rest-sdk')

const checkoutNodeJssdk = require('@paypal/checkout-server-sdk')

const payPalClient = require('./util/payPalClient')

// paypal.configure(PAYPAL_SECRET_KEY)

// Add new order to database
// POST api/order/paypal
router.post('/', async (req, res, next) => {
  try {
    // 2a. Get the order ID from the request body
    const orderID = req.body.orderID

    // 3. Call PayPal to get the transaction details
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID)

    let order = await payPalClient.client().execute(request)

    // 5. Validate the transaction details are as expected
    if (
      parseFloat(order.result.purchase_units[0].amount.value) !== req.body.total
    ) {
      return res.sendStatus(400)
    }

    // 6. Save the transaction in your database
    // await database.saveTransaction(orderID);

    // 7. Return a successful response to the client
    return res.sendStatus(200)
    // Send products in cart in the req.body post request
    // const { productsInCart } = req.body
    // const productsInCartIds = productsInCart.map(p => p._id)
    // const orderedProducts = await Product.find({
    //   _id: { $in: productsInCartIds }
    // })
    // if (productsInCart.length !== orderedProducts.length) {
    //   throw '##!!##!!##!!##!!## ERROR ##!!##!!##!!##!!##'
    // }

    // let cartTotal = 0
    // for (let i = 0; i < orderedProducts.length; i++) {
    //   const quantity = productsInCart[i].quantity
    //   const { price, manualsPerPack } = orderedProducts[i]

    //   cartTotal += quantity * price * manualsPerPack
    // }
    // -------------------------------- PAYPAL --------------------------------
  } catch (error) {
    console.log('ERROR: ', error)
    return res.sendStatus(500)
  }
})

module.exports = router
