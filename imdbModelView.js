var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'section',
  className: 'movies',
  template: _.template(tmpl.movie),
  events: {
    'click .delete': 'deleteMovie',
    'click .edit': 'editMovie'
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {

  },
  deleteMovie : function() {
   this.model.destroy();
   this.remove();
 },
 editMovie: function(){

   this.model.stickit();
   this.model.save();
 }

});
