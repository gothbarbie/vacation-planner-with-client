const passport = require('passport')
const { promisify } = require('es6-promisify')
const mongoose = require('mongoose')
const User = mongoose.model('users')

exports.validateRegister = (req, res, next) => {
  // Express Validator
  req.sanitizeBody('firstName', 'lastName')
  req.checkBody('firstName', 'firstName is required').notEmpty()
  req.checkBody('lastName', 'lastName is required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password is required').notEmpty()
  req
    .checkBody('passwordConfirm', 'You need to confirm the password')
    .notEmpty()
  req
    .checkBody('passwordConfirm', "Passwords doesn't match")
    .equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    res.send({
      title: 'Register',
      body: errors
    })
    return // Abort
  }
  next()
}

exports.register = (req, res, next) => {
  User.register(
    {
      email: req.body.email,
      active: false
    },
    req.body.password,
    function(err, user) {
      if (err) {
        return res.send({ error: user })
      }
    }
  )
  next()
}

exports.logout = (req, res) => {
  req.logout()
  req.flash('success', 'You are now logged out.')
  res.redirect('/')
}
