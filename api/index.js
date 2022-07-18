require('dotenv').config()
const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})