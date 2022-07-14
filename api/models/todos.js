const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isComplete: Boolean,
  date: Date
})

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const { _id, __v, ...rest } = returnedObject
    return { id: _id.toString(), ...rest }
  }
})

module.exports = mongoose.model('Todo', todoSchema)