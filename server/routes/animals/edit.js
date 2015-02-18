'use strict';

var Animal = require('../../models/animal');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id:request.params.animalId},function(err, animal) {
      reply.view('templates/animals/edit', {path:'/animals', active:active, animal:animal});
    });
  }
};
