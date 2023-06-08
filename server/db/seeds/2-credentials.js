/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('credentials').del()
  await knex('credentials').insert([
    {
      hash_key: 99901,
      username: 'steve420',
      password: 'harvey',
      user_id: 77701,
    },
    {
      hash_key: 99902,
      username: 'drake420',
      password: 'drizzy',
      user_id: 77702,
    },
    {
      hash_key: 99903,
      username: 'jerry420',
      password: 'seinfeld',
      user_id: 77703,
    },
    {
      hash_key: 99904,
      username: 'lemon420',
      password: 'drizzy',
      user_id: 77704,
    },
    {
      hash_key: 99905,
      username: 'mighty420',
      password: 'mouse',
      user_id: 77705,
    },
  ])
}
