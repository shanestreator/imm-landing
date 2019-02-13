const requireAdmin = schema => {
  return (req, res, next) => {
    const email = req.body.email
    schema.findOne({ email: email }, (err, user) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        // Do something - the user does not exist
      }
      if (!user.admin) {
        // Do something - the user exists but is no admin user
      }
      // Hand over control to passport
      next()
    })
  }
}

module.exports = { requireAdmin }
