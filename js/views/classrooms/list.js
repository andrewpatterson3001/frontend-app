define([
  'jquery',
  'underscore',
  'backbone',
  'collections/classrooms'
], function($, _, Backbone,Classrooms){
  var ClassroomListView = Backbone.View.extend({
    el: $('body'),
    initialize: function(){
      // this.collection = new Classrooms().fetch();
      // var compiledTemplate = _.template( classroomsListTemplate, { classrooms: this.collection.models });
      // console.log(this.collection)
      var newClassroomsList = new Classrooms().fetch({
        success: function(collection, response){
          console.log('success')
          console.log(response[0]["teacher_name"])
          var numClassrooms = response.length
          for(var i=0;i<numClassrooms;i++){
            $('body').append($('<p>').text(response[i]["teacher_name"]))
          }
        },
        error: function(collection, response){
          alert('there was an error')
        }
      })
    },
    // render: function(){
    //   //console.log(this.classroomsToShow)
    //   // var numClassrooms = this.classroomsToShow.length
    //   // for(var i=0;i<numClassrooms;i++){
    //   //   this.$el.append($('<p>').text(this.classroomsToShow.teacher_name));
    //   // }
    // }
  });
  // Our module now returns our view
  return ClassroomListView;
});