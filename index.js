const mongoose = require('mongoose')

const keys = require('./config/keys')

try {
  mongoose.connect(keys.mongoURI, {
    user: keys.mongoUsername,
    pass: keys.mongoPassword
  })
  mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
} catch (error) {
  console.error(error)
}

// Register Modules
require('./models/User')

// Start App
const app = require('./app')

const PORT = process.env.PORT || 5000

app.listen(PORT)
