// var Classroom = Backbone.Model.extend({
//   validate: function(attributes){
//     if (attributes.teacherName === ""){
//       return "You must set a teacher name for a new classroom. Every classroom needs a great teacher!"
//     }
//   },
//   initialize: function(){
//     alert('initilize classroom');
//     this.bind("error", function(model, error){
//       alert(error);
//     });
//     this.on("change:teacherName", function(model){
//       var name = model.get("teacherName");
//       alert("Teacher name set/changed to " + name);
//     });
//   }
// });

// var classroom = new Classroom();

define([
  'underscore',
  'backbone'
], function(_,Backbone){
  var Classroom = Backbone.Model.extend({
  validate: function(attributes){
    if (attributes.teacherName === ""){
      return "You must set a teacher name for a new classroom. Every classroom needs a great teacher!"
    }
  },
  initialize: function(){
    this.bind("error", function(model, error){
      alert(error);
    });
    this.on("change:teacherName", function(model){
      var name = model.get("teacherName");
      alert("Teacher name set/changed to " + name);
    });
  }
});
  // Return the model for the module
  return Classroom;
});