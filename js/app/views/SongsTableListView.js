define([
  "ember",
  "controllers/songsListController",
  "text!templates/SongsTableListTemplate.html",
], function(Em, songsListController,SongsTableListTemplate){
		
		/**
		*
		* @description View of table with songs
		*
		*/
		
		  var SongsTableList = Em.View.extend({
			template: Em.Handlebars.compile(SongsTableListTemplate),
		  });
  return SongsTableList;
});