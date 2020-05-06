const faker = require('faker')

exports.seed = async (knex) => {

  await knex('projects').del()

  const users = await knex('users')

  const projectsArray = []

  for (let i = 0; i < users.length; i++) {

    for (let j = 0; j <= getRandomIntInclusive(1, 3); j++) {
      projectsArray.push({ user_id: users[i].id, title: `${faker.lorem.word()}-${faker.random.number()}` })
    }
  }

  await knex('projects').insert(projectsArray)
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}