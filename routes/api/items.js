const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");
const validateItem = require("../../validation/items");
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

router.get('/test', (req, res) => {
    res.json({ msg: "This is the item route" });
});

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

router.get('/user/:userId', (req, res) => {
    Item.find({ userId: req.params.userId })
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

router.get('/transaction/:transactionId',(req,res)=>{
    Item.find({transactionId: req.params.transactionId})
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err))
})

router.get('/offer/:offerId', (req, res) => {
    Item.find({ offerId: req.params.offerId })
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

router.get('/show/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
});

router.post('/create', (req, res) => {
    const { errors, isValid } = validateItem(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newItem = new Item({
        name: req.body.name,
        userId: req.body.userId,
        offerId: req.body.offerId,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
    newItem.save().then(item => res.json(item)).catch(err => res.status(400).json(err));
});

router.patch('/:id', (req, res) => {
    const { errors, isValid } = validateItem(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const updatedItem = {
        name: req.body.name,
        userId: req.body.userId,
        offerId: req.body.offerId,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        transactionId: req.body.transactionId
    }
    Item.findOneAndUpdate({ _id: req.params.id }, updatedItem, { new: true }, (err, item) => {
        if (err) {
            return res.status(400).json(["Invalid Item"])
        }
        else {
            return res.json(item)
        }
    })
});

router.delete('/:id', (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id })
        .then(item => res.json(item))
        .catch((err) => (res.status(400).json({ err })));
});

router.delete('/offer/:offerId', (req, res) => {
    Item.deleteMany({ offerId: req.params.offerId })
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ noofferfound: "No item found with that id" }))
})

module.exports = router;