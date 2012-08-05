var Italic = function(){
	var italicDiv = $("<div/>",{
		id : "italic"
	});

	italicDiv.addClass("italic");
	italicDiv.hover(function onMouseEnter(){
		italicDiv.css("box-shadow","0px 0px 2px rgba(0,0,0,0.50)");
	}, function onMouseLeave(){
		italicDiv.css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
	});
	return {
		"getElement": function(){
			return italicDiv;
		}
	};
};

var Bold = function(){
	var boldDiv = $("<div/>",{
		id : "bold"
	});

	boldDiv.addClass("bold");
	boldDiv.hover(function onMouseEnter(){
		boldDiv.css("box-shadow","0px 0px 2px rgba(0,0,0,0.5)");
	}, function onMouseLeave(){
		boldDiv.css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
	});
	return {
		"getElement": function(){
			return boldDiv;
		}
	};
};

var Underline = function(){
	var underlineDiv = $("<div/>",{
		id : "underline"
	});

	underlineDiv.addClass("underline");
	underlineDiv.hover(function onMouseEnter(){
		underlineDiv.css("box-shadow","0px 0px 2px rgba(0,0,0,0.50)");
	}, function onMouseLeave(){
		underlineDiv.css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
	});
	return {
		"getElement": function(){
			return underlineDiv;
		}
	};
};