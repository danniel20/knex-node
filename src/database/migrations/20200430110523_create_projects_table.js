const { onUpdateTrigger } = require('../../../knexfile')

exports.up = knex => knex.schema.createTable('projects', table => {
  table.increments('id')
  table.text('title').unique().notNullable()

  // relacionamento
  table.integer('user_id')
       .references('users.id')
       .notNullable()
       .onDelete('CASCADE')

  table.timestamps(true, true) // maneira simlificada createdAT e updatedAt
}).then(() => knex.raw(onUpdateTrigger('projects')))

exports.down = knex => knex.schema.dropTable('projects')
