const router = require('express')()

const Product = require('../../models/Product')

// Get one product from database
// GET /api/one/:prodId
router.get('/one/:prodId', async (req, res, next) => {
  try {
    const prodId = req.params.prodId

    const product = await Product.findOne({ _id: prodId })
    console.log('ONE_PRODUCT: ', product)

    res.status(200).json(product)
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// Get all products from database
// GET /api/product/all
router.get('/all', async (req, res, next) => {
  try {
    const allProducts = await Product.find({})

    res.status(200).json(allProducts)
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// Creating a new product (pack)
// POST /api/product
router.post('/', async (req, res, next) => {
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
})

// Creating a new product (pack)
// PUT /api/product
router.put('/', async (req, res, next) => {
  try {
    const { id, imageUrl, title, manualsPerPack, price } = req.body

    const newProductInfo = {
      imageUrl,
      title,
      manualsPerPack,
      price
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, newProductInfo, {
      new: true
    })

    res.status(200).json(updatedProduct)
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// Delete one product from database
// DELETE /api/:prodId
router.delete('/:prodId', async (req, res, next) => {
  try {
    const prodId = req.params.prodId
    console.log('DELETED_PRODUCT: ', prodId)

    const product = await Product.findByIdAndRemove(prodId)

    res.status(202).json({
      message: 'Successfully deleted'
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
