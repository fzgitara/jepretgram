const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  caption: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  file: String
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post