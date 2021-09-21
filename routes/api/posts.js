const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const validatePost = require("../../validation/posts");

router.get('/test', (req, res) => {
    res.json({ msg: "This is the post route" });
});

router.get('/', (req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err));
});

router.get('/user/:userId', (req, res) => {
    Post.find({userId: req.params.userId})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err));
});

router.get('/id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
  
    const { errors, isValid } = validatePost(req.body);
  
    if (!isValid) {
        return res.status(400).json(errors);
    }
  
              
    const newPost = new Post({
        userId: req.body.userId,
        category: req.body.category,
        itemName: req.body.itemName,
        price: req.body.price,
        description: req.body.description
    });
  
    newPost.save().then(post => res.json(post));
  
});

module.exports = router;

