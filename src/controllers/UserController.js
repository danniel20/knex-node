const knex = require('../database')

module.exports = {

  async index(req, res){
    const result = await knex('users')
      .where('deleted_at', null)

    res.json(result)
  },

  async create(req, res, next){
    try {
      const { username } = req.body
      
      await knex('users').insert({
        username
      })

      res.sendStatus(201)

    } catch (error) {
      next(error)
    }
  },

  async update(req, res, next){
    try {
      const { username } = req.body
      const { id } = req.params

      await knex('users')
        .update({ username })
        .where({ id })

      res.sendStatus(200)

    } catch (error) {
      next(error)
    }
  },

  async delete(req, res, next){
    try {
      const { id } = req.params

      await knex('users')
        .where({ id })
        .update('deleted_at', new Date())
        //.del()

      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  }
}