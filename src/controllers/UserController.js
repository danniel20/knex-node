const knex = require('../database')

module.exports = {
  async index(req, res){
    const result = await knex('users')
    res.json(result)
  }
}