'use strict';

var Client = require('../../models/client');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Client.find(function(err, clients) {
      reply.view('templates/clients/index', {path:'/clients', active:active, clients:clients});
    });
  }
};
