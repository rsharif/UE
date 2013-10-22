function BaseButton(command){
	
	var div = $("<div/>");
	
	div.hover(function onMouseEnter(){
		div.css("box-shadow","0px 0px 2px rgba(0,0,0,0.5)");
	}, function onMouseLeave(){
		div.css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
	});
	
	div.click(function(){
		var frame = utils.getFrameDocument();
		frame.execCommand(command,false,null);	
	});
	
	this.getElement = function(){
		return div;
	};
}
 
 var Italic = function(){
 	BaseButton.call(this,'italic');
	div = this.getElement();
	div.attr("id","italic");
	div.addClass("italic");	
};

var Bold = function(){
	BaseButton.call(this,'bold');
	div = this.getElement();
	div.attr("id","bold");
	div.addClass("bold");
};


var Underline = function(){
	BaseButton.call(this,'underline');
	div = this.getElement();
	div.attr("id","underline");
	div.addClass("underline");
};

var FontSize = function(){

	
};

var TextColor = function (id){
	
	BaseButton.call(this);
	var element =this.getElement();
	element.attr("id",id);
	element.addClass("colorControl");
	
	var pointer = $("<div/>",{
	}).appendTo(element);
	
	pointer.addClass("pointer");
	
	var colorPicker;
	function colorSelectionCallback(){
		var frame = utils.getFrameDocument();
		frame.execCommand('forecolor',false,getSelectedColor());
	}
	
	function clickHandler(event){
		event.stopPropagation();
		colorPicker = new ColorPicker(element , colorSelectionCallback);
	}
	
	 function getSelectedColor(){
	 	console.log(colorPicker.getSelectedColor());
		return colorPicker.getSelectedColor();
	}
	
	//Do not need parent handler
	element.unbind('click');
	element.bind('click',clickHandler); 
	
	this.getSelectedColor = getSelectedColor;
	
};