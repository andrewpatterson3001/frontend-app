A fundamental misconception that I addressed was the difference between client-side(Backbone.js) javascript and server-side javascript(Node/Express). Since I'm serving JSON from a [Rails API](https://boxtops.herokuapp.com/), I should only be writing client-side JS in this repo. Today, I'm removing Node and stripping away everything that isn't necessary.

Today, I'd like to really understand Backbone.sync methods and how they are called in on page load and in response.  I would like to see JSON API data loaded to the page, and I would like to make a create route that adds data to the Postgres database through the API.