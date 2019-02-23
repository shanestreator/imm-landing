const router = require('express')()

const validateContactInput = require('../validation/validateContact')

const Contact = require('../../models/Contact')

// Add customer email question to database
// POSt /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { errors, isValid } = validateContactInput(req.body)

    if (!isValid) return res.status(400).json(errors)

    const { name, email, description } = req.body

    const emailData = {
      name,
      email,
      description,
      date: Date()
    }

    console.log('>>>-----> EMAIL_DATA: ', emailData)

    // Contact.create(emailData)
    res.status(200).json({
      message: 'Email Sent Successfully'
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
