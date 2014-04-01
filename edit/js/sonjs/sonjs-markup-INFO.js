SONJS.markdown.INFO = function(contents){
	contents = contents.replace(/\[info\](.*)\[info\]/gm, "<div class=\"box-check\">$1</div>");
	return contents;
}