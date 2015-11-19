module.exports = {
  movie: [
    '<div class="movie col-md-4">',
      '<img class="cover col-md-2" src ="<%= cover_url %>">',
      '<div class="movie-text col-md-2">',
        '<p class="title"><%= title %></p>',
        '<p class="release"><%= release %></p>',
        '<p class="plot"><%= plot%></p>',
        '<p class="rating"><%= rating %></p>',
      '</div>',
      '<div class="buttons col-md-12">',
        '<button type="button" name="delete" class="delete">Delete</button>',
        '<button type="button" name="edit" class="edit" src="">Edit</button>',
      '</div>',
      '<form class="editted hidden">',
        '<input type="text" name="title" value="Title"/>',
        '<input type="text" name="release" value="Release year" />',
        '<input type="url" name="cover_url" value="Cover Url" />',
        '<input type="text" name="plot" value="Plot" />',
        '<input type="text" name="rating" value="Rating"/>',
        '<input type="submit" name="Submit" class="something" />',
      '</form>',
    '</div>'
  ].join(""),
  form: [
    '<form class="moviePost">',
      '<input type="text" name="title" value="Title"/>',
      '<input type="text" name="release" value="Release year" />',
      '<input type="url" name="cover_url" value="Cover Url" />',
      '<input type="text" name="plot" value="Plot" />',
      '<input type="text" name="rating" value="Rating"/>',
      '<input type="submit" name="Submit" class="something" />',
    '</form>'
  ].join(""),
  header: [
    '<h1>discover imdb<i class="fa fa-film"></i></h1>',
  ].join(""),
  footer: [
    '<p>&#169;2015 discover imdb</p>'
  ].join("")
};
