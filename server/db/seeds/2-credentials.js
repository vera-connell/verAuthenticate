/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('credentials').del()
  await knex('credentials').insert([
    {
      hashkey: 99901,
      username: 'steve420',
      password: 'harvey',
      user_id: 77701,
    },
    {
      hashkey: 99902,
      username: 'drake420',
      password: 'drizzy',
      user_id: 77702,
    },
    {
      hashkey: 99903,
      username: 'jerry420',
      password: 'seinfeld',
      user_id: 77703,
    },
    {
      hashkey: 99904,
      username: 'lemon420',
      password: 'drizzy',
      user_id: 77704,
    },
    {
      hashkey: 99905,
      username: 'mighty420',
      password: 'mouse',
      user_id: 77705,
    },
  ])
}
