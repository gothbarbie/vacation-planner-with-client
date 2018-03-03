const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/')
  }
)

router.post(
  '/auth/email',
  authController.validateRegister,
  authController.register,
  authController.login
)

router.get('/api/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/api/current_user', (req, res) => {
  res.send(req.user)
})

module.exports = router
