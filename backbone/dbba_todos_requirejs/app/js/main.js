require.config({
  baseUrl='../'
});

require(['views/app'], function(AppView){
  var app_view = new AppView;
});
