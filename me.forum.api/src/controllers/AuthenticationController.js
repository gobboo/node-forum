const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async login (req, res) {
    try {
      const {username, password} = req.body
      const user = await User.findOne({
        where: {
          username: username
        }
      })

      if(!user) {
        res.status(403).send({
          error: 'This login information is incorrect.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        res.status(403).send({
          error: 'This login information is incorrect.'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })

    } catch (err) {
      res.status(500).send({
        error: 'An Authentication error has occured when trying to Authenticate.'
      })}
  },
  async index (req, res) {
    try {
      const user = await User.findAll()
      
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'Couldn\'t grab any users, error has occured.'
      })
    }
  }
}