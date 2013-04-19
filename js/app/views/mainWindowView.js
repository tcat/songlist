define([
  "ember",
  "views/DialogTextFieldView",
  "views/SongsTableListView",
  "views/DialogWindowView",
  "controllers/dialogWindowController",
  "controllers/songsListController",
  
  "text!templates/mainWindowTemplate.html"
], function(Em, DialogTextFieldView, SongsTableListView,DialogWindowView,dialogWindowController, songsListController, mainTemplate){
	/**
	*
	* @description View of main window
	*
	*/	   
	  var mainWindow = Em.View.extend({
		template: Em.Handlebars.compile(mainTemplate),
		templateName:"MySongList",
		
	  }).append();
	
	  return mainWindow;
});