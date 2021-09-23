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
        offerId: req.body.postId,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
    newItem.save().then(item => res.json(item)).catch(err => res.status(400).json(err));
});

router.patch('/update/:id', (req, res) => {
    const { errors, isValid } = validateItem(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const updatedItem = {
        name: req.body.name,
        postId: req.body.postId,
        offerId: req.body.postId,
        description: req.body.description,
        itemUrl: req.file.path
    }
    Item.findOneAndUpdate({ '_id': req.body['_id'] }, { $set: updatedItem }, { new: true })
        .then(item => res.json(item))
        .catch(err => console.log(err));
});

router.delete('/delete/:id', (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id })
        .then(item => res.json(item))
        .catch((err) => (res.status(400).json({ err })));
});

module.exports = router;