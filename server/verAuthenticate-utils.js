const db = require('./db/db')
const crypto = require('node:crypto').webcrypto

const createSessionId = async () => {
  //Rng function called
  const sessionId = getRandom()
  //Db query checks uniqueness and returns if true
  const isUnique = await db.sessionIdIsUnique(sessionId)
  if (isUnique.length === 0) {
    return sessionId
  } else {
    console.log(`session id ${sessionId} is not unique. retrying...`)
    createSessionId()
  }
}
function getRandom() {
  let randomArr = new Uint8Array(5)
  const random = Number(
    crypto.getRandomValues(randomArr).join('').padStart(16, '1')
  )
  return random
}

module.exports = {
  createSessionId,
  getRandom,
}
