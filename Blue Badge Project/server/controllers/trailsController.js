/*
Holds main data table containing all trails, user will search from this table and populate their respective
user table from the items contained herein. No full CRUD on this table/endpoint, READ ONLY.
*/
const router = require('express').Router();
const Trails = require('../db').import('../models/trails');
// const validateSession = require('../middleware/validatesession');

//GET ALL
router.get('/', (req, res) => {
    Trails.findAll({
      
    }
    )
    .then(trails => res.status(200).json(trails))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//GET TRAIL BY DIFFICULTY
router.get('/:difficulty', (req, res) => {
    Trails.findAll({
        where: {
            difficulty: req.params.difficulty
        }
    })
    .then(difficulty => res.status(200).json(difficulty))
    .catch(err => res.status(500).json({
        error: err
    }))

})

module.exports = router;