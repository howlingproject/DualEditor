DualEditor.markup.BOLD = function(contents){
    contents = contents.replace(/\*{2}([\w\W]+?)\*{2}/gm, "<strong>$1</strong>");
    contents = contents.replace(/\_{2}([\w\W]+?)\_{2}/gm, "<strong>$1</strong>");
    return contents;
}

DualEditor.markup.ITALIC = function(contents){
    contents = contents.replace(/\*([\w\W]+?)\*/gm, "<em>$1</em>");
    contents = contents.replace(/\_([\w\W]+?)\_/gm, "<em>$1</em>");
    return contents;
}

DualEditor.markup.UNDERLINING = function(contents){
    contents = contents.replace(/([^http:])\/{2}([\w\W]+?)\/{2}/igm, "$1<U>$2</U>");
    return contents;
}

DualEditor.markup.DEL = function(contents){
    contents = contents.replace(/\[d\]([\w\W]+?)\[d\]/gm, "<span style=\"text-decoration:line-through;\">$1</span>");
    return contents;
}

DualEditor.markup.SUBERSCRIPT = function(contents){
    contents = contents.replace(/\[sp\]([\w\W]+?)\[sp\]/gm, "<sup>$1</sup>");
    return contents;
}

DualEditor.markup.SUPERSCRIPT = function(contents){
    contents = contents.replace(/\[sb\]([\w\W]+?)\[sb\]/gm, "<sub>$1</sub>");
    return contents;
}