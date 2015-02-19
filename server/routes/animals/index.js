'use strict';

var Animal = require('../../models/animal');
var active = require('../../views/helpers/active');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    var q = request.query;

    q = _.pick(q, function(v){
      return v;
    });

    if(q.min){
      q.age = {$gte : q.min};
      delete q.min;
    }

    if(q.max){
      q.age = q.age || {};
      _.merge(q.age, {$lte : q.max});
      delete q.max;
    }

    q.isAdopted = false;

    Animal.find(q, function(err, animals) {
      reply.view('templates/animals/index', {path:'/animals', active:active, animals:animals});
    });
  }
};
