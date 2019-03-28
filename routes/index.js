var express = require('express');
var router = express.Router();
var SuperHeroCollection = require("../models/SuperHeroSchema");

/* Index page renders array of all Super Heroes */
router.get('/', function(req, res, next) {
  SuperHeroCollection.find({}, (errors, results)=>{
    if (errors) res.send(errors);
    else {
      context = {
        allEntries: results,
      };
      res.render('index', context);
    }
  });
});

router.get("/create", (request, response)=>{
  response.render('create');
});


//add Super Hero
router.get('/add', (req,res)=>{
  res.render('add');});

router.post('/add', (request,response)=>{
  // console.log('error');
  SuperHeroCollection.create(
      {
        ID: request.body.ID,
        name: request.body.name,
        powers_intelligence: request.body.powers.intelligence,
        powers_strength: request.body.powers.strength,
        powers_speed: request.body.powers.speed,
        powers_combat: request.body.powers.combat,
        powers_wealth: request.body.powers.wealth,
        img: request.body.img,
      }, (errors)=>{
        if (errors) response.send(errors);
        else{
          response.redirect('/');
        }
      }
  )
});

// update SuperHero
router.get('/update', (request, response)=>{
  response.render('update');
});

router.get('/find', (req, res)=>{
  SuperHeroCollection.updateOne(
      {
        id: req.query.id,
      },
      {
        name: req.query.name,
        body: req.query.body,
      }, (errors)=>{
        if (errors) res.send(errors);
        else res.redirect("/");
      }
  )
});

//delete Super Hero
router.get('/delete', (req,res)=>
{
  res.render("delete");
});

router.get('/deletePost', (req, res)=>{
  SuperHeroCollection.deleteOne(
      {
        ID: req.query.ID,
      }, (error)=>{
        if (error) res.send(error);
        else res.redirect('/');
      }
  )
});


module.exports = router;
