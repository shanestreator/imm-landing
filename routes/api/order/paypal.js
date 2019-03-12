const router = require('express')()
// const axios = require('axios')

const Order = require('../../../models/Order')
const Product = require('../../../models/Product')
const ShipTo = require('../../../models/ShipTo')

// const paypal = require('paypal-rest-sdk')

const checkoutNodeJssdk = require('@paypal/checkout-server-sdk')

const payPalClient = require('./util/payPalClient')

// paypal.configure(PAYPAL_SECRET_KEY)

// Add new order to database
// POST api/order/paypal
router.post('/', async (req, res, next) => {
  try {
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
    // -------------------------------- PAYPAL --------------------------------

    // 2a. Get the order ID from the request body
    const orderID = req.body.orderID
    // console.log('>>>-----> ORDER_ID: ', orderID)
    console.log('>>>-----> REQ.BODY: ', req.body)

    // 3. Call PayPal to get the transaction details
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID)
    let paypalOrder = await payPalClient.client().execute(request)

    console.log('>>>-----> RESULT: ', paypalOrder.result)
    // console.log('>>>-----> SHIPPING_ID: ', req.body.shippingId)
    // console.log('>>>-----> PURCHASE_UNITS: ', paypalOrder.result.purchase_units[0])
    // 5. Validate the transaction details are as expected
    if (
      parseFloat(paypalOrder.result.purchase_units[0].amount.value) !==
      req.body.total
    ) {
      return res.sendStatus(400)
    }

    const shipTo = await ShipTo.findOne({ _id: req.body.shippingId })

    console.log('>>>-----> SHIP_TO: ', shipTo)
    if (!shipTo) throw '##!!##!!##!!##!!## ERROR ##!!##!!##!!##!!##'

    // 6. Save the transaction in your database
    const orderInfo = {
      type: 'paypal',
      orderId: paypalOrder.result.id,
      created_At: paypalOrder.result.create_time,
      email: paypalOrder.result.payer.email_address,
      shipping: shipTo,
      products: productsInCart
    }
    const order = await Order.create(orderInfo)

    console.log('>>>----->ORDER: ', order)

    const deleteShipTo = await ShipTo.findOneAndDelete({
      _id: req.body.shippingId
    })

    // 7. Return a successful response to the client
    return res.sendStatus(200)
    // Send products in cart in the req.body post request
  } catch (error) {
    console.log('ERROR: ', error)
    return res.sendStatus(500)
  }
})

module.exports = router
