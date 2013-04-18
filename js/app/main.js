define([
	"views/DialogTextFieldView",
	"views/mainWindowView",
	"views/SongsTableListView",
	"views/DialogWindowView",
	"controllers/dialogWindowController",
	"controllers/songsListController",
	"models/Song"
], function(DialogTextFieldView,mainWindowView,SongsTableListView,DialogWindowView,dialogWindowController,songsListController,Song) {


	/*Module Pattern*/
	var App = {
		DialogTextFieldView: DialogTextFieldView,
		mainWindowView:mainWindowView,
		SongsTableListView:SongsTableListView,
		DialogWindowView:DialogWindowView,
		dialogWindowController: dialogWindowController,
		songsListController: songsListController,
		Song: Song
	};

	return App;
});