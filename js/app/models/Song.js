define(["ember"], function(Em){
	Song = Em.Object.extend({
	  
		track_name: '',
		artist: '',
		album: '',
		length: '',
		isActive:false,
	
	});
	return Song;
});

