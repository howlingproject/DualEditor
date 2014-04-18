SONJS.markdown.H1 = function(contents){
	contents = contents.replace(/\*{2}([\w\W]+?)\*{2}/gm, "<B>$1</B>");
	return contents;
}