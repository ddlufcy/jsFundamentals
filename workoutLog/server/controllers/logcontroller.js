const express = require('express');
const router = require('express').Router();
const Log = require('../db').import('../models/log');
const validateSession = require('../middleware/validatesession');


router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
})
// POST
router.post('/',validateSession, (req, res) => {
    const logFromRequest = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
        owner: req.user.id
    }
    // console.log(req);
    Log.create(logFromRequest)
        .then(log => res.status(200).json(log))
        .catch(log => res.json(req.errors));
})
// GET ITEM BY ID
router.get('/:owner', (req, res) => {
    Log.findOne({
        where: {
            owner: req.params.owner
        }
    })
    .then(log => res.status(200).json(log))
    .catch(log => res.status(500).json({
        error: err
    }))
    console.log(req);
})
// UPDATE BY ID
router.put('/:id', validateSession, (req, res) => {
    Log.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({
        error: err
    }))
})
// UPDATE BY USERNAME
router.put('/:id', validateSession, (req, res) => {
    Log.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})
// DELETE BY USER
router.delete('/:id', validateSession,(req, res) => {
    Log.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})
module.exports = router;