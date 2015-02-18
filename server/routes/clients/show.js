'use strict';

var Client = require('../../models/client');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id:request.params.clientId},function(err, client) {
      reply.view('templates/clients/show', {path:'/clients', active:active, client:client});
    });
  }
};
