$(document).ready(function(){
	
	var parentDiv = $("#main");
	var controlsDiv = $("#controlsDiv");
	
	
	var enabledPlugins = [new TextColor("textColor") , new Bold() , new Italic() , new Underline()];
	
	(function createControls( controlsDiv ){
		$.each(enabledPlugins , function(index, plugin){
			 controlsDiv.append(plugin.getElement());
		});
	})(controlsDiv);
	
});
