const express = require('express')
const hbs = require('express-handlebars')
var cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const public = __dirname + '/public'
const authFuncs = require('../verAuthenticate-utils')

//remember to install fileupload when required.

const userRoutes = require('./routes/users')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())
server.use(express.static(public))
server.use(
  cookieSession({
    name: 'session',
    keys: [1111131245927133],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

// Routes
server.use('/', userRoutes)

module.exports = server
