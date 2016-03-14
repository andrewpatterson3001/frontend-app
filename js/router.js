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
    app_router.on('showClassrooms', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/classrooms/list'
      var classroomListView = new ClassroomListView();
      classroomListView.render();
    });
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