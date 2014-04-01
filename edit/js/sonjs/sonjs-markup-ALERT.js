SONJS.markdown.ALERT = function(contents){
	contents = contents.replace(/\[alert\](.*)\[alert\]/gm, "<div class=\"box-alert\">$1</div>");
	return contents;
}