
(function ($) {
	
	jQuery.BOLD = function(contents){
		contents = contents.replace(/\*{2}(.*)\*{2}/gm, "<B>$1</B>");
		return contents;
	};
	
	jQuery.ITALIC = function(contents){
		contents = contents.replace(/([^http:])\/{2}(.*)\/{2}/igm, "$1<I>$2</I>");
		return contents;
	};
	
	jQuery.UNDERLINING = function(contents){
		contents = contents.replace(/\_{2}(.*)\_{2}/gm, "<U>$1</U>");
		return contents;
	};
	
	jQuery.SUPERSCRIPT = function(contents){
		contents = contents.replace(/\[sb\](.*)\[sb\]/gm, "<sub>$1</sub>");
		return contents;
	};
	
	jQuery.SUBERSCRIPT = function(contents){
		contents = contents.replace(/\[sp\](.*)\[sp\]/gm, "<sup>$1</sup>");
		return contents;
	};
	
	jQuery.H1 = function(contents){
		contents = contents.replace(/(h1.(\s{0,})(.*))/gm, "<h1>$3</h1>");
		contents = contents.replace(/(h2.(\s{0,})(.*))/gm, "<h2>$3</h2>");
		contents = contents.replace(/(h3.(\s{0,})(.*))/gm, "<h3>$3</h3>");
		return contents;
	};

	jQuery.HR = function(contents){
		contents = contents.replace(/\[hr\]/gm, "<hr>");
		return contents;
	};
	
	jQuery.FIELD = function(contents){
		contents = contents.replace(/\[field(\|(.*?))?\](.*)\[field\]/gm, "<fieldset class=\"fieldset\">\r\n<legend class=\"legend\">$2</legend>\n$3\n</fieldset>");
		return contents;
	};
	
	jQuery.ALERT = function(contents){
		contents = contents.replace(/\[alert\](.*)\[alert\]/gm, "<div class=\"box-alert\">$1</div>");
		return contents;
	};
	
	jQuery.INFO = function(contents){
		contents = contents.replace(/\[info\](.*)\[info\]/gm, "<div class=\"box-check\">$1</div>");
		return contents;
	};
	
	
})(jQuery);