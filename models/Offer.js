const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true 
    },
    text: {
        type: String,
        required: true
    }, 
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    price: {
        type: Number
    },
    items: {
        type: Array
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true 
    }
});

const Offer = mongoose.model('offer', OfferSchema);
module.exports = Offer;