SONJS.markdown.BOLD = function(contents){
	contents = contents.replace(/\*{2}(.*)\*{2}/gm, "<B>$1</B>");
	return contents;
}