var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/discoverimdb',
  idAttribute: '_id',
  defaults: function (){
    return {
      title: "wall-e",
      release: "2008",
      cover_url: "http://1.bp.blogspot.com/_5Z7ZTxP6iIw/Sa-TjCKj5KI/AAAAAAAAAOM/Osj7TCLWIis/s400/wall-e.jpg",
      plot: "In the distant future, a small waste collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      rating: "8.4 stars"
    };
  },
  initialize: function () {
    console.log("hello");
  }
});
