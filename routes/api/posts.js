const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const Offer = require('../../models/Offer');
const Item = require('../../models/Item')
const validatePost = require("../../validation/posts");

router.get('/search', async (req, res) => {
    const categoryResults = await Post.find({ category: { $regex: req.query.term, $options: "i" } });
    const nameResults = await Post.find({ itemName: { $regex: req.query.term, $options: "i" } });
    const results = [...categoryResults, ...nameResults];
    const resultMap = {};
    results.forEach(post => {
        const postId = post._id;
        resultMap[postId] = post;
    });
    res.json(Object.values(resultMap));
});

// router.get('/search', (req, res) => {
//     Post.find({category: req.params.category})
//         .then(posts => res.json(posts))
//         .catch(err => res.status(400).json(err));
// });

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

router.get('/show/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
});

router.post('/create',(req, res) => {
    const { errors, isValid } = validatePost(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }         
    const newPost = new Post({
        userId: req.body.userId,
        category: req.body.category,
        itemName: req.body.itemName,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });
    newPost.save().then(post => res.json(post));
});

// router.patch('/update/:id', (req, res) => {
//     const { errors, isValid } = validatePost(req.body);
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     const updatedPost = {
//         category: req.body.category,
//         itemName: req.body.itemName,
//         price: req.body.price,
//         description: req.body.description
//     }
//     Post.findOneAndUpdate({'_id': req.body['_id']}, {$set: updatedPost}, {new: true})
//         .then(post => res.json(post))
//         .catch(err => console.log(err));
// });
  
router.delete('/delete/:id', (req, res) => {
    Post.findOneAndDelete({_id: req.params.id})
        .then(post => res.json(post))
        .catch((err) => (res.status(400).json({err})));
});



module.exports = router;

