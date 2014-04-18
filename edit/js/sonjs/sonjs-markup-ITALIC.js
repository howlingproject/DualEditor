SONJS.markdown.ITALIC = function(contents){
	contents = contents.replace(/([^http:])\/{2}([\w\W]+?)\/{2}/igm, "$1<em>$2</em>");
	return contents;
}