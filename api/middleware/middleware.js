const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

//Extracts the token from the header
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

//Extracts the user from the request
const userExtractor = async (request, response, next) => {

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const user = await User.findById(decodedToken.id)
  request.user = user
  next()
};

module.exports = {
  tokenExtractor,
  userExtractor
}