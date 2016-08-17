DualEditor.markup.SYNTAX = function(contents){
    function replacer(match, p1, p2, offset, string) {
        p1 = p1.replace(/</gm, "&lt;");
        p2 = p2.replace(/<br>/ig, "");
        return "<pre><code2 class=\"hljs "+p1+"\">"+p2+"</code2></pre>";
    }
    contents = contents.replace(/\[syntax ([\w\W]+?)\]([\w\W]+?)\[syntax\]/gm, replacer);
	return contents;
};