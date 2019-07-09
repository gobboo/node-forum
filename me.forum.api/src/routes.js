const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationPolicy = require('./policies/AuthenticationControllerPolicy.js')

const CategoryController = require('./controllers/CategoryController.js')

const ForumController = require('./controllers/ForumController.js')
/* const isAuthenticated = require('./policies/isAuthenticated')
const isAdmin = require('./policies/isAdmin') */

module.exports = (app) => {
  app.post('/login', AuthenticationController.login)
  app.post('/register', AuthenticationPolicy.register, AuthenticationController.register)
  app.post('/activate', AuthenticationController.confirm)

  app.get('/categories', CategoryController.index)
  app.post('/category', CategoryController.new)

  app.get('/forums', ForumController.index)
  app.post('/forum', ForumController.new)
}
