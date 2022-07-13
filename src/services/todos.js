import axios from "axios";

const baseUrl = 'http://localhost:3005/api/todos'

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
  return await axios.put(`${baseUrl}/${id}`, todoObj)
}

export default { getTodos, addTodo, removeTodo, markAsComplete }