$(document).ready(function(){

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
		contentDiv = $("<div/>",{
			id : "contentDiv",
		}).appendTo(parentDiv);
		contentDiv.css({
			"border" : "1px solid",
			"padding-top" : "10px",
			"padding-bottom" : "10px",
			"min-height" : "100px"	
		});
		
	})();
	
	contentDiv.parent = parentDiv;
	
	var enabledPlugins = [new TextColor()];
	(function createControls( controlsDiv ){
		$.each(enabledPlugins , function(index, plugin){
			 controlsDiv.append(plugin.getElement());
		});
	})(controlsDiv);
	
});
