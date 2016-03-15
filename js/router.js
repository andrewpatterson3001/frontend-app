define([
  'jquery',
  'underscore',
  'backbone',
  'views/classrooms/list'
], function($, _, Backbone, ClassroomListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/classrooms': 'showClassrooms'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;




    //I'm having trouble routing to 'showClassrooms'. Not sure how to debug this, so I'm working around by creating a new ClassroomListView directly in this initialize function.
    app_router.on('showClassrooms', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/classrooms/list'
      var classroomListView = new ClassroomListView();
      console.log(classroomListView)
      //classroomListView.render();
    });




//there is probably a better way to do this

    var classroomListView = new ClassroomListView();
      classroomListView.render();
      //maybe add this later?
    // app_router.on('defaultAction', function(actions){
    //   // We have no matching route, lets just log what the URL was
    //   console.log('No route:', actions);
    // });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});