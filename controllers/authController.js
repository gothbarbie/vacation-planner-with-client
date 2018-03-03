const passport = require('passport')
const promisify = require('es6-promisify')
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
    .checkBody('password-confirm', 'You need to confirm the password')
    .notEmpty()
  req
    .checkBody('password-confirm', "Passwords doesn't match")
    .equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    res.send({
      title: 'Register',
      body: req.body
    })
    return // Abort
  }
  next()
}

exports.register = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  const registerWithPromise = promisify(User.register, User)
  await registerWithPromise(user, req.body.password)
  next()
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/schedule'
})

exports.logout = (req, res) => {
  req.logout()
  req.flash('success', 'You are now logged out.')
  res.redirect('/')
}
