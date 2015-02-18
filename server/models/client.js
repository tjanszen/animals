'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: String,
    zip: Number,
    city: String,
    state: String,
    address: String,
    age: Number
});

module.exports = mongoose.model('Client', clientSchema);
