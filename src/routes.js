const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')

const TaskController = require('./controllers/TaskController')

routes
  // Users
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)

  // Projects
  .get('/projects', ProjectController.index)
  .post('/projects', ProjectController.create)

  // Task
  .get('/init-scripts', TaskController.populateDB)

module.exports = routes