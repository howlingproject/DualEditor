SONJS.markdown.SUBERSCRIPT = function(contents){
	contents = contents.replace(/\[sp\](.*)\[sp\]/gm, "<sup>$1</sup>");
	return contents;
}