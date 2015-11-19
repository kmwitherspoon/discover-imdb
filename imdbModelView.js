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
    'click .edit': 'edit',
    'submit .editted': 'editMovie'
  },
  initialize: function () {

  },
  deleteMovie : function() {
   this.model.destroy();
   this.remove();
 },
 edit: function(e){
    e.preventDefault();
    this.$('.editted').toggleClass('hidden');
  },
 editMovie: function(event){
   event.preventDefault();
   var editText = this.model;
   editText.set({
     title: this.$('input[name="title"]').val(),
     release: this.$('input[name="release"]').val(),
     cover_url: this.$('input[name="cover_url"]').val(),
     plot: this.$('input[name="plot"]').val(),
     rating: this.$('input[name="rating"]').val(),
   });
   $('.editted').addClass('hidden');
    editText.save();
    this.render();
  },
  render: function () {
    console.log(this.model);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
