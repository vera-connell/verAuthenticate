const db = require('./connection')

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
}

function getUsers() {
  return db('users').select()
}

function getUser(id) {
  return db('users').where('id', id).first()
}
