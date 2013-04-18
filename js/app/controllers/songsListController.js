define(["ember","models/Song"], function(Em, Song){
	songsListController = Em.ArrayController.create({
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
				  var song = Song.create({track_name:track_name, artist:artist,album:album,length:length,isActive:isActive})
				  this.pushObject(song);
			}
			else alert('Sorry. Songlist is full');
	   },

	  /**
	  * @description Set active state of a clicked Song. 
	  *
	  * @function setActive
	  * @this {App.Song}
	  * 
	  */	

		setActive:function(evt){
			
		  console.log(evt.isActive);
		  
		  	var isActive=evt.get('isActive');

		  	/**
		   	* @property {boolean} isActive - Indicates whether the song in table is active(If it clicked).
		   	*/
		  	if(!isActive) {
				this.content.filterProperty('isActive', true).setEach('isActive', false);
				evt.set('isActive',true);

		  	}
			var isActive=evt.get('isActive');
		  console.log(this);
		  
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
			var deletedSong = this.findProperty('isActive',true);
			
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
	return songsListController;
});