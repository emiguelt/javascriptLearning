var app = app || {}

// ToDo Collection

var TodoList = Backbone.Collection.extend({
  model: app.Todo,
  //save all ToDo items under 'todos-backbone' namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  //filter down all finished ToDos
  completed: function(){
    return this.filter(function(todo){
      return todo.get('completed');
    });
  },
  
  //filter down all remaining ToDos
  remaining: function(){
    return this.without.apply(this, this.completed());
  },

  nextOrder: function(){
    if(!this.length){
      return 1;
    }
    return this.last().get('order')+1;
  },

  comparator: function(todo){
    return todo.get('order');
  }
});

app.Todos = new TodoList();
