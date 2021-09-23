const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const validatePost = require("../../validation/posts");
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

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

router.patch('/update/:id', (req, res) => {
    const { errors, isValid } = validatePost(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const updatedPost = {
        category: req.body.category,
        itemName: req.body.itemName,
        price: req.body.price,
        description: req.body.description
    }
    Post.findOneAndUpdate({'_id': req.body['_id']}, {$set: updatedPost}, {new: true})
        .then(post => res.json(post))
        .catch(err => console.log(err));
});
  
router.delete('/delete/:id', (req, res) => {
    Post.findOneAndDelete({_id: req.params.postId})
        .then(post => res.json(post))
        .catch((err) => (res.status(400).json({err})));
});

// router.patch('/:id/update',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         const { errors, isValid } = validatePost(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//         Post.findByIdAndUpdate(
//             req.params.id,
//             {
//                 // userId: req.body.userId,
//                 category: req.body.category,
//                 itemName: req.body.itemName,
//                 price: req.body.price,
//                 description: req.body.description
//             },
//             { new: true },
//             function (err, success) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     return success;
//                 }
//             }
//         ).then(updatedPost => {
//             User.findOneAndUpdate(
//                 { _id: req.user.id },
//                 {
//                     $set: {
//                         'posts.$[el].category': updatedPost.category,
//                         'posts.$[el].itemName': updatedPost.itemName,
//                         'posts.$[el].price': updatedPost.price,
//                         'posts.$[el].description': updatedPost.description
//                     }
//                 },
//                 { arrayFilters: [{ "el._id": updatedPost._id }], new: true }
//             )
//                 .then(complete => res.json(complete))
//         })
//     }
// );

// router.delete('/delete/:id',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         const postId = req.params.id

//         Post.findById(postId)
//             .then(post => User.updateOne(
//                 { _id: req.user.id },
//                 {
//                     $pull: {
//                         'posts': { _id: post._id }
//                     }
//                 }
//             ).then(() => Post.findByIdAndDelete(
//                 postId,
//                 (err, post) => {
//                     if (err) {
//                         return res.json(err)
//                     }
//                 }
//             ).then(() => res.json({ msg: 'Post successfully deleted' }))
//                 .catch(err => console.log(err))
//             ))
//     }
// );


module.exports = router;

