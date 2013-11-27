define(['backbone'], function(Backbone){
  var Todo = Backbone.Model.extend({
    defaults: {
      title: 'empty todo...',
      completed: false
    },
    toggle: function(){
      this.save({
        completed: !this.get('completed')
      });
    }
  });
  return Todo;
});
