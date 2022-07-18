import axios from "axios";
const baseUrl = 'http://localhost:3005/api/users'

const createuser = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { createuser }