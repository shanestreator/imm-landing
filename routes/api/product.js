const router = require('express')()
const passport = require('passport')

const Product = require('../../models/Product')

// Get all products from database
// GET /api/products/all
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.find({})

    res.status(200).json(allProducts)
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// Get one product from database
// GET /api/products/one/:prodId
router.get(
  '/:prodId',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const prodId = req.params.prodId

      const product = await Product.findOne({ _id: prodId })

      res.status(200).json(product)
    } catch (error) {
      console.log('ERROR: ', error)
      next(error)
    }
  }
)

// Creating a new product (pack)
// POST /api/products
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { imageUrl, title, manualsPerPack, price } = req.body

      const productExists = await Product.findOne({ title: title })

      if (productExists) {
        res.send({
          message: 'That item already exists'
        })
      } else {
        const newPack = {
          imageUrl,
          title,
          manualsPerPack,
          price
        }

        const result = await Product.create(newPack)

        res.status(200).json(result)
      }
    } catch (error) {
      console.log('ERROR: ', error)
      next(error)
    }
  }
)

// Creating a new product (pack)
// PUT /api/products
router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { id, imageUrl, title, manualsPerPack, price } = req.body

      const newProductInfo = {
        imageUrl,
        title,
        manualsPerPack,
        price
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        newProductInfo,
        {
          new: true
        }
      )

      res.status(200).json(updatedProduct)
    } catch (error) {
      console.log('ERROR: ', error)
      next(error)
    }
  }
)

// Delete one product from database
// DELETE /api/:prodId
router.delete(
  '/:prodId',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const prodId = req.params.prodId

      const product = await Product.findByIdAndRemove(prodId)

      res.status(202).json({
        message: 'Successfully deleted'
      })
    } catch (error) {
      console.log('ERROR: ', error)
      next(error)
    }
  }
)

module.exports = router
