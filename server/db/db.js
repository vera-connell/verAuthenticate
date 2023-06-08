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

function getUserAuth(username, password) {
  return db('credentials')
    .where({ username })
    .where({ password })
    .select('hash_key', 'user_id')
}

function postSessionId(userId, sessionId) {
  return db('credentials')
    .where('user_id', userId)
    .update('session_id', sessionId, ['*'])
}

module.exports = {
  sessionIdIsUnique,
  getUser,
  getUsers,
  getUserAuth,
  postSessionId,
}
