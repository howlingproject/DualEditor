SONJS.markdown.UNDERLINING = function(contents){
	contents = contents.replace(/\_{2}(.*)\_{2}/gm, "<U>$1</U>");
	return contents;
}