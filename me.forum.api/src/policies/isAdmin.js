const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = function(req, res, next){
  var user = jwt.verify(req.headers.authorization.replace("Bearer ",""), config.authentication.jwtSecret);
      
  if (!user || user.role != "Admin") {
    res.status(403).send({
      error: 'You are not authorised to do this action NO ROLE.' 
    })
  } else {
    next()
  }
}