const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../controllers/authController')
const vacationController = require('../controllers/vacationController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
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
  '/auth/register/email',
  authController.register,
  authController.login
)

router.post('/auth/login', authController.login)

router.get('/api/logout', authController.logout)

router.get('/api/current_user', (req, res) => {
  res.send(req.user)
})

router.post('/api/vacation/create', 
  vacationController.validate,
  vacationController.create)

module.exports = router
