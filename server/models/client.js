'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: String,
    photo: String,
    zip: Number,
    city: String,
    state: String,
    address: String,
    age: Number,
    pets:[{type: mongoose.Schema.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model('Client', clientSchema);
