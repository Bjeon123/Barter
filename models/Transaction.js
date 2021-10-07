const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    offerer: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cash: {
        type: Number
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;