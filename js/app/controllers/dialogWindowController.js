define(["ember","controllers/songsListController"], function(Em, songsListController){
/**
*
* @description Dialog window object
*
*/

	dialogWindowController = Em.Object.create({
		/**
		*
		* @property {boolean} isShown - Indicates whether the dialog window is shown.
		*
		*/
		isShown:false,
		/**
		*
		* @property {object} inputFields - Values of the form's text fields.
		*
		*/
		inputFields:{
			track_name: '',
			artist: '',
			album: '',
			length: ''
		},
	   /**
	   *
	   * @function showDialog Show dialog window.
	   * @this {App.dialogWindow}
	   */	
		showDialog: function(){
	
			this.set('isShown',true);  
			
		},
		/**
		*
		* @function hideDialog Hide dialog window.
		* @this {App.dialogWindow}
		*/
		hideDialog:function(){
			this.set('isShown',false);
		},
		/**
		*
		* @function SubmitSong Submit song to songlist, clear and hide the dialog window.
		* @this {App.dialogWindow}
		*/
		SubmitSong:function(){
			if(this.formValid()){
				songsListController.createSong(this.inputFields.track_name,this.inputFields.artist,this.inputFields.album,this.inputFields.length,false);
				this.clearDialog();
				this.hideDialog();	
			}
			else alert('Please fill form');
		},
		/**
		*
		* @function formValid Validation of form of dialog window. 
		* @this {App.dialogWindow}
		* @return {boolean} Return true if at least one field isn't empty. 
		*
		*/
		formValid:function(){
			for(var i in this.inputFields){
				if (this.inputFields[i] != '') return(true); 	
				
			} 
			return false;
			
		},
		/**
		*
		* @function clearDialog Clear fields of a dialog window. 
		* @this {App.dialogWindow}
		*/
		clearDialog:function(){
				
			this.set('inputFields.track_name','');
			this.set('inputFields.artist','');
			this.set('inputFields.album','');
			this.set('inputFields.length','');	
		}
	});
	return dialogWindowController;
});