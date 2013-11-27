define(['jquery', 'backbone', 'templates/item'], function($, Backbone, itemTemplate){

  var TodoView = Backbone.View.extend({
    tagName: 'li',
      template: itemTemplate,
      events:{
        'click .toggle': 'togglecompleted',
        'dblclick label': 'edit',
        'click .destroy': 'clear',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
      },
      initialize:function(){
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'visible', this.toggleVisible);
      },
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass('completed', this.model.get('completed'));
        this.toggleVisible();
        this.$input = this.$('.edit');
        return this;
      },
      toggleVisible: function(){
        this.$el.toggleClass('hidden', this.isHidden());
      },
      isHidden: function(){
        var isCompleted = this.model.get('completed');
        return(
            (!isCompleted && app.TodoFilter === 'completed')
            || (isCompleted && app.TodoFilter === 'active')
            );
      },
      togglecompleted: function(){
        this.model.toggle();
      },
      edit: function(){
        this.$el.addClass('editing');
        this.$input.focus();
      },
      close:function(){
        var value = this.$input.val().trim();
        if(value)
          this.model.save({title: value});
        this.$el.removeClass('editing');
      },
      updateOnEnter:function(e){
        if(e.which === ENTER_KEY)
          this.close();
      }  
  });

  return TodoView;

});
