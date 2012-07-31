$(document).ready(function(){

	var parentDiv = $("#main");
	
	var enabledPlugins = [new TextColor()];
	(function createControls( controlsDiv ){
		$.each(enabledPlugins , function(index, plugin){
			 controlsDiv.append(plugin.getElement());
		});
	})//(controlsDiv);
	
});
