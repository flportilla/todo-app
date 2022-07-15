import axios from "axios";
const baseUrl = 'http://localhost:3005/api/todos'

let token = null

const setToken = newToken => token = `bearer ${newToken}`

const getTodos = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const addTodo = async (todoObj) => {

  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, todoObj, config)
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

export default { getTodos, addTodo, removeTodo, markAsComplete, setToken }