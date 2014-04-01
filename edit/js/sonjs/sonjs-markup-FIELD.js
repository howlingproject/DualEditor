SONJS.markdown.FIELD = function(contents){
	contents = contents.replace(/\[field(\|(.*?))?\](.*)\[field\]/gm, "<fieldset class=\"fieldset\">\r\n<legend class=\"legend\">$2</legend>\n$3\n</fieldset>");
	return contents;
}