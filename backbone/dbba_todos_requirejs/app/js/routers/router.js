// Todo Router
define(['jquery', 'backbone', 'common', 'collections/todos'],function($, Backbone, Common, Todos){  

  var Workspace = Backbone.Router.extend({
    routes:{
      '*filter': 'setFilter'
    },
    setFilter: function(param){
      if(param){
        param = param.trim();
      }
      Common.TodoFilter = param || '';
      Todos.trigger('filter');
    }
  });
  return Workspace;
});
