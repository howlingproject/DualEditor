SONJS.markdown.LINK = function(contents){
	contents = contents.replace(/\[([\w\s\d]+)\]\((.*)\)/igm, "<a href=\"$2\">$1</a>");
	return contents;
}