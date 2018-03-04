const mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.Promise = global.Promise
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'E-mail is required',
    trim: true,
    validate: [validator.isEmail]
  },
  password: String,
  active: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
})

userSchema.virtual('gravatar').get(function() {
  const hash = md5(this.email)
  return `https://gravatar.com/avatar/${hash}?s=200`
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})
userSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('users', userSchema)
