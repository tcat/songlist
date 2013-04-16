/**
 * 
 *
 * @author Dmitry Marchenko
 * @description SongList - Simple app for your songs list. 
 * 
 */


/**************************
* @description Application
**************************/
App = Em.Application.create();

/**************************
* @description View
**************************/

/**
*
* @description Textarea for dialog window
*
*/

App.DialogTextField = Ember.TextField.extend({
  maxlength: 15,
  attributeBindings: ['maxlength']
});

/**************************
* @description Models
**************************/

App.Song = Em.Object.extend({
  
	track_name: '',
	artist: '',
	album: '',
	length: '',
	isActive:false,
/**
 * @description Set active state of a clicked Song. 
 *
 * @function setActive
 * @this {App.Song}
 * 
 */	
	setActive:function(){
	  var isActive=this.get('isActive');
	  /**
	   * @property {boolean} isActive - Indicates whether the song in table is active(If it clicked).
	   */
	  if(!isActive) {
		
  		App.songsListController.breakAllisAcive();
		
		this.set('isActive',true);
		
	  }
	  
	}
});



/**************************
* @description Controllers
**************************/

App.songsListController = Em.ArrayController.create({
  content : [],
  /**
  *@property {number} maxSongsInList - Define max quantity of songs in list.
  *
  */
  maxSongsInList:8,
  /**
  *
  * @function createSong Create new song and add it to list.
  * @param {string} track_name - Name of a song
  * @param {string} artist - Name of an artist
  * @param {string} album - Name of an album
  * @param {string} length - Length of a song
  * @param {string} isActive - State of song
  * @this {App.songsListController}
  * 
  * @example App.songsListController.createSong('Sunrise','SkyLark','Spryng Melody','3:45',false);
  *
  *
  *
  */	
  createSong : function(track_name,artist,album,length,isActive){
		if (this.content.length<this.maxSongsInList){	  
			  for (var i=0; i<arguments.length-1; i++){
					if   (arguments[i]=='') arguments[i]='---';
					
				}
			  var song = App.Song.create({track_name:track_name, artist:artist,album:album,length:length,isActive:isActive})
			  this.pushObject(song);
		}
		else alert('Sorry. Songlist is full');
   },
  /**
  *
  * @function breakAllisAcive Create new song and add it to list.
  * @this {App.songsListController}
  * 
  *
  */	   
   breakAllisAcive:function(){
	   
	  this.content.filterProperty('isActive', true).setEach('isActive', false);
	 
   },
  /**
  *
  * @function deleteSong Delete active song(Where isActive flag is true).
  * @this {App.songsListController}
  * 
  *
  */   
   deleteSong:function(){
	   /**
	   *
	   * @description Get all active songs(Where isActive flag is true.)
	   *
	   */
	   	var deletedSong = this.content.findProperty('isActive',true);
		
		if (deletedSong){
			if (confirm("Are you sure?")) {  
				
				this.removeObject(deletedSong);
			}
		}
		else alert('Nothing to delete!');
   },
   /**
   *
   * @function init Run when App.songsListController initialized.
   *
   */
   init:function(){
		this.createSong('Sunrise','SkyLark','Spryng Melody','3:45',false);

   }
})


/**
*
* @description Dialog window object
*
*/

App.dialogWindow = Em.Object.create({
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
			App.songsListController.createSong(this.inputFields.track_name,this.inputFields.artist,this.inputFields.album,this.inputFields.length,false);
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


