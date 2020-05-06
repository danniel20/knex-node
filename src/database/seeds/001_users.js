const faker = require('faker')

exports.seed = async (knex) => {

  await knex('users').del()

  const usersArray = []
  
  for (let i = 0; i < 5; i++) {
    usersArray.push({ username: faker.name.firstName()})
  }

  await knex('users').insert(usersArray)

}