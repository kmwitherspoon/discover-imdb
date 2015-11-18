var template = {
  imdbTmpl: [
    '<div class=" movie col-md-4">',
      '<img class="cover" src ="<%= cover_url %>">',
      '<p class="title" src="<%= title%>"><%= title %></p>',
      '<p class="release" src="<%= release"><%= release %></p>',
      '<p class="plot" src="<%= plot%>"><%= plot%></p>',
      '<p class="rating" src="<%= rating %>"><%= rating %></p></div>'
  ].join("")
}
