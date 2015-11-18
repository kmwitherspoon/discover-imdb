var Backbone = require('backbone');
var ImdbModel = require('./imdbModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/discoverimdb',
  model: ImdbModel
});
