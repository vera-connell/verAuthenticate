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
  res.render('home')
})

//Displays public profiles

router.get('/index', async (req, res) => {
  // Calls keygen
  // const id = await authFuncs.createSessionId()
  const users = await db.getUsers()
  res.render('index', { users })
})

//Displays login form

router.get('/users/login', (req, res) => {
  res.render('login')
})

//Posts login form

router.post('/users/login', async (req, res) => {
  //Takes form data and checks login details
  // const userCreds = await db.getUserAuth(username, password)
  const { username, password } = req.body

  const userCreds = await db.getUserAuth(username, password)

  const { userId } = userCreds

  const sessionId = await authFuncs.createSessionId()

  console.log(sessionId)

  const inserted = await db.postSessionId(userId, sessionId)

  console.log(inserted)
  // let userCreds
  // try {
  //   userCreds = await db.getUserAuth(username, password)
  //   console.log(userCreds)
  //   return userCreds
  // } catch (err) {
  //   console.log(err, 'db error')
  // }
  // const { hashKey, userId } = userCreds
  // const sessionId = authFuncs.createSessionId()
  // try {
  //   console.log(sessionId)
  //   const insertSessionId = await db.postSessionId(hashKey, userId)
  //   console.log(insertSessionId)
  // } catch (err) {
  //   console.log(err, 'db error')
  // }

  res.render('home')

  //If valid, calls the keygen and mints a session id
  //sends it to the database and creates a cookie
  //hashes user hashkey and session id from backend data
  //redirects to route /profiles/id:, which takes the hashed id
})

module.exports = router
