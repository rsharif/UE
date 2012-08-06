function load(){
	
	var ua = $.browser;
	if (ua.mozilla) {
//		var selection=window.getSelection();
//		var contentPage = $("#contengPage");
//		var newRange = document.createRange();
//		newRange.setStart($(contentPage,0);
//		newRange.setEnd(contentPage,0);
//		$("#contentPage").addRange(newRange);
	}
	$(".contentPage").keypress(function(event){
		
		/* find cursor position */
		var selection=window.getSelection();
		var range=selection.getRangeAt(0);
		var start = range.startOffset;
		var end = range.endOffset;
		var anchorNode = selection.anchorNode;
		
		var pressedKeyCode = event.which;
		if(pressedKeyCode < 90 || pressedKeyCode > 124 ){
			//Let browser do the default
			return true;	
		} 
		var urduCharacter = String.fromCharCode(getCode(pressedKeyCode));
		/* If node is not text node , we need to create a text node and insert into the current node (div etc) containing cursor */
		if(selection.anchorNode.nodeType != 3){
			
			var textNode = document.createTextNode(urduCharacter);
			
			/* when enter key is pressed , mozilla inserts two br tags (don't know why) and it does not create a new div where as chrome 
			 * creates a new div and puts on br tag in that div. Anyway we need to remove that one br tag from chrome and one br tag inserted by
			 * mozilla so that only one line break is visible
			 */
			var brTags = $(selection.anchorNode).find("br");
			var noOfBr = brTags.length;
			 //mozilla only inserts one br on first entery key which we need to keep
			if (ua.mozilla) {
				 
				if( $(brTags[ noOfBr -1 ]).attr('type') === '_moz') $(brTags[noOfBr -1]).remove();

				if (start == anchorNode.childNodes.length - 2 || start < 2 || $(brTags[noOfBr - 1]).attr('type') === '_moz') {
				
					$(anchorNode).append(textNode);
					selection.removeAllRanges();
					/* create new Range and set it in the newly created text ndoe just after the character typed */
					var newRange = document.createRange();
					newRange.setStart(textNode, 1);
					newRange.setEnd(textNode, 1);
					selection.removeAllRanges();
					selection.addRange(newRange);
				}
				else {
					/* This block just handles the insertion for first character in a new line which is created by splitting the previous line 
					 * i.e by pressing enter in the line which already contains some text
					 */
					var nextChild = anchorNode.childNodes[start];
					textNode = document.createTextNode(urduCharacter + nextChild.wholeText);
					$($(anchorNode).contents()[start]).remove();
					$($(anchorNode).contents()[start-1]).after(textNode);
					var newRange = document.createRange();
					newRange.setStart(textNode, 1);
					newRange.setEnd(textNode, 1);
					selection.removeAllRanges();
					selection.addRange(newRange);
				}
			}
			/*for mozilla only delete the br tags which has attribute type=_moz.because thats the last br tag. 
			* if you break a typed line from middle , mozilla does not insert any extra br tag so no br tag should be removed
			*/
			if (ua.safari || ua.webkit) {
				$(brTags[noOfBr - 1]).remove();	
				$(anchorNode).append(textNode);
				selection.removeAllRanges();
				/* create new Range and set it in the newly created text ndoe just after the character typed */
				var newRange = document.createRange();
				newRange.setStart(textNode, 1);
				newRange.setEnd(textNode, 1);
				selection.removeAllRanges();
				selection.addRange(newRange);
			}
			
		}
		else 
		{
			/* Get the current text inside the pseudo textarea */
			var originalText = anchorNode.nodeValue 	;
			/* Get text before the cursor */
			var firstHalf = originalText && originalText.slice(0,start);
			firstHalf = (firstHalf === null ) ? "" : firstHalf;
			/* Get Text after the cursor */
			var secondHalf = originalText && originalText.slice(start);
			secondHalf = (secondHalf === null ) ? "" : secondHalf;
			
			var newStr = firstHalf + urduCharacter + secondHalf;
			
			selection.anchorNode.nodeValue = newStr;
			
			var newRange = document.createRange();
			newRange.setStart(anchorNode, start +1);
			range.setEnd(anchorNode, end+1);
			selection.removeAllRanges();
			selection.addRange(newRange);
		}
		return false;
		
	});
		
    function getCode(code){
	   var character = String.fromCharCode(code);
	   return urdu.hasOwnProperty(character) ? urdu[character] : code;
	}

}