const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('users')

exports.signup = async ({ email, firstName, lastName, password, req }) => {
  const user = await User.register({
    email: email,
    firstName: firstName,
    lastName: lastName,
    active: false,
  }, password)
  
  if (user) {
    return new Promise((resolve, reject) => {
      req.logIn((user, err) => {
        if (err) { reject(err )}
        resolve(user)
      })
    })
  }
  
  throw new Error('User could not be added', {
    email,
    firstName,
    lastName,
    password,
  })
}

exports.login = ({ email, password, req }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Invalid credentials.') }

      req.login(user, () => resolve(user))
    })({ body: { email, password }})
  })
}
