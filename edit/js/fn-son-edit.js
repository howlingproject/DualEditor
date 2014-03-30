
(function ($) {
	jQuery.SonJS = {};
	
	jQuery.SonJS.markdown = function(text){
		text = text.replace(/(^\s*)|(\s*$)/g, "" ).replace(/\n/ig, "<br>");
		text = $.BOLD( text );
		text = $.ITALIC( text );
		text = $.UNDERLINING( text );
		text = $.SUPERSCRIPT( text );
		text = $.SUBERSCRIPT( text );
		text = $.H1( text );
		text = $.HR( text );
		text = $.FIELD( text );
		text = $.ALERT( text );
		text = $.INFO( text );
		return text;
	};
	
	
})(jQuery);