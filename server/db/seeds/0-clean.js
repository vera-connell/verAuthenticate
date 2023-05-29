exports.seed = (knex) => {
  const empty = (table) => knex(table).delete()

  return empty('credentials').then(() => empty('users'))
}
