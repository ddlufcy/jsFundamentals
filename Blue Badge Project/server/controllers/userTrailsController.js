/*Endpoints for CRUD on the userTrails table  this will populate the main list displayed under
favorite trails*/

const router = require('express').Router();
const UserTrails = require('../db').import('../models/userTrails');
const validateSession = require('../middleware/validatesession');

//GET ALL
router.get('/', (req, res) => {
    UserTrails.findAll({
        where: {
            owner: req.user.id
        }}
    )
        .then(userTrails => res.status(200).json(userTrails))
        .catch(err => res.status(500).json({
            error: err
        }))
})
//POST
router.post('/addTrail', (req,res) => {
    console.log(req.body)
    const userTrailsFromRequest = { //add new trails
        name: req.body.name,
        distance: req.body.distance,
        location: req.body.location,
        difficulty: req.body.difficulty,
        owner: req.user.id 
    }
    UserTrails.create(userTrailsFromRequest)
        .then(userTrails => res.status(200).json(userTrails))
        .catch(err => res.json(req.errors));
})
//GET TRAILS BY NAME
router.get('/findBy/:name', (req, res) => {
    UserTrails.findOne({
        where: {
            name: req.params.name
        }
    })
    .then(userTrails => res.status(200).json(userTrails))
    .catch(err => res.status(500).json({
        error: err
    }))
})
//GET TRAILS BY USER
router.get('/byOwner/:owner', (req, res) => {
    UserTrails.findAll({
        where: {
           owner: req.user.id
        }
    })
    .then(userTrails => res.status(200).json(userTrails))
    .catch(err => res.status(500).json({error: err}))
})
//UPDATE BY ID
router.put('/:id', (req, res) => {
    UserTrails.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(userTrails => res.status(200).json(userTrails))
    .catch(err => res.json({
        error: err
    }))
})
//DELETE BY ID
router.delete('/:id', (req, res) => {
    console.log('here')
    UserTrails.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userTrails => res.status(200).json(userTrails))
    .catch(err => res.json({
        error: err
    }))
})
module.exports = router;
