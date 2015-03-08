DualEditor.markup.LAYOUT = function(contents){
    console.info(contents);
    var pattern = /^\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]/igm;
    contents = contents.replace(pattern, "<div class=\"row\">\r\n<div class=\"col-md-3\">\r\n$1\r\n</div>\r\n<div class=\"col-md-3\">\r\n$2\r\n</div>\r\n<div class=\"col-md-3\">\r\n$3\r\n</div>\r\n<div class=\"col-md-3\">\r\n$4\r\n</div>\r\n</div>\r\n");
    pattern.compile(/^\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]/igm);
    contents = contents.replace(pattern, "<div class=\"row\">\r\n<div class=\"col-md-4\">\r\n$1\r\n</div>\r\n<div class=\"col-md-4\">\r\n$2\r\n</div>\r\n<div class=\"col-md-4\">\r\n$3\r\n</div>\r\n</div>\r\n");
    pattern.compile(/^\[layout\](.*?)\[layout\]\n\[layout\](.*?)\[layout\]/igm);
    contents = contents.replace(pattern, "<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n$1\r\n</div>\r\n<div class=\"col-md-6\">\r\n$2\r\n</div>\r\n</div>\r\n");
    return contents;
}