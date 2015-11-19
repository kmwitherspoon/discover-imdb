var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var ImdbModel = require('./imdbModel');

module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'submitForm'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new ImdbModel();
    }
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
    this.model.set(newMovie);
    this.model.save();
    this.$el.find('input').val('');
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
