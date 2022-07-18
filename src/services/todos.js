import axios from "axios";

const baseUrl = '/api/todos'

const getTodos = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addTodo = async (todoObj) => {
  const response = await axios.post(baseUrl, todoObj)
  return response.data
}

const removeTodo = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const markAsComplete = async (id, todoObj) => {
  const response = await axios.put(`${baseUrl}/${id}`, todoObj)
  return response
}

export default { getTodos, addTodo, removeTodo, markAsComplete }