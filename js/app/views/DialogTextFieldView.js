define(["ember"], function(Em){
	/**
	*
	* @description Textarea for dialog window
	*
	*/
	
	DialogTextField = Em.TextField.extend({
	  maxlength: 15,
	  attributeBindings: ['maxlength']
	});
	
	return DialogTextField;
});