const express = require("express");
const router = express.Router();
const Transaction = require("../../models/Transaction");
const validateTransaction = require("../../validation/transaction");


router.get('/test', (req, res) => {
    res.json({ msg: "This is the transaction route" });
});

router.get('/user/:userId', (req, res) => {
    Transaction.find({
        $or: [{
            "offerer": req.params.userId
        }, {
            "receiver": req.params.userId
        }]
    })
    .then(transactions =>{res.json(transactions)})
    .catch(err => res.status(400).json(err))
});

router.post('/', (req, res) => {
    const { errors, isValid } = validateTransaction(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newTransaction = new Transaction({
        offerer: req.body.offerer,
        postName: req.body.postName,
        postDescription: req.body.postDescription,
        receiver: req.body.receiver,
        cash: req.body.cash,
        imageUrl: req.body.imageUrl
    });
    newTransaction.save().then(transaction => res.json(transaction));
});

router.delete('/delete/:id', (req, res) => {
    Transaction.findOneAndDelete({ _id: req.params.id })
        .then(post => res.json(post))
        .catch((err) => (res.status(400).json({ err })));
});



module.exports = router;
