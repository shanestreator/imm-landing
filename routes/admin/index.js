const router = require('express')()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

// const { requireAdmin } = require('../utils/requireAdmin')

const Admin = require('../../models/Admin')

// Register Admin User
// POST /admin/register
// router.post('/register', async (req, res, next) => {
//   try {
//     console.log('REGISTER_REQ_BODY: ', req.body)
//     const { name, email, password } = req.body

//     const emailInUse = await Admin.findOne({ email })

//     if (emailInUse) {
//       return res.send({
//         message: 'That email is already in use'
//       })
//     }

//     // New Admin User
//     const newAdmin = {
//       name,
//       email,
//       password
//     }

//     // Incrypt the User's password
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(password, salt, (err, hash) => {
//         newAdmin.password = hash

//         Admin.create(newAdmin)

//         res.send({
//           message: 'Success',
//           route: '/admin/register'
//         })
//       })
//     })
//   } catch (error) {
//     next(error)
//   }
// })

// Login Admin User
// POST /admin/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await Admin.findOne({ email })

    if (!user) {
      return res.send({
        message: 'Invalid email'
      })
    }

    bcrypt.compare(password, user.password, (err, resolve) => {
      if (resolve) {
        const payload = { id: user._id, name: user.name, email }

        const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: '7d' })
        console.log('TOKEN: ', token)

        res.header('Authorization', token)
        return res.status(200).json(payload)
      } else {
        console.log('ERROR: ', err)
        res.send({
          message: 'Incorrect Password'
        })
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/user/:userId', async (req, res, next) => {
  try {
    console.log('REQ.PARAMS: ', req.params)
    const id = req.params.userId
    const { _id, name, email } = await Admin.findById(id)

    const adminUserInfo = {
      id: _id,
      name,
      email
    }
    res.send(adminUserInfo)
  } catch (error) {
    next(error)
  }
})

module.exports = router
