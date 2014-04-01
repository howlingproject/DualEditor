SONJS.markdown.ITALIC = function(contents){
	contents = contents.replace(/([^http:])\/{2}(.*)\/{2}/igm, "$1<I>$2</I>");
	return contents;
}