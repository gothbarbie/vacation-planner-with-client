const passport = require('passport')
const { promisify } = require('es6-promisify')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const validator = require('is-my-json-valid')

const schemas = require('../schemas/schemas')

exports.validateRegister = (req, res, next) => {

  const validate = validator(schemas.registerUser, { verbose: true })

  validate({ 
    email: req.body.email, 
    password: req.body.password,
  })

  if (validate.errors) {
    res.send({
      title: 'Register',
      body: validate.errors,
    })
    return // Abort
  }
  next()
}

exports.register = (req, res, next) => {
  User.register(
    {
      email: req.body.email,
      active: false,
    },
    req.body.password,
    function(err, user) {
      if (err) {
        return res.status(401).send({ error: user })
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

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: 'authentication failed' })
    }

    req.login(user, loginErr => {
      if (loginErr) return next(loginErr)

      return res.redirect('/schedule')
    })
  })(req, res, next)
}
