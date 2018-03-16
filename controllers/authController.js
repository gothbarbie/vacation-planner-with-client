const passport = require('passport')
const { promisify } = require('es6-promisify')
const mongoose = require('mongoose')
const User = mongoose.model('users')

exports.validateRegister = (req, res, next) => {
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
