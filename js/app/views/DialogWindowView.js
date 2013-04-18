define([
  "ember",
  "views/DialogTextFieldView",
  "controllers/dialogWindowController",
  "text!templates/DialogWindowTemplate.html",
], function(Em, DialogTextFieldView,dialogWindowController, DialogWindowTemplate){
  		var DialogWindowView = Em.View.extend({
    	template: Em.Handlebars.compile(DialogWindowTemplate)
	
  });
  return DialogWindowView;
});