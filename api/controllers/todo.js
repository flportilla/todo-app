const todoRouter = require('express').Router()
const Todo = require('../models/todos')

todoRouter.get('/', async (request, response, next) => {
  const allToDos = await Todo.find({})
  console.log(allToDos)
  response.json(allToDos)
})

todoRouter.post('/', async (request, response, next) => {

  const { name } = request.body

  const todo = new Todo({
    name: name,
    isComplete: false,
    date: new Date(),
  })
  const savedTodo = await todo.save()
  response.status(201).json(savedTodo)
})

module.exports = todoRouter