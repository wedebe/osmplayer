/**
 *  Copyright (c) 2010 Alethia Inc,
 *  http://www.alethia-inc.com
 *  Developed by Travis Tidwell | travist at alethia-inc.com 
 *
 *  License:  GPL version 3.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.

 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
(function(a){jQuery.media=jQuery.extend({},{utils:{getBaseURL:function(){var b=new RegExp(/^(http[s]?\:[\\\/][\\\/])([^\\\/\?]+)/);var c=b.exec(location.href);return c?c[0]:"";},getSettings:function(b){if(!b){b={};}if(!b.initialized){b=jQuery.extend({},jQuery.media.defaults,b);b.ids=jQuery.extend({},jQuery.media.ids,b.ids);b.baseURL=b.baseURL?b.baseURL:jQuery.media.utils.getBaseURL();b.baseURL+=b.baseURL?"/":"";b.initialized=true;}return b;},getId:function(b){return b.attr("id")?b.attr("id"):b.attr("class")?b.attr("class"):"mediaplayer";},getScaledRect:function(b,e){var d={};d.x=e.x?e.x:0;d.y=e.y?e.y:0;d.width=e.width?e.width:0;d.height=e.height?e.height:0;if(b){var c=(e.width/e.height);d.height=(c>b)?e.height:Math.floor(e.width/b);d.width=(c>b)?Math.floor(e.height*b):e.width;d.x=Math.floor((e.width-d.width)/2);d.y=Math.floor((e.height-d.height)/2);}return d;},getFlash:function(g,b,c,i,d){var j=window.location.protocol;if(j.charAt(j.length-1)==":"){j=j.substring(0,j.length-1);}var f="";for(var h in d){if(d.hasOwnProperty(h)){f+=h+"="+encodeURIComponent(d[h])+"&";}}f=f.replace(/&$/,"");var e='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';e+='codebase="'+j+'://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ';e+='width="'+c+'" ';e+='height="'+i+'" ';e+='id="'+b+'" ';e+='name="'+b+'"> ';e+='<param name="allowScriptAccess" value="always"></param>';e+='<param name="allowfullscreen" value="true" />';e+='<param name="movie" value="'+g+'"></param>';e+='<param name="wmode" value="transparent"></param>';e+='<param name="quality" value="high"></param>';e+='<param name="FlashVars" value="'+f+'"></param>';e+='<embed src="'+g+'" quality="high" width="'+c+'" height="'+i+'" ';e+='id="'+b+'" name="'+b+'" swLiveConnect="true" allowScriptAccess="always" wmode="transparent"';e+='allowfullscreen="true" type="application/x-shockwave-flash" FlashVars="'+f+'" ';e+='pluginspage="'+j+'://www.macromedia.com/go/getflashplayer" />';e+="</object>";return e;},removeFlash:function(c,d){if(typeof(swfobject)!="undefined"){swfobject.removeSWF(d);}else{var b=c.find("object").eq(0)[0];if(b){b.parentNode.removeChild(b);}}},insertFlash:function(g,j,c,d,k,e,i){jQuery.media.utils.removeFlash(g,c);g.children().remove();g.append('<div id="'+c+'"><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p></div>');if(typeof(swfobject)!="undefined"){var f={allowScriptAccess:"always",allowfullscreen:"true",wmode:"transparent",quality:"high"};swfobject.embedSWF(j,c,d,k,"9.0.0","expressInstall.swf",e,f,{},function(l){i(l.ref);});}else{var h=jQuery.media.utils.getFlash(j,c,d,k,e);var b=g.find("#"+c).eq(0);if(jQuery.browser.msie){b[0].outerHTML=h;i(g.find("object").eq(0)[0]);}else{b.replaceWith(h);i(g.find("embed").eq(0)[0]);}}},cloneFix:function(e,d){var b=e.map(function(){var g=this.outerHTML;if(!g){var h=this.ownerDocument.createElement("div");h.appendChild(this.cloneNode(true));g=h.innerHTML;}return jQuery.clean([g.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0];});if(d===true){var f=e.find("*").andSelf(),c=0;b.find("*").andSelf().each(function(){if(this.nodeName!==f[c].nodeName){return;}var g=jQuery.data(f[c],"events");for(var i in g){if(g.hasOwnProperty(i)){for(var h in g[i]){if(g[i].hasOwnProperty(h)){jQuery.event.add(this,i,g[i][h],g[i][h].data);}}}}c++;});}return b;}}},jQuery.media);})(jQuery);