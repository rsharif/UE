var TextColor = function (){
	
	function clickHandler(){
		//TODO give implementation
		console.log("Color Button Clicked");
	}
	
	var element = $("<span/>" , {
		style : "cursor : pointer",
		html : "color",
		id : "color"	
	});
	
	element.click(clickHandler); 
	
	function getElement(){
		return element;
	}
	return { "getElement": getElement };
};
