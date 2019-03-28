var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperHeroSchema = new Schema(
    {
        "ID": Number,
        "name": String,
        "powers": {intelligence: Number, strength: Number, speed: Number, combat: Number},
        "wealth": Number,
        "img": String,
    });

//Export model
module.exports = mongoose.model('SuperHero', SuperHeroSchema);