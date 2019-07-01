const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy //The strategy for passport to use
const ExtractJwt = require('passport-jwt').ExtractJwt //The function to extract JWT data

const config = require('./config/config')

passport.use (
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Look for the JWT Token in the header
    secretOrKey: config.authentication.jwtSecret //Get the encryption / decryption key from the config
  }, async function (jwtPayload, done) {
    try {
      const user = await User.findOne({ //Find a user by that ID to begin with, if it doesn't exist throw an error
        where: {
          id: jwtPayload.id
        }
      })

      if(!user) {
        return done(new Error(), false) // no user, no auth
      }
      return done(null, user) // otherwise we gooder
    } catch (err) { //Catch any errors and throw it to the server
      return done(new Error(), false)
    }
  })
)

module.exports = null