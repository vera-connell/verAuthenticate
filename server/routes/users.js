const express = require('express')

const db = require('../db/db')

const router = express.Router()
const authFuncs = require('../verAuthenticate-utils')

//users/login/
//takes a username and password from form inputs
//issues a session cookie
//queries the db and puts in the session id.
//redirects to users/hashedkey.

//users/id: route
//called by a redirect from login
//passed in a hash of hashkey and session id from db
//takes a cookie in request and reverses hash in function body
//uses the result to query the database and render a profile.

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then((users) => {
//       res.render('index', { users: users })
//     })
//     .catch((err) => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/', (req, res) => {
  authFuncs.createSessionId()
  res.render('home')
})

module.exports = router
