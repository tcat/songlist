define(["ember"], function(Em){
	Song = Em.Object.extend({
	  
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
	return Song;
});