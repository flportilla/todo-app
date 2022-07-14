const todoRouter = require('express').Router()
const Todo = require('../models/todos')
const TOKEN = require('../utils/config')

//Handle GET all the todos
todoRouter.get('/', async (request, response, next) => {
  const allToDos = await Todo.find({})
  response.json(allToDos)
})

//Handle POST new todos
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

//Handle GET request by id
todoRouter.get('/:id', async (request, response) => {
  const todoId = request.params.id
  const todoById = await Todo.findById(todoId)
  response.json(todoById)
})

//Handle PUT requests
todoRouter.put('/:id', async (request, response) => {
  const updatedTodo = await Todo.findByIdAndUpdate(request.params.id, request.body, { new: true })
  response.json(updatedTodo)
})

// DELETE a blog by id
todoRouter.delete('/:id', async (request, response) => {
  const deletedTodo = await Todo.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = todoRouter