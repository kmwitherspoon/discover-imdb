var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var ImdbView = require('./imdbModelView');
var ImdbModel = require('./imdbModel');

module.exports = Backbone.View.extend({
  el: '.container',
  events: {
    'submit form': 'submitForm',
    'button .edit': 'editMovie'
  },
  submitForm: function (event) {
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      release: this.$el.find('input[name="release"]').val(),
      cover_url: this.$el.find('input[name="cover_url"]').val(),
      plot: this.$el.find('input[name="plot"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
    };
    var newModel = new ImdbModel(newMovie);
    newModel.save();
    this.collection.add(newModel);
    this.addOne(newModel);
  },
  initialize: function () {
  this.addAll();
  },
  addOne: function (imdbModel) {
    var imdbView = new ImdbView({model: imdbModel});
    this.$el.append(imdbView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);

  },

 // editMovie: function(){
 //   var _id = this.model.attributes._id;
 //   this.model.
 // }
});
