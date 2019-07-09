const {Thread} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const Threads = await Thread.findAll({
        where: {
          assignedForum: req.body.forumId
        }
      })

      res.send(Threads)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        status: 500,
        error: 'Error getting the list of threads.'
      })
    }

  },

  async new (req, res) {
    try {
      const Thread = await Thread.create(req.body)

      res.send(Thread)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        status: 500,
        error: 'Error creating your new thread.'
      })
    }
  },

  async get (req, res) {
    try {
      const thread = await Thread.findByPk(req.params.threadId)
      res.send(thread)
    } catch(err) {
      console.log(err)
      res.status(500).send({
        status: 500,
        message: 'Error getting thread data.'
      })
    }
  }
}