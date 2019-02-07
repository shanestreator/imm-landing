const router = require('express').Router()

// Load User model
const User = require('../../models/User')

// @route   GET api/cart/test
// @desc    Tests cart route
// @access  Public
router.get('/test', (req, res) => {
  try {
    console.log('BACK_END_CART_TEST_ROUTE')
    res.json({ msg: 'Cart Works' })
  } catch (error) {
    next(error)
  }
})

// @route   POST api/cart
// @desc    Tests cart route
// @access  Public
router.post('/', (req, res, next) => {
  try {
    console.log('BACK_END_CART_POST')
    const item = req.body
    console.log('ITEM<<<<<<: ', item)
    res.status(200).json(item)
  } catch (error) {
    next(error)
  }
})

module.exports = router
