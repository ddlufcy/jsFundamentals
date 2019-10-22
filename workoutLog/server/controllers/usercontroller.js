const express = require('express');
const router = require('express').Router()
const User = require('../db').import('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Create new user
router.post('/signUp', (req, res) => {
    User.create({
            username: req.body.username,
            passwordhash: bcrypt.hashSync(req.body.password, 10)
        })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({
                    id: user.id
                }, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24
                })
                res.json({
                    user: user,
                    message: 'user created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
})
// Sign In User


router.post('/signIn', (req, res) => {
    User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.passwordhash, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({
                            id: user.id
                        }, process.env.JWT_SECRET, {
                            expiresIn: 60 * 60 * 24
                        })
                        res.json({
                            user: user,
                            message: 'successfully signed in user',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({
                            error: 'bad gateway'
                        })
                    }
                })
            } else {
                res.status(500).send({
                    error: 'failed to authenticate'
                })
            }
        }), err => res.status(501).send({
            error: 'failed to process'
        })
})

module.exports = router;