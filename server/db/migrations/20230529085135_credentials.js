const { toBeEnabled } = require('@testing-library/jest-dom/matchers')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('credentials', (table) => {
    table.increments('hashKey').primary
    table.string('userName')
    table.string('password')
    table.integer('sessionId')
    table.integer('userId')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('credentials')
}
