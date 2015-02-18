'use strict';

var mongoose = require('mongoose');

var animalSchema = mongoose.Schema({
    name: String,
    photo: String,
    gender: String,
    species: String,
    age: Number,
    breed: String,
    description: String,
    isAdopted: {type: Boolean, default: false}

});

module.exports = mongoose.model('Animal', animalSchema);
