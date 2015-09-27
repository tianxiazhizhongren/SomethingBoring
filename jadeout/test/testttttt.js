function JADE_OUT(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (JSON, Math, Session, bg, data, dwT, title) {
buf.push("<!DOCTYPE html><html><head><meta name=\"viewport\" content=\"width=device-width,,maximum-scale=1.0, initial-scale=1\"><meta http-equiv=\"cache-control\" content=\"no-cache, must-revalidate\"><meta http-equiv=\"Pragma\" content=\"no-cache\"><meta http-equiv=\"Expires\" content=\"0\"><title>" + (jade.escape(null == (jade_interp = title ? (title+' -玩聚北京') : 'Combo玩聚北京') ? "" : jade_interp)) + "</title><link rel=\"stylesheet\" href=\"http://combo.qiniudn.com/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
var colorChange='#FE616F'
if( typeof Session !='undefined' && Session.colorType) colorChange='#'+Session.colorType
buf.push("<style>.colorChange , .checknum-input , .checknum-submit , .ticket-checked-btn , .to-pay {\nbackground:" + (jade.escape((jade_interp = colorChange) == null ? '' : jade_interp)) + "\n}\n.dw_color{color:" + (jade.escape((jade_interp = colorChange) == null ? '' : jade_interp)) + "}</style><script src=\"http://cdn.staticfile.org/jquery/2.1.1/jquery.min.js\"></script><script src=\"/javascripts/dwlib.js\"></script></head><body><ul" + (jade.attr("sum", data.sum, true, true)) + (jade.attr("size", data.size, true, true)) + ">");
var d=data.list,len=d.length
bg=['ff5968','ffae40','91d184','4dd4c8','6db8fc','5082e5','7a71ce','F378AE']
for(var i=0;i<len;i++)
{
var color = bg[i%8]
var picture= d[i].picture
var width = d[i].type===1 ? '320' : '640';
picture = picture ? picture+'?imageView2/2/w/'+width+'/format/JPG' : 'http://combo.qiniudn.com/touM.gif';
buf.push("<li" + (jade.attr("style", 'background: #' + (color) + '', true, true)) + "><a" + (jade.attr("href", '/list/detail/' + (d[i].id) + '?color=' + (color) + '', true, true)) + " onclick=\"_detail(this)\">");
if(d[i].type===2)//-局
{
buf.push("<div" + (jade.attr("style", "background:#" + (color) + "", true, true)) + " class=\"new-index-li-of\"><h2>" + (jade.escape((jade_interp = d[i].name) == null ? '' : jade_interp)) + "</h2><div" + (jade.attr("style", "background-image:url(" + (picture) + ")", true, true)) + " class=\"dw_type2_bg\"></div></div>");
}
else if(d[i].type===1)//-活动
{
buf.push("<div class=\"new-index-li-ac\"><div" + (jade.attr("style", "background-image:url(" + (picture) + ")", true, true)) + " class=\"dw_type1_bg\"></div><div class=\"li-ac-r\"><div" + (jade.attr("style", "background:#" + (color) + "", true, true)) + " class=\"li-ac-r-up\"><div class=\"li-ac-r-upY\">" + (jade.escape((jade_interp = dwT.getYear(d[i].beginDate)) == null ? '' : jade_interp)) + "</div>" + (jade.escape((jade_interp = dwT.getMon(d[i].beginDate)) == null ? '' : jade_interp)) + "." + (jade.escape((jade_interp = dwT.getDay(d[i].beginDate)) == null ? '' : jade_interp)) + "</div><div class=\"li-ac-r-down\">" + (jade.escape((jade_interp = d[i].name) == null ? '' : jade_interp)) + "</div></div><div class=\"clear\"></div></div>");
}
buf.push("<div class=\"new-index-li-mid\"><p>" + (jade.escape((jade_interp = dwT.ellipsis(d[i].theme,60)) == null ? '' : jade_interp)) + "</p><div class=\"bureau-top-bot\">");
if(d[i].mark)
{
var dataShow=JSON.parse(d[i].mark)
buf.push("<div class=\"data-show\">");
for(var t in dataShow)
{
buf.push("<div class=\"data-show-li\"><span>" + (jade.escape((jade_interp = t) == null ? '' : jade_interp)) + "</span>");
var dataS=dataShow[t]*10
buf.push("<div class=\"datas\"><div" + (jade.attr("style", "width:" + (dataS) + "%;", true, true)) + " class=\"datas_process\"></div></div></div>");
}
buf.push("</div>");
}
buf.push("</div></div><div class=\"new-index-li-down\">");
var tic=d[i].tickets,ticlen=tic.length,nu=Math.floor(ticlen/2),nm=Math.ceil(ticlen/2)-1
for(var k=0;k<nu*2;k++)
{
buf.push("<div class=\"li-down-l\"><h2> <span style=\"font-weight: normal;\">￥</span>" + (jade.escape((jade_interp = tic[k].price) == null ? '' : jade_interp)) + "</h2><p>原价：￥" + (jade.escape((jade_interp = tic[k].oldPrice) == null ? '' : jade_interp)) + "</p><p> " + (jade.escape((jade_interp = tic[k].sessionDesc) == null ? '' : jade_interp)) + "</p></div>");
}
if(ticlen-nu*2!=0)
{
buf.push("<div style=\"width:100%\" class=\"li-down-l\"><h2 style=\"padding-top:15px;\">￥" + (jade.escape((jade_interp = tic[ticlen-1].price) == null ? '' : jade_interp)) + "</h2><p style=\"padding-top:5px;\">原价：￥" + (jade.escape((jade_interp = tic[ticlen-1].oldPrice) == null ? '' : jade_interp)) + " &nbsp;&nbsp;" + (jade.escape((jade_interp = tic[ticlen-1].sessionDesc) == null ? '' : jade_interp)) + " </p></div>");
}
for(var l=1;l<=nu;l++)
{
buf.push("<div" + (jade.attr("style", 'left:50%;top:' + ((l-1)*79) + 'px', true, true)) + " class=\"down-upline\"></div>");
}
buf.push("</div></a></li>");
}
buf.push("</ul><script>if(location.host ==='wechat.ycombo.com'){\n  (function(i,s,o,g,r,a,m){\n    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n  ga('create', 'UA-54648842-4', 'auto');\n  ga('send', 'pageview');\n  console.log(location.host);\n}\n  var dw_ua = window.navigator.userAgent;\n  if(dw_ua.indexOf('iPhone')!== -1  && dw_ua.indexOf(\"MicroMessenger\")!== -1){\n    dw_ua=$('body');\n    dw_ua=dw_ua.height();//iphone 微信bug\n    $(\"<span></span>\").appendTo(\"body\");\n    console.log('iPhone Wechat hack');\n  }</script></body></html>");}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"Session" in locals_for_with?locals_for_with.Session:typeof Session!=="undefined"?Session:undefined,"bg" in locals_for_with?locals_for_with.bg:typeof bg!=="undefined"?bg:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"dwT" in locals_for_with?locals_for_with.dwT:typeof dwT!=="undefined"?dwT:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
}