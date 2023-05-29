const dbFuncs = require('./db/db')

const createSessionId = async () => {
  //write a rng func.
  const isUnique = await dbFuncs.sessionIdisUnique(sessionId)
  if (isUnique.length == 0) {
    return sessionId
  } else {
    console.log(`session id ${sessionId} is not unique. retrying...`)
  }
}

module.exports = {
  createSessionId,
}
