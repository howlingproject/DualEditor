(function() 
{
	/**
	 * @description : Editor의 버튼별 Action을 구현한다.  
	 * @param : textEditor( object - textarea ID )
	 * @return :  
	 * @example : 
	 * 
	 * $.editorAction(editor, $me, data);
	 */
    jQuery.editorAction = function(textEditor, $me, data) {
    	$.print("textEditor : " + textEditor);
    	$.print("$me : " + $me);
		$.print("data : " + data);
    	
    	if(data.mode == 'append') {
			// 현재 블럭 위치에 지정된 태그를 감싼다. Textarea, btn-object, btn-data 
			$.appendTag(textEditor, $me, data);
		} else if(data.mode == 'insert') {
			// 현재 커서 위치에 지정된 태그를 추가한다.  
			$.insertTag(textEditor, $me, data);
		} else if(data.mode == 'layer') {
			// 현재 커서 위치에 레이어 입력 태그를 추가한다.  
			if($me.attr("id") == "table") {		// 표 만들기 
				$.tableLayer({
					'textEditor' : textEditor,
					'$me' : $me,
					'data' : data,
				});
			}
			
		} else if(data.mode == 'colorbox') { 
			// 현재 블럭 위치에 선택한 태그를 감싼다. 
			
		} else if(data.mode == 'select') {
			// 현재 블럭 위치에 선택한 태그를 감싼다. 
		}
    };
    
	
})(jQuery);    