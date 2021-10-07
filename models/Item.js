const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    offerId: {
        type: Schema.Types.ObjectId,
        ref: 'offers'
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },
    transactionId:{
        type: Schema.Types.ObjectId,
        ref: 'transactions'
    }
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;