function load(){
	
	var ua = $.browser;
	
	$(".contentContainer").keypress(function(event){
		
		/* find cursor position */
		var selection=window.getSelection();
		var range=selection.getRangeAt(0);
		var start = range.startOffset;
		var end = range.endOffset;
		
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
			for(var i = 0 ; i < noOfBr ; i++){
				if(i >= noOfBr -1 && !(ua.mozilla && noOfBr == 1 )){ //mozilla only inserts one br on first entery key which we need to keep
					 $(brTags[i]).remove();
				}
			}
			
			$(selection.anchorNode).append(textNode);
			selection.removeAllRanges();
			/* create new Range and set it in the newly created text ndoe just after the character typed */
			var newRange = document.createRange();
			newRange.setStart(textNode,1);
			newRange.setEnd(textNode,1);
			selection.addRange(newRange);
			
		}
		else 
		{
			/* Get the current text inside the pseudo textarea */
			var originalText = selection.anchorNode.nodeValue 	;
			/* Get text before the cursor */
			var firstHalf = originalText && originalText.slice(0,start);
			firstHalf = (firstHalf === null ) ? "" : firstHalf;
			/* Get Text after the cursor */
			var secondHalf = originalText && originalText.slice(start);
			secondHalf = (secondHalf === null ) ? "" : secondHalf;
			
			var newStr = firstHalf + urduCharacter + secondHalf;
			
			selection.anchorNode.nodeValue = newStr;
			
			var newRange = document.createRange();
			newRange.setStart(selection.anchorNode, start +1);
			range.setEnd(selection.anchorNode, end+1);
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