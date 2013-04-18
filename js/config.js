define({
	app_name: "App",
	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		}
		
	},
	paths: {
		'App': 'app/main',
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
		'templates': 'app/templates',
		'routes': 'app/routes',
		/*libs*/
		"ember":"libs/ember-1.0.0-rc.2",
		"less":"libs/less-1.3.3.min",
		"jquery":"libs/jquery-1.9.1",
		"handlebars":"libs/handlebars-1.0.0-rc.3",
		/*requirejs-plugins*/
		
		'hbs': 'libs/hbs',
		'text':'libs/text'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}
});