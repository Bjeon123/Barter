const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const express = require("express");
const router = express.Router();


const bcrypt = require('bcryptjs');
const User = require('../../models/User');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "A user has already registered with this address" })
        } else {
            const newUser = new User({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save() .then(user => {
                        const payload = { id: user.id, handle: user.handle }
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer" + token
                                })
                            })
                        })
                    .catch(err => console.log(err));
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(400).json(["Invalid email/password combinations"])
        }
        else {
            bcrypt.compare(req.body.password, user.password).then(
                (isMatch) => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer" + token
                                })
                            }
                        )
                    }
                    else {
                        return res.status(400).json(["Invalid email/password combinations"])
                    }
                }
            )
        }
    })
})



module.exports = router;