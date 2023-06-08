const { toBeEnabled } = require('@testing-library/jest-dom/matchers')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('credentials', (table) => {
    table.increments('hash_key').primary
    table.string('username')
    table.string('password')
    table.integer('session_id')
    table.integer('user_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('credentials')
}
