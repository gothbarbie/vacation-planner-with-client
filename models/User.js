const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const md5 = require('md5')
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
  resetPasswordToken: String,
  resetPasswordExpires: Date
})

userSchema.virtual('gravatar').get(function() {
  const hash = md5(this.email)
  return `https://gravatar.com/avatar/${hash}?s=200`
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.plugin(mongodbErrorHandler)

mongoose.model('users', userSchema)
