const db = require('./connection')

function sessionIdIsUnique(sessionId) {
  return db('credentials').where('session_id', sessionId)
}

function getUsers() {
  return db('users').select()
}

function getUser(id) {
  return db('users').where('id', id).first()
}

module.exports = {
  sessionIdIsUnique,
  getUser,
  getUsers,
}
