'use strict';

var Animal = require('../../models/animal');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Animal.find({isAdopted:false}, function(err, animals) {
      reply.view('templates/animals/index', {path:'/animals', active:active, animals:animals});
    });
  }
};
