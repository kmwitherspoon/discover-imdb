var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
var ImdbView = require('./imdbModelView');

module.exports = Backbone.View.extend({
  el: '#imdbTmpl',
  events: {
    'submit form': 'submitForm',
  },
  submitForm: function () {
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
  addOne: function (imdbModel) {
    var imdbView = new ImdbView({model: imdbModel});
    this.$el.append(imdbView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);

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
});
