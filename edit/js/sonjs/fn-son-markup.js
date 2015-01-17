/*** Editor Script Wrapper ***/
var oScripts=document.getElementsByTagName("script");
var sEditorPath;
for(var i=0;i<oScripts.length;i++)
{
    var sSrc=oScripts[i].src.toLowerCase();
    if(sSrc.indexOf("fn-son-markup.js")!=-1) sEditorPath=oScripts[i].src.replace(/fn-son-markup.js/,"");
}

document.write("<scr"+"ipt src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></scr"+"ipt>");
document.write("<scr"+"ipt src='http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js'></scr"+"ipt>");
document.write("<scr"+"ipt src='http://code.jquery.com/jquery-migrate-1.2.1.js'></scr"+"ipt>");
document.write("<li"+"nk rel='stylesheet' href='http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' type='text/css' />");
document.write("<li"+"nk rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css' type='text/css' />");
document.write("<link href='" + sEditorPath.replace("js/sonjs/","") + "css/sonjs.css' rel='stylesheet' type='text/css' />");

document.write("<scr" + "ipt src='" + sEditorPath + "util/fn-editor-util.js' type='text/javascript'></scr" + "ipt>");
document.write("<scr" + "ipt src='" + sEditorPath + "util/fn-editor-layer.js' type='text/javascript'></scr" + "ipt>");
document.write("<scr" + "ipt src='" + sEditorPath + "util/fn-block-range.js' type='text/javascript'></scr" + "ipt>");
document.write("<scr" + "ipt src='" + sEditorPath + "util/fn-editor.js' type='text/javascript'></scr" + "ipt>");

var SONJS = (function(){
	var SONJS = {};
	SONJS.markup = {};

	SONJS.markup = function(contents){
		contents = SONJS.markup.H1( contents );
		contents = SONJS.markup.HR( contents );
		contents = contents.replace(/(^\s*)|(\s*$)/g, "" ).replace(/\n/ig, "<br>");
		contents = SONJS.markup.FONT( contents );
		contents = SONJS.markup.FONTSIZE( contents );
		contents = SONJS.markup.FONTSTYLE( contents );
		contents = SONJS.markup.ALIGN( contents );
		contents = SONJS.markup.BOLD( contents );
		contents = SONJS.markup.ITALIC( contents );
		contents = SONJS.markup.DEL( contents );
		contents = SONJS.markup.UNDERLINING( contents );
		contents = SONJS.markup.SUPERSCRIPT( contents );
		contents = SONJS.markup.SUBERSCRIPT( contents );

        contents = SONJS.markup.LAYOUT( contents );
		contents = SONJS.markup.FIELD( contents );
		contents = SONJS.markup.ALERT( contents );
		contents = SONJS.markup.INFO( contents );
		contents = SONJS.markup.LINK( contents );
		contents = SONJS.markup.TABLE( contents );
		contents = SONJS.markup.ORDERLIST( contents );
        contents = SONJS.markup.UNORDERLIST( contents );
		return contents;
	};


    SONJS.append = function(src){
        loadJQuery(src+"module/sonjs-markup-FONT.js");
        loadJQuery(src+"module/sonjs-markup-ALIGN.js");
        loadJQuery(src+"module/sonjs-markup-BOLD.js");
        loadJQuery(src+"module/sonjs-markup-ITALIC.js");
        loadJQuery(src+"module/sonjs-markup-DEL.js");
        loadJQuery(src+"module/sonjs-markup-UNDERLINING.js");
        loadJQuery(src+"module/sonjs-markup-SUPERSCRIPT.js");
        loadJQuery(src+"module/sonjs-markup-SUBERSCRIPT.js");
        loadJQuery(src+"module/sonjs-markup-H1.js");
        loadJQuery(src+"module/sonjs-markup-HR.js");
        loadJQuery(src+"module/sonjs-markup-FIELD.js");
        loadJQuery(src+"module/sonjs-markup-ALERT.js");
        loadJQuery(src+"module/sonjs-markup-INFO.js");
        loadJQuery(src+"module/sonjs-markup-LINK.js");
        loadJQuery(src+"module/sonjs-markup-TABLE.js");
        loadJQuery(src+"module/sonjs-markup-ORDERLIST.js");
        loadJQuery(src+"module/sonjs-markup-LAYOUT.js");

    };


    SONJS.setting = function(tarket,type){
        SONJS.append(sEditorPath);
        if( type == "mini"){
        	tarket.append(getMarkupEditMiniHtml());
        }else{
        	tarket.append(getMarkupEditHtml());	
        }
        

        //스크룰링 싱크
        var $divs = $('#wikiEditor, #wikimaincol');
        var sync = function(e){
            var $other = $divs.not(this).off('scroll'), other = $other.get(0);
            var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
            other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
            setTimeout( function(){ $other.on('scroll', sync ); },10);
        }
        $divs.on( 'scroll', sync);

        //prettyPrint();
        $("#wikiEditor").append("마크업 테스트\r\n***\r\n**굵게**\r\n__굵게__\r\n*기울임*\r\n_기울임_\r\n//밑줄//\r\n[d]취소선[d]\r\n[field|필드셋 타이틀]필드셋[field]\r\n[alert]경고[alert]\r\n[info]안내[info]\r\n[sp]아래첨자[sp]\r\n[sb]위첨자[sb]\r\n\r\n||셀제목1||셀제목2||셀제목3||셀제목4||\r\n|컬럼1|컬럼2|컬럼1|컬럼2|\r\n|컬럼3|컬럼4|컬럼3|컬럼4| \r\n\r\n[layout1] [field|필드셋 타이틀]필드셋[field] [layout1]\n[layout2] [alert]경고[alert] [layout2]\n[layout3] [info]안내[info] [layout3]\n[layout4] [info]4444[info] [layout4]\n[layout5] paddig5 [layout5]\n[layout1] paddig2-1 [layout1][layout2] paddig2-2 [layout2]");
        var editor = document.getElementById("wikiEditor");		// [object HTMLTextAreaElement]

        // 각 에디터 버튼 클릭시 액션 처리
        $(".sonDualEditor #btnToolbar .btn-group .btn-sm").each(function(){
            $(this).on("click", function() {
                var $me = $(this);
                var data = $me.data();
                // 에디터 액션 처리
                $.editorAction(editor, $me, data);
            });
        });

        // 각 에디터 버튼 클릭시 액션 처리
        $(".sonDualEditor #btnToolbar .btn-group .dropdown-menu a").each(function(){
            $(this).on("click", function() {
                var $me = $(this);
                var data = $me.data();
                // 에디터 액션 처리
                $.editorAction(editor, $me, data);
            });
        });

        setInterval(function() {
            $("#wikimaincol").text("");
            var txt = SONJS.markup( $("#wikiEditor").val() );
            $("#wikimaincol").append( txt );
        }, 1000);
    };
	
	return SONJS;
})();

