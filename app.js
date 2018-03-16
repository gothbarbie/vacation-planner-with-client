const express = require('express')
const expressGraphQL = require('express-graphql')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const cookieSession = require('cookie-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const { promisify } = require('es6-promisify')
const flash = require('connect-flash')

mongoose.Promise = global.Promise

const routes = require('./routes/index')
const errorHandlers = require('./handlers/errorHandlers')
require('./services/passport')
const keys = require('./config/keys')

const app = express()

if (process.env.NODE_ENV === 'production') {
  // Send file if available
  app.use(express.static('client/build'))
  // Otherwise, send index.html
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// cookieSession
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser())

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    secret: keys.sessionSecret,
    key: keys.sessionKey,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Setup Flash messages
app.use(flash())

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req)
  next()
})

// Setup Routes
app.use('/', routes)

// Add GraphQL
app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
  })
)

// 404 & forward ->
app.use(errorHandlers.notFound)

// Check for validation errors ->
app.use(errorHandlers.flashValidationErrors)

// Development error handler
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// Production error handler
app.use(errorHandlers.productionErrors)

module.exports = app
