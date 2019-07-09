const {User, Confirmation} = require('../models')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)

      await Confirmation.create({
        userEmail: user.email,
        secretToken: crypto.randomBytes(32).toString('hex'),
        expiresIn: Date.now() + 24 * 3600000
      })

      res.send(user.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'This username or email is already in use.'
      })
    }
  },

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
          error: 'Your username and or password are incorrect.'
        })
        return;
      }

      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        res.status(403).send({
          error: 'Your username and or password are incorrect.'
        })
        return;
      }

      if(!user.active) {
        res.status(403).send({
          error: 'Your account is not verified, check your emails for a verification link.'
        })
        return;
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
  },

  async confirm(req, res) {
    try {
      const {secretToken} = req.body
      const confirmation = await Confirmation.findOne({
        where: {
          secretToken: secretToken
        }
      })
      
      if(!confirmation) {
        res.status(200).send({
          status: 200,
          message: 'This activation token is invalid, it may not exist or has expired.'
        })
        return;
      }

      await User.update(
        {
          active: 1
        },
        {
          where: {
            email: confirmation.userEmail
          }
        }
      )

      await Confirmation.destroy({
        where: {
          userEmail: confirmation.userEmail
        }
      })

      res.send({
        status: 201,
        message: "Your account has now be successfully activated, you can now log in freely."
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occured trying to activate your account, try again later.'
      })
    }
  }
}