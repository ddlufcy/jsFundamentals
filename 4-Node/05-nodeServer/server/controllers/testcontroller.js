const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const TestModel = sequelize.import('../models/test');

// simple response
router.post('/one', function (req, res) {
    res.send("Got a post request.")
});

// persist data
router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two";

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
});
// req. body
router.post('/four', function (req, res) {
    let testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send("Test 4 went through!");
            }
        );
});

// route 5

router.post('/five', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send(data);
            }

        );
});

// route 6
router.post('/six', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({
                    testdata: testdata
                });
            }
        );
});

// handle errors
router.post('/seven', function (req, res) {
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testdata
        })
        .then(
            function createSuccess(testdata) {
                res.json({
                    testdata: testdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});
router.get('/helloclient', function (req, res){
    res.send('This is a message from the server to the client.')
})
module.exports = router;
