'use strict';

var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    Animal.findByIdAndUpdate(request.params.animalId, request.payload, function() {
      reply.redirect('/animals/' + request.params.animalId);
    });
  }
};
