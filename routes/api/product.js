const router = require('express')()
// const passport = require('passport')

const Product = require('../../models/Product')

// Creating a new product (pack)
// POST /api/product/
router.post('/', async (req, res, next) => {
  try {
    const { name, amount, price } = req.body

    const productExists = await Product.findOne({ name: name })

    if (productExists) {
      res.send({
        message: 'That item already exists'
      })
    } else {
      const newPack = {
        name,
        amount,
        price
      }
      console.log('NEW_PACK: ', newPack)

      Pack.create(newPack)

      res.status(200).send({
        message: 'Success'
      })
    }
  } catch (error) {
    console.log('ERROR: ', error)
  }
})

module.exports = router
