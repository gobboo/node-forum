const {Forum} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const Forums = await Forum.findAll()

      res.send(Forums)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error getting the list of forums.'
      })
    }

  },

  async new (req, res) {
    try {
      const forum = await Forum.create(req.body)

      res.send(forum)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error getting the list of forums.'
      })
    }
  }
}