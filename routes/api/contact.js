const router = require('express')()
const nodemailer = require('nodemailer')
const keys = require('../../config/keys')
const validateContactInput = require('../validation/validateContact')
const Contact = require('../../models/Contact')

// Add customer email question to database
// POSt /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { errors, isValid } = validateContactInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    const { name, email, description } = req.body

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.GMAIL_USER, // generated ethereal user
        pass: keys.GMAIL_PASS // generated ethereal password
      }
    })

    let mailOptionsToSelf = {
      from: email,
      to: keys.GMAIL_USER, // list of receivers
      subject: 'Question/Inquery...', // Subject line
      text: `From: ${name} (${email})

Question: ${description}` // plain text body
      // html: contact_auto_response.html // html body
    }

    let mailOptionsToSender = {
      to: email, // list of receivers
      subject: 'Impact Motivation Manual', // Subject line
      text: 'Thank you for your inquery, someone will be in touch shortly!' // plain text body
      // html: contact_auto_response.html // html body
    }

    let senderInfo = await transporter.sendMail(mailOptionsToSender)
    let selfInfo = await transporter.sendMail(mailOptionsToSelf)

    // console.log('>>>-----> Message sent: %s', senderInfo.messageId)
    // Preview only available when sending through an Ethereal account
    // console.log(
    //   '>>>-----> Preview URL: %s',
    //   nodemailer.getTestMessageUrl(senderInfo)
    // )

    // const emailData = {
    //   name,
    //   email,
    //   description,
    //   date: Date()
    // }

    // Contact.create(emailData)
    res.status(200).json({
      success: true,
      message: 'Email Sent Successfully'
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
