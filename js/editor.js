$(document).ready(function(){
	
	var enabledPlugins = ["fonts"];
	 
	var parentDiv = $("#main");
	var controlsDiv;
	(function createControlDiv(){
		controlsDiv = $("<div/>",{
			id : "controlsDiv"
		}).appendTo(parentDiv);
		
		controlsDiv.css({
			
			"background-color":"#666",
			"padding-top" : "10px",
			"padding-bottom" : "10px"
			
		});
		controlsDiv.parent = parentDiv;
	})();
	
	var contentDiv ;
	(function createContentDiv(){
		controlsDiv = $("<div/>",{
			id : "contentDiv",
		}).appendTo(parentDiv);
		controlsDiv.css({
			"border" : "1px solid",
			"padding-top" : "10px",
			"padding-bottom" : "10px",
			"min-height" : "100px"
			
		});
		
	})();
	
	contentDiv.parent = parentDiv;
	
	(function createControls( controlsDiv ){
		var control;
		$.each(enabledPlugins , function(index, plugin){
			 controlsDiv.append(plugin.getElement());
		});
	})();
	
});
