'use strict';

var Animal = require('../../models/animal');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id:request.params.animalId},function(err, animal) {
      var species = ['Dog', 'Cat', 'Frog', 'Snake'];
      reply.view('templates/animals/edit', {path:'/animals', active:active, animal:animal, species:species});
    });
  }
};
