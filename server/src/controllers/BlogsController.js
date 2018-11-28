const { Blog } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const blogs = await Blog.findAll({
        limit: 10
      })
      res.send(blogs)
    } catch (err) {
      res.status(400).send({
        error: 'an error has occured trying to fetch the blogs'
      })
    }
  },
  async post (req, res) {
    try {
      const blog = await Blog.create(req.body)
      res.send(blog)
    } catch (err) {
      res.status(400).send({
        error: 'an error has occured trying to create the blog'
      })
    }
  }
}
