const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    category: {
        type: String,
        required: true
    },

    itemName: {
        type: String,
        required: true
    },

    price: {
        type: Number
    },

    description: {
        type: String,
        required: true
    },

    postImage:{
        type: String,
        required: true
    }
  });

  const Post = mongoose.model('post', PostSchema);
  module.exports = Post;