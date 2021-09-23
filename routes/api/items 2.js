const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");
const validateItem = require("../../validation/items");
const multer = require('multer')
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

const randomVal = () => Math.floor(1000 + Math.random() * 9000);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, randomVal().toString() + file.originalname)
    }
})

const upload = multer({ storage: storage });

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

router.post('/create', upload.single("itemImage"), (req, res) => {
    const { errors, isValid } = validateItem(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newItem = new Item({
        name: req.body.name,
        userId: req.body.userId,
        postId: req.body.postId,
        category: req.body.category,
        description: req.body.description,
        itemImage: req.file.path
    })
    newItem.save().then(item => res.json(item)).catch(err => res.status(400).json(err));
});

router.patch('/update/:id', (req, res) => {
    const { errors, isValid } = validateItem(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const updatedItem = {
        category: req.body.category,
        name: req.body.name,
        postId: req.body.postId,
        description: req.body.description,
        itemImage: req.file.path
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