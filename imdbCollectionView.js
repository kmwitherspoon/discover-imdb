var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var ImdbModelView = require('./imdbModelView');

module.exports = Backbone.View.extend({
  el: '.container',
  events: {

  },

  initialize: function () {
  this.addAll();
  },
  addOne: function (imdbModel) {
    var imdbModelView = new ImdbModelView({model: imdbModel});
    this.$el.append(imdbModelView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);

  },

});
