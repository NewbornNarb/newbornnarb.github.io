(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-489a1a28":"6f726368","chunk-eeb78e3a":"ea595aff"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-489a1a28":1,"chunk-eeb78e3a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-489a1a28":"128006b6","chunk-eeb78e3a":"8c3b68be"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-app",{staticClass:"dark"},[n("Navbar"),n("router-view"),n("Footer")],1)],1)},c=[],u=(n("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{dark:"",flat:"",fixed:"",height:"60px"}},[r("v-toolbar-title",[r("v-img",{staticClass:"d-none d-sm-block d-md-block d-lg-block d-xl-block",attrs:{src:n("9b19"),"max-width":"80px","max-height":"50px",contian:""}})],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"ml-3"},[e._l(e.data.links,(function(t,n){return r("v-btn",{key:n+" "+t.title,staticClass:"mx-1",attrs:{to:t.link.includes(".pdf")?null:t.link,href:t.link.includes(".pdf")?t.link:null,target:t.newpage?"_blank":"",dark:"",text:"","active-class":"black"}},[e._v(e._s(t.title))])})),r("v-divider",{staticClass:"mx-4 d-none d-sm-none d-md-block",attrs:{vertical:""}}),e._l(e.data.social,(function(t,n){return r("v-btn",{key:n+" "+t.title,staticClass:"d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex",attrs:{target:t.newpage?"_blank":"",href:t.link,icon:"",dark:"",text:""}},[r("v-icon",[e._v(e._s("mdi-"+t.icon))])],1)}))],2)],1),r("div",{staticStyle:{height:"60px"}})],1)}),d=[],f=n("b760"),p={data:function(){return{drawer:!1,data:f}}},v=p,m=n("2877"),h=n("6544"),b=n.n(h),g=n("40dc"),k=n("8336"),w=n("ce7e"),y=n("132d"),x=n("adda"),_=n("2fa4"),j=n("2a7f"),C=Object(m["a"])(v,u,d,!1,null,null,null),V=C.exports;b()(C,{VAppBar:g["a"],VBtn:k["a"],VDivider:w["a"],VIcon:y["a"],VImg:x["a"],VSpacer:_["a"],VToolbarItems:j["a"],VToolbarTitle:j["b"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-divider",{attrs:{color:"white"}}),n("v-card",{staticClass:"py-5",attrs:{dark:"",flat:"",color:"transparent"}},[n("v-card-text",[n("v-row",[n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Contact")])]),n("v-list-item",[e._v("(587) 585-6581")]),n("v-list-item",[e._v("j.atter66@gmail.com")]),n("v-list-item",[e._v("Resume")])],1)],1)],1),n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Social")])]),n("v-list-item",[e._v("Linkedin")])],1)],1)],1),n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Links")])]),n("v-list-item",[e._v("Renders")]),n("v-list-item",[e._v("Models")]),n("v-list-item",[e._v("ArtStation")])],1)],1)],1)],1)],1),n("center",[n("small",[e._v("Copyright 2020 © Jesse Atter. All rights reserved.")])])],1)],1)},P=[],S=n("b0af"),A=n("99d9"),E=n("62ad"),T=n("a523"),L=n("8860"),N=n("da13"),I=n("1baa"),M=n("0fd9"),R={},$=Object(m["a"])(R,O,P,!1,null,null,null),B=$.exports;b()($,{VCard:S["a"],VCardText:A["c"],VCol:E["a"],VContainer:T["a"],VDivider:w["a"],VList:L["a"],VListItem:N["a"],VListItemGroup:I["a"],VRow:M["a"]});var J={data:function(){return{drawer:!1}},$route:{immediate:!0,handler:function(e,t){document.title="Jesse Atter | "+e.name}},components:{Navbar:V,Footer:B}},D=J,q=(n("034f"),n("7496")),F=n("f6c4"),H=Object(m["a"])(D,l,c,!1,null,null,null),G=H.exports;b()(H,{VApp:q["a"],VMain:F["a"]});n("3ca3"),n("ddb0");var K=n("8c4f");r["a"].use(K["a"]);var U=[{path:"/",name:"Home",component:function(){return n.e("chunk-489a1a28").then(n.bind(null,"bb51"))}},{path:"/renders",name:"Renders",component:function(){return n.e("chunk-eeb78e3a").then(n.bind(null,"42fe"))}}],z=new K["a"]({mode:"history",base:"/",routes:U}),Q=z,W=n("2f62");r["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");r["a"].use(Y["a"]);var Z=new Y["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Q,store:X,vuetify:Z,render:function(e){return e(G)}}).$mount("#app")},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.b238b73d.svg"},b760:function(e){e.exports=JSON.parse('{"logo":"logo.svg","links":[{"title":"Home","link":"/"},{"title":"Renders","link":"/renders"},{"title":"Resume","link":"/resume.pdf","newpage":true}],"social":[{"icon":"linkedin","link":"https://www.linkedin.com/in/jesseatter/","newpage":"true"},{"icon":"artstation","link":"https://www.artstation.com/jesseatter","newpage":"true"}]}')}});