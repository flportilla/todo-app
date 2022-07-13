const express = require('express')
const cors = require('cors')
require('express-async-errors')
const app = express()

const todoRouter = require('./controllers/todo')
const config = require('./utils/config')

const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/todos', todoRouter)

module.exports = app