var $ = require('jquery');
var ImdbCollection = require('./imdbCollection');
var ImdbCollectionView = require('./imdbCollectionView');

$(function () {
  var moviesImdb = new ImdbCollection();

  moviesImdb.fetch().then(function (data) {
    console.log("these are the photos: ", moviesImdb);
    new ImdbCollectionView({collection: moviesImdb});

  });
})
