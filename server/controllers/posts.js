const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
  createPost (req,res) {
    const {title, caption, author} = req.body
    const post = new Post ({title, user, category})
    post.save((err, data) => {
        if(!err) {
          res.status(200).json(data)
        } else {
          res.status(409).json(err)
        }
    })
  },
  showAllPost (req,res) {
    Post.find()
    .then(postsData=>{
        res.status(200).json(postsData)
    })
  }
}