function loadJQuery(src) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = src;	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}

function getMarkupEditHtml(){
	return "<table class=\"sonDualEditor\" >             <thead>             <tr>                 <th colspan=\"2\">                     <div class=\"btn-toolbar\" id=\"btnToolbar\">                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-font\"></i><span class=\"caret\"></span></button>                             <ul class=\"dropdown-menu\" role=\"menu\">                                 <li>                                     <a data-mode=\"font\" data-before=\"[font|돋움]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family:'돋움', dotum;\" unselectable=\"on\">돋움</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\" data-before=\"[font|굴림]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family:'굴림', gulim;\" unselectable=\"on\">굴림</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|궁서]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family:'궁서', gungsuh;\" unselectable=\"on\">궁서</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|바탕]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family:'바탕', batang;\" unselectable=\"on\">바탕</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Arial]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: Arial; -webkit-user-select: none; \" unselectable=\"on\">Arial</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Comic Sans MS]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: 'Comic Sans MS'; -webkit-user-select: none; \" unselectable=\"on\">Comic Sans MS</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Courier New]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: 'Courier New'; -webkit-user-select: none; \" unselectable=\"on\">Courier New</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Georgia]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: Georgia; -webkit-user-select: none; \" unselectable=\"on\">Georgia</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Tahoma]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: Tahoma; -webkit-user-select: none; \" unselectable=\"on\">Tahoma</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\"data-before=\"[font|Verdana]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">                                         <span style=\"font-family: Verdana; -webkit-user-select: none; \" unselectable=\"on\">Verdana</span>                                     </a>                                 </li>                             </ul>                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-text-height\"></i><span class=\"caret\"></span></button>                             <ul class=\"dropdown-menu\" role=\"menu\">                                 <li>                                     <a data-mode=\"font\" data-before=\"[size|11]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">                                         <span style=\"font-size:11px;\" unselectable=\"on\">11px</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\" data-before=\"[size|12]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">                                         <span style=\"font-size:12px;\" unselectable=\"on\">12px</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\" data-before=\"[size|14]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">                                         <span style=\"font-size:14px;\" unselectable=\"on\">14px</span>                                     </a>                                 </li>                                 <li>                                     <a data-mode=\"font\" data-before=\"[size|18]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">                                         <span style=\"font-size:18px;\" unselectable=\"on\">18px</span>                                     </a>                                 </li>                             </ul>                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-header\"></i><span class=\"caret\"></span></button>                             <ul class=\"dropdown-menu\" role=\"menu\">                                 <li>                                     <a data-mode=\"font\" data-before=\"# \" data-center=\"\"  data-after=\"\" unselectable=\"on\">                                         <span style=\"font-size:18px;\" unselectable=\"on\"><h1>h1. 큰 헤드라인</h1></span>                                     </a>                                     <a data-mode=\"font\" data-before=\"## \" data-center=\"\"  data-after=\"\" unselectable=\"on\">                                         <span style=\"font-size:14px;\" unselectable=\"on\"><h2>h2. 중간 헤드라인</h2></span>                                     </a>                                     <a data-mode=\"font\" data-before=\"### \" data-center=\"\"  data-after=\"\" unselectable=\"on\">                                         <span style=\"font-size:12px;\" unselectable=\"on\"><h3>h3. 작은 헤드라인</h3></span>                                     </a>                                 </li>                             </ul>                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" data-mode=\"color\" data-before=\"color\" data-center=\" \" data-after=\"color\"><i class=\"fa fa-barcode\"></i><span class=\"caret\"></span></button>                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"**\" data-center=\" \" data-after=\"**\"><i class=\"fa fa-bold\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"_\" data-center=\" \" data-after=\"_\"><i class=\"fa fa-italic\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"//\" data-center=\" \" data-after=\"//\"><i class=\"fa fa-underline\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[d]\" data-center=\" \" data-after=\"[d]\"><i class=\"fa fa-strikethrough\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[sb]\" data-center=\" \" data-after=\"[sb]\"><i class=\"fa fa-subscript\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[sp]\" data-center=\" \" data-after=\"[sp]\"><i class=\"fa fa-superscript\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[align:left]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-left\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[align:center]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-center\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[align:right]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-right\"></i></button>                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"insert\" data-before=\"***\" data-center=\"\" data-after=\"\"><i class=\"glyphicon glyphicon-minus\"></i></button>                         </div>                         <div class=\"btn-group\">                         </div>                         <div class=\"btn-group\">                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"* \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ul\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"1. \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ol\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[syntax]\" data-center=\"\"  data-after=\"[syntax]\"><i class=\"fa fa-code\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#tableModal\" data-mode=\"layer\" data-type=\"table\"><i class=\"fa fa-table\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[field|타이틀]\" data-center=\"\"  data-after=\"[field]\"><i class=\"fa fa-credit-card\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#urlModal\" data-mode=\"layer\" data-type=\"url\" ><i class=\"fa fa-link\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#imgModal\" data-mode=\"layer\" data-type=\"img\" ><i class=\"fa fa-file-image-o\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[alert]\" data-center=\" \" data-after=\"[alert]\"><i class=\"fa fa-exclamation-triangle\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\"  data-before=\"[info]\"  data-center=\" \"  data-after=\"[info]\"><i class=\"fa fa-info\"></i></button>                             <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" ><i class=\"fa fa-lightbulb-o\"></i></button>                         </div>                     </div>                 </th>             </tr>             </thead>             <tbody>             <tr>                 <td style=\"width: 50%; padding-top: 0px;padding-left: 0px;\">                     <textarea class=\"sonjs form-control\" rows=\"20\" id=\"wikiEditor\" name=\"we_wiki_text\" style=\"overflow: scroll; height: 900px;\"></textarea>                 </td>                 <td style=\"width: 50%; padding-top: 10px;padding-left: 10px;\">                     <div id=\"wikimaincol\" style=\"border: 1px; overflow: scroll; height: 900px;\">                     </div>                 </td>             </tr>             </tbody>         </table>";
}

