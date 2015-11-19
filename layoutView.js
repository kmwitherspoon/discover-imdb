var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var ImdbCollectionView = require('./imdbCollectionView');
var ImdbCollection = require('./imdbCollection');


module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    var self = this;
    var headerHTML = new HeaderView();
    var footerHTML = new FooterView();
    var formHTML = new FormView();
    var imdbCollection = new ImdbCollection();
    imdbCollection.fetch().then(function () {
      var imdbCollectionView = new ImdbCollectionView({collection: imdbCollection});
      // self.$el.find('section').html()
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      self.$el.find('.submit-section').html(formHTML.render().el);
    });


  }

});
