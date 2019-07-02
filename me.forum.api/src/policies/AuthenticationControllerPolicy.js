const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      username: Joi.string().alphanum().min(4).max(12).required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if(error) {
      switch(error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'Your username must be alphanumeric and contain 4 - 12 characters.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password must contain only alphanumeric characters and have 8 - 32 characters.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}