define([
  "ember",
  "controllers/songsListController",
  "text!templates/SongsTableListTemplate.html",
], function(Em,songsListController, SongsTableListTemplate){
  var SongsTableList = Em.View.extend({
    template: Em.Handlebars.compile(SongsTableListTemplate)
	
  });
  return SongsTableList;
});