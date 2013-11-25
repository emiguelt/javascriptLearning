// Main
var app = app || {};

$(function(){
  var books = [
    {title:'Javascript, the good parts', author:'Crockford', releaseDate:'2008', keywords:'javascript programming'},
    {title:'The little book on coffeScript', author:'MacCaw', releaseDate:'2012', keywords:'coffescript programming'},
    {title:'Scala for the impatient', author:'Horstmann', releaseDate:'2012', keywords:'scala programming'},
    {title:'American Psycho', author:'Easton', releaseDate:'1991', keywords:'novel splatter'},
    {title:'Eloquent javascript', author:'Haverbeke', releaseDate:'2011', keywords:'javascript programming'}];

  new app.LibraryView(books);
});
