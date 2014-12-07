SONJS.markup.HR = function(contents){
	contents = contents.replace(/^\*\*\*$/igm, "<hr>");
	return contents;
}