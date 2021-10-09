const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

router.get('/', (req, res) => {
    Post.find()
        .then(allPosts => res.json(allPosts))
        // .catch(err => res.status(400).json(err));
});

module.exports = router;