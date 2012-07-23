$(document).ready(function(){

	var parentDiv = $("#main");
	$('body').css({
		"margin": "0px"
	});
	
	$('body').css({
		"background-color": "#EBEBEB"
	});
	
	var controlsDiv;
	(function createControlDiv(){
		controlsDiv = $("<div/>",{
			id : "controlsDiv"
		}).appendTo(parentDiv);
		
		controlsDiv.css({
			
			"background-color":"whiteSmoke",
			"padding-top" : "10px",
			"padding-bottom" : "10px",
			"border-top" : "1px solid #E5E5E5",
			"border-bottom" : "1px solid #E5E5E5",
			"min-height" : "22px"
			
		});
		controlsDiv.parent = parentDiv;
	})();
	
	var contentContainerDiv ;
	(function createContentDiv(){
		contentContainerDiv = $("<div/>",{
			id : "contentContainerDiv"
		}).appendTo(parentDiv);
		contentContainerDiv.css({
			"padding-top" : "10px",
			"padding-bottom" : "10px",
			"min-height" : "100px",
			"text-align" : "center"	
		});
		
	})();
	
	var contentDiv;
	(function(){
		contentDiv=$("<div/>",{
			id : "contentDiv"
		}).appendTo(contentContainerDiv);
		
		contentDiv.css({
			"background-color" : "white",
			"width" : "818px",
			"height" : "100%",
			"margin" : "auto",
			"border" : "1px solid #DADADA",
			"-moz-box-shadow" : "0 0 4px rgba(0, 0, 0, 0.1)",
   			"-webkit-box-shadow" : "0 0 4px rgba(0, 0, 0, 0.1)",
   			"box-shadow" :  "0 0 4px rgba(0, 0, 0, 0.1)"  //TODO Adjust for IE
   			
		});
		
	})();
	
	contentDiv.parent = parentDiv;
	
	var enabledPlugins = [new TextColor()];
	(function createControls( controlsDiv ){
		$.each(enabledPlugins , function(index, plugin){
			 controlsDiv.append(plugin.getElement());
		});
	})//(controlsDiv);
	
});
