const todoRouter = require('express').Router()
const Todo = require('../models/todos')

//Handle GET all the todos
todoRouter.get('/', async (request, response, next) => {
  const allToDos = await Todo.find({})
  console.log(allToDos)
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

// DELETE a blog by id
todoRouter.delete('/:id', async (request, response) => {
  const deletedTodo = await Todo.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = todoRouter