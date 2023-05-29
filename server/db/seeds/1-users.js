exports.seed = function (knex) {
  return knex('users').insert([
    { id: 77701, name: 'Steve Harvey', image: '/images/steveharvey.jpeg' },
    { id: 77702, name: 'Drake', image: '/images/drake.jpeg' },
    {
      id: 77703,
      name: 'Jerry Seinfeld',
      image: '/images/jerry-two-shoes.jpeg',
    },
    { id: 77704, name: 'Lemon Drizzy', image: '/images/lemon-drizzle.jpeg' },
    { id: 77705, name: 'Mighty Mouse', image: '/images/mighty-mouse.jpeg' },
  ])
}
