/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('credentials').del()
  await knex('credentials').insert([
    {
      hashkey: 99901,
      userName: 'steve420',
      password: 'harvey',
      userId: 77701,
    },
    {
      hashkey: 99902,
      userName: 'drake420',
      password: 'drizzy',
      userId: 77702,
    },
    {
      hashkey: 99903,
      userName: 'jerry420',
      password: 'seinfeld',
      userId: 77703,
    },
    {
      hashkey: 99904,
      userName: 'lemon420',
      password: 'drizzy',
      userId: 77704,
    },
    {
      hashkey: 99905,
      userName: 'mighty420',
      password: 'mouse',
      userId: 77705,
    },
  ])
}
