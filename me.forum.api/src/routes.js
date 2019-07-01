const AuthenticationController = require('./controllers/AuthenticationController.js')
const BlogsController = require('./controllers/BlogsController.js')

const isAuthenticated = require('./policies/isAuthenticated')
const isAdmin = require('./policies/isAdmin')

module.exports = (app) => {

  
  app.post('/login', AuthenticationController.login)
  
  app.get('/blogs', BlogsController.index)
  app.get('/blogs/:blogId', BlogsController.show)
  app.put('/blogs/:blogId', isAuthenticated, BlogsController.put)
  app.delete('/blogs/:blogId', isAuthenticated, BlogsController.delete)
  app.post('/blogs', isAuthenticated, BlogsController.post)
  app.get('/admin/users', isAuthenticated, isAdmin, AuthenticationController.index)
}
