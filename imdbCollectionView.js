var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var ImdbView = require('./imdbModelView');

module.exports = Backbone.View.extend({
  el: '#imdbTmpl',
  events: {
    'submit form': 'createInputBox',

    // 'submit form': 'submitForm'
  },
  addOne: function (imdbModel) {
    var imdbView = new ImdbView({model: imdbModel});
    this.$el.append(imdbView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);

  },

  createInputBox: function(ImdbView){
    $(".submit-section").append('<form><input type="text name="title" value="Title"/>' +
              '<input type="text" name="release" value="Release year">' +
              '<input type="url" name="cover_url" value="Cover Url" />' +
              '<input type="text" name="plot" value="Plot" />' +
              '<input type="text" name="rating" value="Rating"/>' +
              '<input type="submit" name="Submit" class="something" /></form>');
  },

  // createMovie: function() {
  //   $(".submit-section").on('submit', function(event){
  //     event.preventDefault();
  //   var newMovie = new ImdbModel({
  //     title: $('input[name="title"]').val(),
  //     release: $('input[name="release"]').val(),
  //     cover_url: $('input[name="cover_url"]').val(),
  //     plot: $('input[name="plot"]').val(),
  //     rating: $('input[name="rating"]').val(),
  //
  //   });
  //   newMovie.save();
  //   imdbPage.loadMovies;
  // })
// }
}
