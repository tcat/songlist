
/**************************
* Application
**************************/
App = Em.Application.create();

/**************************
* Models
**************************/

App.Song = Em.Object.extend({
  
	track_name: '',
	artist: '',
	album: '',
	length: '',
	isActive:false,
	setActive:function(){
	  var isActive=this.get('isActive');
	  
	  if(!isActive) {
		App.songsListController.breakAllisAcive();
		this.set('isActive',true);
		
	  }
	  
	}
});


/**************************
* Views
**************************/

App.SongView = Ember.View.extend({
    templateName: "song",
	setActive:function(event){
		event.context.setActive();
	},
}),

/**************************
* Controllers
**************************/

App.songsListController = Em.ArrayController.create({
  content : [],
  maxSongsInList:8,
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
   breakAllisAcive:function(){
	   //this.setEach('isActive', false);
	  this.content.filterProperty('isActive', true).setEach('isActive', false);
	 
   },
   deleteSong:function(){
	   	var deletedSong = this.content.findProperty('isActive',true);
		
		if (deletedSong){
			if (confirm("Are you sure?")) {  
				
				this.removeObject(deletedSong);
			}
		}
		else alert('Nothing to delete!');
   },
   init:function(){
		this.createSong('Sunrise','SkyLark','Spryng Melody','3:45',false);

   }
})




App.dialogWindow = Em.Object.create({
	isShown:true,
	inputFields:{
		track_name: '',
		artist: '',
		album: '',
		length: ''
	},
	showDialog: function(){

		this.set('isShown',true);  
		
	},
	hideDialog:function(){
		this.set('isShown',false);
	},
	addSong:function(){
		if(this.formValid()){
			App.songsListController.createSong(this.inputFields.track_name,this.inputFields.artist,this.inputFields.album,this.inputFields.length,false);
			this.clearDialog();
			this.hideDialog();	
		}
		else alert('Please fill form');
	},
	formValid:function(){
		for(var i in this.inputFields){
			if (this.inputFields[i] != '') return(true); 	
			
		} 
		return false;
		
	},
	clearDialog:function(){
			
		this.set('inputFields.track_name','');
		this.set('inputFields.artist','');
		this.set('inputFields.album','');
		this.set('inputFields.length','');	
	}
});