function getMarkupEditMiniHtml(){
	//return " <table class=\"sonDualEditor\" >       <thead>       <tr>     <th colspan=\"2\">   <div class=\"btn-toolbar\" id=\"btnToolbar\">       <div class=\"btn-group\">     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-font\"></i><span class=\"caret\"></span></button>     <ul class=\"dropdown-menu\" role=\"menu\">         <li>       <a data-mode=\"font\" data-before=\"[font|돋움]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family:'돋움', dotum;\" unselectable=\"on\">돋움</span>       </a>         </li>         <li>       <a data-mode=\"font\" data-before=\"[font|굴림]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family:'굴림', gulim;\" unselectable=\"on\">굴림</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|궁서]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family:'궁서', gungsuh;\" unselectable=\"on\">궁서</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|바탕]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family:'바탕', batang;\" unselectable=\"on\">바탕</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Arial]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: Arial; -webkit-user-select: none; \" unselectable=\"on\">Arial</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Comic Sans MS]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: 'Comic Sans MS'; -webkit-user-select: none; \" unselectable=\"on\">Comic Sans MS</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Courier New]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: 'Courier New'; -webkit-user-select: none; \" unselectable=\"on\">Courier New</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Georgia]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: Georgia; -webkit-user-select: none; \" unselectable=\"on\">Georgia</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Tahoma]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: Tahoma; -webkit-user-select: none; \" unselectable=\"on\">Tahoma</span>       </a>         </li>         <li>       <a data-mode=\"font\"data-before=\"[font|Verdana]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\">           <span style=\"font-family: Verdana; -webkit-user-select: none; \" unselectable=\"on\">Verdana</span>       </a>         </li>     </ul>       </div>       <div class=\"btn-group\">     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-text-height\"></i><span class=\"caret\"></span></button>     <ul class=\"dropdown-menu\" role=\"menu\">         <li>       <a data-mode=\"font\" data-before=\"[size|11]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">           <span style=\"font-size:11px;\" unselectable=\"on\">11px</span>       </a>         </li>         <li>       <a data-mode=\"font\" data-before=\"[size|12]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">           <span style=\"font-size:12px;\" unselectable=\"on\">12px</span>       </a>         </li>         <li>       <a data-mode=\"font\" data-before=\"[size|14]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">           <span style=\"font-size:14px;\" unselectable=\"on\">14px</span>       </a>         </li>         <li>       <a data-mode=\"font\" data-before=\"[size|18]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\">           <span style=\"font-size:18px;\" unselectable=\"on\">18px</span>       </a>         </li>     </ul>       </div>       <div class=\"btn-group\">     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-header\"></i><span class=\"caret\"></span></button>     <ul class=\"dropdown-menu\" role=\"menu\">         <li>       <a data-mode=\"font\" data-before=\"# \" data-center=\"\"  data-after=\"\" unselectable=\"on\">           <span style=\"font-size:18px;\" unselectable=\"on\"><h1>h1. 큰 헤드라인</h1></span>       </a>       <a data-mode=\"font\" data-before=\"## \" data-center=\"\"  data-after=\"\" unselectable=\"on\">           <span style=\"font-size:14px;\" unselectable=\"on\"><h2>h2. 중간 헤드라인</h2></span>       </a>       <a data-mode=\"font\" data-before=\"### \" data-center=\"\"  data-after=\"\" unselectable=\"on\">           <span style=\"font-size:12px;\" unselectable=\"on\"><h3>h3. 작은 헤드라인</h3></span>       </a>         </li>     </ul>       </div>       <div class=\"btn-group\">     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"**\" data-center=\" \" data-after=\"**\"><i class=\"fa fa-bold\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"_\" data-center=\" \" data-after=\"_\"><i class=\"fa fa-italic\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"//\" data-center=\" \" data-after=\"//\"><i class=\"fa fa-underline\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[d]\" data-center=\" \" data-after=\"[d]\"><i class=\"fa fa-strikethrough\"></i></button>       </div>       <div class=\"btn-group\">     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"* \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ul\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"1. \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ol\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-mode=\"append\" data-before=\"[syntax]\" data-center=\"\"  data-after=\"[syntax]\"><i class=\"fa fa-code\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#tableModal\" data-mode=\"layer\" data-type=\"table\"><i class=\"fa fa-table\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#urlModal\" data-mode=\"layer\" data-type=\"url\" ><i class=\"fa fa-link\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#imgModal\" data-mode=\"layer\" data-type=\"img\" ><i class=\"fa fa-file-image-o\"></i></button>     <button type=\"button\" class=\"sonwiki-btn btn btn-default btn-sm\" ><i class=\"fa fa-lightbulb-o\"></i></button>       </div>   </div>     </th>       </tr>       </thead>       <tbody>       <tr>   <td >   	<textarea class=\"sonjs form-control\" rows=\"5\" id=\"wikiEditor\" name=\"we_wiki_text\"></textarea>   	<div id=\"wikimaincol\" style=\"border: 1px; overflow: scroll; height: 900px; display:none; \"/>   </td>       </tr>       </tbody>   </table>";
}

