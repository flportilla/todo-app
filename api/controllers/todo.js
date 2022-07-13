const todoRouter = require('express').Router()
const Todo = require('../models/todos')

todoRouter.get('/', async (request, response, next) => {
  const allToDos = await Todo.find({})
  console.log(allToDos)
  response.json(allToDos)
})

module.exports = todoRouter