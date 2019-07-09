const {Category} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const Categories = await Category.findAll()

      res.send(Categories)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error getting the list of categories.'
      })
    }

  },

  async new (req, res) {
    try {
      const category = await Category.create(req.body)

      res.send(category)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error creating new category.'
      })
    }
  }
}