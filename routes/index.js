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
    res.redirect('/schedule')
  }
)

router.post(
  '/auth/email',
  authController.register,
  passport.authenticate('local'), (req, res) => {
    res.redirect('/schedule')
  }
)

router.post('/auth/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user)
})

router.get('/api/logout', authController.logout)

router.get('/api/current_user', (req, res) => {
  res.send(req.user)
})

module.exports = router
