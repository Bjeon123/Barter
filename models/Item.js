const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    postId: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },

    category: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    itemImage: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;