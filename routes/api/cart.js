// const router = require('express').Router()
// const config = require('../../config/config')
// const stripe = require('stripe')(config.stripe_secret_key)

// // Load User model
// const User = require('../../models/User')

// // @route   GET api/cart/test
// // @desc    Tests cart route
// // @access  Public
// router.get('/test', (req, res) => {
//   try {
//     // console.log('BACK_END_CART_TEST_ROUTE')
//     res.json({ msg: 'Cart Works' })
//   } catch (error) {
//     next(error)
//   }
// })

// // @route   POST api/cart
// // @desc    Tests cart route
// // @access  Public
// router.post('/', (req, res, next) => {
//   try {
//     // console.log('BACK_END_CART_POST')
//     const item = req.body
//     console.log('ITEM<<<<<<: ', item)
//     res.status(200).json(item)
//   } catch (error) {
//     next(error)
//   }
// })

// // @route   POST api/cart/stripe/account/get
// // @desc    Returns the fields needed
// // @access  Public
// router.post('/stripe/account/get', (req, res, next) => {
//   try {
//     const strpeAccountId = null

//     if (!strpeAccountId) {
//       res.send({
//         success: true,
//         message: 'Missing stripe account.',
//         setupBegan: false
//       })
//     } else {
//       res.send({
//         success: true,
//         message: 'Stripe account.',
//         setupBegan: true
//       })
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// // @route   POST api/cart/stripe/account/setup
// // @desc    Begin Stripe Connect Setup
// // @access  Public
// router.post('/stripe/account/setup', (req, res, next) => {
//   try {
//     const country = req.body.country
//     const email = 'shanestreator@gmail.com'

//     if (country !== 'CA' || country !== 'US') {
//       res.send({
//         success: false,
//         message: 'Error: Invalid Country'
//       })
//     }

//     stripe.accounts.create(
//       {
//         type: 'custom',
//         country,
//         email
//       },
//       function(err, account) {
//         // asynchronously called
//       }
//     )
//   } catch (error) {
//     next(error)
//   }
// })

// module.exports = router
