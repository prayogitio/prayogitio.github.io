function udm_(e,o){var n,c,r,t,i,p="comScore=",a=document,s=a.cookie,f="",d="indexOf",u="substring",m="length",l=2048,_="&ns_",g="&",h=window,w=h.encodeURIComponent||escape;if(s[d](p)+1)for(t=0,r=s.split(";"),i=r[m];i>t;t++)c=r[t][d](p),c+1&&(f=g+unescape(r[t][u](c+p[m])));e+=_+"_t="+ +new Date+_+"c="+(a.characterSet||a.defaultCharset||"")+(h===h.top?"":_+"if=1")+"&cv=3.5m&c8="+w(a.title)+f+"&c7="+w(a.URL)+"&c9="+w(a.referrer),e[m]>l&&e[d](g)>0&&(n=e[u](0,l-8).lastIndexOf(g),e=(e[u](0,n)+_+"cut="+w(e[u](n+1)))[u](0,l)),a.images?(c=new Image,h.ns_p||(ns_p=c),"function"==typeof o&&(c.onload=c.onerror=o),c.src=e):a.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}"undefined"==typeof _comscore&&(_comscore=[]),function(){var e,o="length",n=window,c=n.encodeURIComponent?encodeURIComponent:escape,r=function(e){if(e){var n,r,t,i,p=[],a=0,s="";for(var f in e)r=typeof e[f],"string"!=r&&"number"!=r||(p[p[o]]=f+"="+c(e[f]),"c2"==f?s=e[f]:"c1"==f&&(a=1));if(p[o]<=0||""==s)return;if(i=e.options||{},i.d=i.d||document,"string"==typeof i.url_append){t=i.url_append.replace(/&amp;/,"&").split("&");for(var d,f=0,u=t[o];u>f;f++)d=t[f].split("="),2==d[o]&&(p[p[o]]=d[0]+"="+c(d[1]))}n=["https://sb",".scorecardresearch.com/b?",a?"":"c1=2&",p.join("&").replace(/&$/,"")],udm_(n.join(""))}},t=function(e){e=e||_comscore;for(var n=0,c=e[o];c>n;n++)r(e[n]);e=_comscore=[]};t(),(e=n.COMSCORE)?(e.purge=t,e.beacon=r):COMSCORE={purge:t,beacon:r}}();
(function(){var e=[],t="ns__zoom_svg",n="http://www.w3.org/2000/svg",r="length",i="setAttribute",s=window,o=document,u="parent",a="string",f="inner",l="Height",c="Width",h="number",p=Math,d,v="source",m="position",g="getBoundingClientRect",y="document",b="hasFocus",w=navigator.userAgent,E=/edge\//i.test(w),S=/ applewebkit\//i.test(w)&&!E;if(!s.JSON||!s.postMessage)return;s.addEventListener("message",function(f){try{var h=typeof f.data==a?JSON.parse(f.data):f.data;if(h&&h.mvce){for(var p=0;p<e[r];p++)if(e[p].win===f[v])return;var g=f[v],b=0;S&&(d=o.getElementById(t),d||(d=o.createElementNS(n,"svg"),d[i]("xmlns",n),d[i]("version","1.1"),d[i](l,"0"),d[i](c,"0"),d[i]("id",t),d[i]("style",m+":absolute;top:-9999px;border:0;display:none;"),o.body.appendChild(d)));while(g[u]!=s&&b<5)g=g[u],b++;var w=g[u][y].getElementsByTagName("iframe");for(var p=0;p<w[r];p++)if(w[p].contentWindow==g){el=w[p];break}e.push({win:f[v],el:el})}}catch(f){}}),s.ns_||(ns_={}),ns_.mvce||(ns_.mvce={});if(!ns_.mvce.sGO){var x=function(e,t,n){var r=0,i=0,s,u,a,f,l;try{if(!e)return[0,0];t=t||o,n=n||t.defaultView||t.parentWindow,u=t.body||{},a=t.documentElement;if(e[g]&&e.nodeName!="EMBED")s=e[g](),i=s.left,r=s.top;else{do{f=e.offsetTop||0,l=e.offsetLeft||0,e==u&&(f=p.abs(f),l=p.abs(l)),r+=f,i+=l;if(e.offsetParent==u&&e.style[m]=="absolute")break}while(e=e.offsetParent);!t.querySelectorAll&&typeof u.clientTop===h&&(r+=u.clientTop,i+=u.clientLeft)}}catch(c){return[i,r]}return[i,r]},T=function(e){var t=[c,l],n,i=[],s=p.round,u="client";try{n=e[y].documentElement;for(var a=t[r],d=t[--a];d;d=t[--a])typeof e[f+d]==h?i[a]=s(e[f+d]):n&&n[u+d]?i[a]=s(n[u+d]):i[a]=s(o.body[u+d])}catch(v){return i}return i},N=function(e){try{return e==e.top&&!e.top[y][b]()?!1:!e[y][b]()&&!e.top[y][b]()?N(e[u]):!0}catch(t){return!0}};ns_.mvce.sGO=function(t){for(var n=0;n<e[r];n++){var t=typeof t==a?JSON.parse(t):{},i={gg:!0};if(e[n].el){var o=x(e[n].el),u=T(s);t.ifx=o[0]+s.screenLeft,t.ify=o[1]+s.screenTop,t.w=u[0],t.h=u[1],t.f=N(s),t.z=d?d.currentScale:1,t.iw=s[f+c],t.ih=s[f+l],t.ow=s["outer"+c],i.vi=JSON.stringify(t),i.ver="15",i.host="displayGGiframe",e[n].win&&e[n].win.postMessage(i,"*")}}},ns_.mvce.sGO(),setInterval(ns_.mvce.sGO,200)}})();