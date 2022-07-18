const todoRouter = require('express').Router()
const Todo = require('../models/todos')

const jwt = require('jsonwebtoken')

const middleware = require('../middleware/middleware')
const userExtractor = middleware.userExtractor
const tokenExtractor = middleware.tokenExtractor

//Handle GET all the todos
todoRouter.get('/', tokenExtractor, userExtractor, async (request, response, next) => {

  try {
    const user = request.user
    const allTodos = await Todo
      .find({ user: user.id })

    return response.json(allTodos)
  } catch (error) {
    console.log(error)
  }


})

//Handle POST new todos
todoRouter.post('/', tokenExtractor, userExtractor, async (request, response) => {

  const { name } = request.body
  const user = request.user

  const todo = new Todo({
    name: name,
    isComplete: false,
    date: new Date(),
    user: user.id
  })

  const savedTodo = await todo.save()

  user.todos = user.todos.concat(savedTodo.id)
  await user.save()

  return response.status(201).json(savedTodo)

})

//Handle GET request by id
todoRouter.get('/:id', tokenExtractor, userExtractor, async (request, response) => {
  const todoId = request.params.id
  const todoById = await Todo.findById(todoId)
  return response.json(todoById)
})

//Handle PUT requests
todoRouter.put('/:id', tokenExtractor, userExtractor, async (request, response) => {
  const updatedTodo = await Todo.findByIdAndUpdate(request.params.id, request.body, { new: true })
  return response.json(updatedTodo)
})

// DELETE a todo by id
todoRouter.delete('/:id', tokenExtractor, userExtractor, async (request, response) => {

  const selectedTodo = await Todo.findById(request.params.id)
  const user = request.user

  await Todo.findByIdAndRemove(request.params.id)

  user.todos = user.todos.filter(todo => todo.toString() !== selectedTodo?.id)
  await user.save()
  return response.status(204).end()
})

module.exports = todoRouter