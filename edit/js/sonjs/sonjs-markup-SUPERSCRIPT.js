SONJS.markdown.SUPERSCRIPT = function(contents){
	contents = contents.replace(/\[sb\](.*)\[sb\]/gm, "<sub>$1</sub>");
	return contents;
}