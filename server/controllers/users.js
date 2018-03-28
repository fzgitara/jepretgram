const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  getAll (req, res) {
    User.find()
    .populate('posts')
    .then(users => {
      res.status(200).json({
        message: 'User list',
        users
      })
    })
  },
  create (req, res) {
    const {username,email,password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const user = new User({username, email, password:hash})
    user.save()
    .then(data => {
      const token = jwt.sign({_id: data._id, username: data.username, email: data.email, username: data.username},'secret') 
      res.status(201).json(token)
    })
    .catch(err => console.log(err))
  },
  edit (req, res) {
    User.findOneAndUpdate({_id: req.params._id}, {$set: req.body}, {upsert: true}, (err, r) => {
      if(err){
          res.status(400).json({
              message: 'Update failed'
          })
      } else {
          res.status(200).json({
              message: 'Update successfull',
              data: req.body
          })
      }
    })
  },
  del (req, res) {
    User.remove({_id: req.params._id}, (err, r) => {
      if(err){
          res.status(400).json({
              message: 'Delete failed'
          })
      } else {
          res.status(200).json({
              message: 'Delete successfull'
          })
      }
    })
  },
  login (req, res) {
    const {username,password} = req.body
    User.findOne({$or:[
        {email: username},
        {username: username}
    ]})
    .exec()
    .then(data => {
      if(data){
        const check = bcrypt.compareSync(password, data.password)
        if(check){
          const token = jwt.sign({_id: data._id,email: data.email,username: data.username}, 'secret')
          res.status(200).json(token)
        } else {
          res.status(409).json(`Password is incorrect`)
        }
      } else {
        res.status(409).json('User or email address is not found')
      }
    })
  }
}