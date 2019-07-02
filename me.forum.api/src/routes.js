const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationPolicy = require('./policies/AuthenticationControllerPolicy.js')
/* const isAuthenticated = require('./policies/isAuthenticated')
const isAdmin = require('./policies/isAdmin') */

module.exports = (app) => {
  app.post('/login', AuthenticationController.login)
  app.post('/register', AuthenticationPolicy.register, AuthenticationController.register)
  app.post('/activate', AuthenticationController.confirm)
}
