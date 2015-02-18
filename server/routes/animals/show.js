'use strict';

var Animal = require('../../models/animal');
var active = require('../../views/helpers/active');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id:request.params.animalId},function(err, animal) {
      Client.find(function(err, clients) {
        reply.view('templates/animals/show', {path:'/animals', active:active, animal:animal, clients:clients});
      });
    });
  }
};
