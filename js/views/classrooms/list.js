define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var ClassroomListView = Backbone.View.extend({
    el: $('body'),
    render: function(){
      this.$el.append($('<p>').text('Will it append?'));
    }
  });
  // Our module now returns our view
  return ClassroomListView;
});