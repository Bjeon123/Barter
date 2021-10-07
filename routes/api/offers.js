const express = require("express");
const passport = require("../../config/passport");
const router = express.Router();
const Offer = require("../../models/Offer");
const validateOffer = require("../../validation/offers");

router.get('/', (req, res) => {
    Offer.find()
        .sort({ date: -1 })
        .then(offers => res.json(offers))
        .catch(err => res.status(404).json({ nooffersfound: "No offers found"}))
})

router.get('/user/:user_id', (req, res) => {
    Offer.find({ user: req.params.user_id})
        .then(offers => res.json(offers))
        .catch(err => res.status(404).json({ nooffersfound: "No offers found for that user"}))
})

router.get('/post/:post_id', (req, res) => {
    Offer.find({ postId: req.params.post_id})
        .then(offers => res.json(offers))
        .catch(err => res.status(404).json({ nooffersfound: "No offers found for that user"}))
})

router.get('/:id', (req, res) => {
    Offer.findById(req.params.id)
        .then(offer => res.json(offer))
        .catch(err => res.status(404).json({ noofferfound: "No offer found with that id"}))
})

router.post('/', (req, res) => {
    const { errors, isValid } = validateOffer(req.body)
    if (!isValid){
        return res.status(400).json(errors);
    }
    const newOffer = new Offer({
        user: req.body.user,
        text: req.body.text,
        receiver: req.body.receiver,
        price: req.body.price,
        postId: req.body.postId
    })
    newOffer.save().then(offer=>
        res.json(offer)
    )
})

router.patch('/:id', (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateOffer(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const updatedOffer = {
        user: req.body.user,
        text: req.body.text,
        receiver: req.body.receiver,
        price: req.body.price,
        postId: req.body.postId
    }
    Offer.findOneAndUpdate({ _id: req.params.id }, updatedOffer, { new: true }, (err, offer) => {
        if (err) {
            return res.status(400).json(["Invalid Offer"])
        }
        else {
            return res.json(offer)
        }
    })
});

router.delete('/:id', (req, res) => {
    Offer.findOneAndDelete({_id: req.params.id})
        .then(offer => res.json(offer))
        .catch(err => res.status(404).json({ noofferfound: "No offer found with that id" }))
    })

router.delete('/post/:postId', (req,res)=>{
    Offer.deleteMany({postId: req.params.postId})
        .then(offers =>res.json(offers))
        .catch(err => res.status(404).json({ noofferfound: "No offer found with that id" }))
})


module.exports = router;