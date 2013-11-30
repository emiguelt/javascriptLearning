require.config({
  shim: {
    backbone:{
      deps:['jquery'],
      exports: 'Backbone'
    }
  },
  paths:{
    jquery: 'libs/jquery.min',
    backbone: 'libs/backbone-min',
    "backbone.localStorage": 'libs/backbone.localStorage',
    underscore: 'libs/underscore-min',
    jadeRuntime: 'libs/jadeRuntime',
  }
});

require(['underscore', 'backbone', 'views/app', 'routers/router'], 
    function(_, Backbone, AppView, Workspace){
      new Workspace();
      Backbone.history.start();
      new AppView();
});
