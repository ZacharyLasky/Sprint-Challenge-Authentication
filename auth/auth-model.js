const db = require('../database/dbConfig')

module.exports = {
  find,
  findBy,
  add
}

function find() {
  return db('users').select('id', 'username')
}

function findBy(username) {
  return db('users').where(username)
}

function add(user) {
  return db('users')
    .insert(user)
}