const express = require('express')
const hbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const public = __dirname + '/public'

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

// Routes
server.use('/', userRoutes)

module.exports = server
