requirejs.config({
	baseUrl: "js",
	paths: {"ember":"libs/ember-1.0.0-rc.2",
			"less":"libs/less-1.3.3.min",
			"jquery":"libs/jquery-1.9.1",
			"handlebars":"libs/handlebars-1.0.0-rc.3",
			"app":"app"
			},
	waitSeconds: 15
  });



define("main",["jquery","handlebars"]);

/*define("myapp",["embers"]);
require(["myapp",
		 "less",
		 "prefixfree"],[],function(){
		require('app');	
		}
);*/

require(["main"], function(){
	require(["ember"],function(){
		require(["app","less"]);						   
	})										   
											   
});
