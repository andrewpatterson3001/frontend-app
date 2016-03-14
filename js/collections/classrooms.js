// var Classrooms = Backbone.Collection.extend({
//   url: 'http://jsonplaceholder.typicode.com/posts',
//   model: Classroom
// });

define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/classroom'
], function(_, Backbone, Classroom){
  var Classrooms = Backbone.Collection.extend({
  url: 'https://boxtops.herokuapp.com/classrooms',
  model: Classroom
});
  // You don't usually return a collection instantiated
  return Classrooms;
});