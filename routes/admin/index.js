const router = require('express')()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')

const validateLoginInput = require('../validation/login')

const Admin = require('../../models/Admin')

// @route   POST admin/register
// @desc    Sign up a new admin user (uncomment and use postman)
// @access  Public
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

// @route   POST admin/login
// @desc    Login in as admin
// @access  Public
router.post('/login', async (req, res, next) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body)

    // Check validation
    if (!isValid) return res.status(400).json(errors)

    const { email, password } = req.body

    const user = await Admin.findOne({ email })

    if (!user) {
      errors.email = 'Invalid Email'
      return res.status(404).json(errors)
    }

    bcrypt.compare(password, user.password, (err, resolve) => {
      if (resolve) {
        const payload = { id: user.id, name: user.name, email }

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: '7d' },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            })
          }
        )
      } else {
        errors.password = 'Incorrect Password'
        return res.status(400).json(errors)
      }
    })
  } catch (error) {
    next(error)
  }
})

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {}
    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user'
          res.status(404).json(errors)
        }
        res.json(profile)
      })
      .catch(err => res.status(404).json(err))
  }
)

module.exports = router
