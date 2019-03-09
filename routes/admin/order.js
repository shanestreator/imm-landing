const router = require('express')()
const passport = require('passport')

const Order = require('../../models/Order')

// Get all orders from database
// GET /admin/orders
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const allOrders = await Order.find({})

      res.status(200).json(allOrders)
    } catch (error) {
      console.log('ERROR: ', error)
      next(error)
    }
  }
)

module.exports = router
