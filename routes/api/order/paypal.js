const router = require('express')()

const Order = require('../../../models/Order')
const Product = require('../../../models/Product')

const paypal = require('paypal-rest-sdk')

const PAYPAL_SECRET_KEY = require('../../../config/paypal')
// console.log('PAYPAL_SECRET: ', PAYPAL_SECRET_KEY)
paypal.configure(PAYPAL_SECRET_KEY)

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

    console.log('>>>-----> CART_TOTAL: ', cartTotal)

    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'http://localhost:5000/cart/success',
        cancel_url: 'http://localhost:5000/cart/cancel'
      },
      transactions: [
        {
          item_list: {
            items: productsInCart //Array of objects
          },
          amount: {
            currency: 'USD',
            total: cartTotal // productsInCart total (all items combined total)
          },
          description: 'Impact Motivation Manual - Champion Productions LLC'
        }
      ]
    }
    

    paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
        console.log('>>>-----> Create Payment Response: ')
        console.log(payment)
        console.log('>>>-----> ERROR: ', error)
        throw error
      } else {
        res.send('test')
        // res.status(200).json({
        //   message: 'Create Payment Response: ',
        //   payment
        // })
      }
    })

    const execute_payment_json = {
      payer_id: 'Appended to redirect url',
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: '1.00'
          }
        }
      ]
    }

    // console.log('>>>-----> PAYPAL: ', paypal)

    // const paymentId = 'PAYMENT id created in previous step'

    // paypal.payment.execute(paymentId, execute_payment_json, function(
    //   error,
    //   payment
    // ) {
    //   if (error) {
    //     console.log(error.response)
    //     throw error
    //   } else {
    //     console.log('Get Payment Response')
    //     console.log(JSON.stringify(payment))
    //   }
    // })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
