
var SONJS = (function(){
	var SONJS = {};
	SONJS.markdown = {};

	SONJS.markdown = function(contents){
		contents = SONJS.markdown.H1( contents );
		contents = SONJS.markdown.HR( contents );
		contents = contents.replace(/(^\s*)|(\s*$)/g, "" ).replace(/\n/ig, "<br>");
		contents = SONJS.markdown.FONT( contents );
		contents = SONJS.markdown.FONTSIZE( contents );
		contents = SONJS.markdown.FONTSTYLE( contents );
		contents = SONJS.markdown.ALIGN( contents );
		contents = SONJS.markdown.BOLD( contents );
		contents = SONJS.markdown.ITALIC( contents );
		contents = SONJS.markdown.DEL( contents );
		contents = SONJS.markdown.UNDERLINING( contents );
		contents = SONJS.markdown.SUPERSCRIPT( contents );
		contents = SONJS.markdown.SUBERSCRIPT( contents );

        contents = SONJS.markdown.LAYOUT( contents );
		contents = SONJS.markdown.FIELD( contents );
		contents = SONJS.markdown.ALERT( contents );
		contents = SONJS.markdown.INFO( contents );
		contents = SONJS.markdown.LINK( contents );
		contents = SONJS.markdown.TABLE( contents );
		contents = SONJS.markdown.ORDERLIST( contents );
        contents = SONJS.markdown.UNORDERLIST( contents );
		return contents;
	};
	
	
	SONJS.append = function(){
		loadJQuery("js/sonjs/module/sonjs-markup-FONT.js");
		loadJQuery("js/sonjs/module/sonjs-markup-ALIGN.js");
		loadJQuery("js/sonjs/module/sonjs-markup-BOLD.js");
		loadJQuery("js/sonjs/module/sonjs-markup-ITALIC.js");
		loadJQuery("js/sonjs/module/sonjs-markup-DEL.js");
		loadJQuery("js/sonjs/module/sonjs-markup-UNDERLINING.js");
		loadJQuery("js/sonjs/module/sonjs-markup-SUPERSCRIPT.js");
		loadJQuery("js/sonjs/module/sonjs-markup-SUBERSCRIPT.js");
		loadJQuery("js/sonjs/module/sonjs-markup-H1.js");
		loadJQuery("js/sonjs/module/sonjs-markup-HR.js");
		loadJQuery("js/sonjs/module/sonjs-markup-FIELD.js");
		loadJQuery("js/sonjs/module/sonjs-markup-ALERT.js");
		loadJQuery("js/sonjs/module/sonjs-markup-INFO.js");
		loadJQuery("js/sonjs/module/sonjs-markup-LINK.js");
        loadJQuery("js/sonjs/module/sonjs-markup-TABLE.js");
        loadJQuery("js/sonjs/module/sonjs-markup-ORDERLIST.js");
        loadJQuery("js/sonjs/module/sonjs-markup-LAYOUT.js");
	};
	SONJS.append();
	
	return SONJS;
})();

function loadJQuery(src) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = src;	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}