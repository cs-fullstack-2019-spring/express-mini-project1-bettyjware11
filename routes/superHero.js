var express = require('express');
var router = express.Router();
var SuperHeroCollection = require('../models/SuperHeroSchema.js');


router.get('/add', function(req, res, next) {
    res.send('Add Super Hero' );
});

router.get('/test', function (req, res, next) {
    var testSuperHeroes = [
        {
            id: 123,
            name: 'Superman',
            intelligence: 6,
            strength: 20,
            speed: 500,
            combat: 26,
            wealth: 1,
            image: '/path/to/some/img.png',

        },
        {
            id: 456,
            name: 'Batman',
            intelligence: 8,
            strength: 10,
            speed: 200,
            combat: 13,
            wealth: 100,
            image: '/path/to/another/img.png',
        },
        {
            id: 789,
            name: 'Aquaman',
            intelligence: 7,
            strength: 12,
            speed: 300,
            combat: 15,
            wealth: 200,
            image: '/path/to/another1/img.png',

        }
    ];
    console.log('about to create');
    SuperHeroCollection.create(testSuperHeroes, function (err, results) {
            console.log('err');
            res.send(results);
        }
    )
});


//delete Super Hero
router.get('/delete', function(req, res, next) {
    res.send('Delete Super Hero' );
});


//edit Super Hero
router.get('/edit', function(req, res, next) {
    res.send('Edit Super Hero' );
});



//edit Change Super Hero
router.get('/editChange', function(req, res, next) {
    res.send('Change the edit of the Super Hero' );
});


//find Super Hero
router.get('/find', function(req, res, next) {
    res.send('Find Super Hero' );
});


module.exports = router;
