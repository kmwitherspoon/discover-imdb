var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'section',
  className: 'movies',
  template: _.template($('#imdbTmpl').html()),
  events: {
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {}

});
