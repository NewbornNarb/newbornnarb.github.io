(function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-07bbe338":"fa27eefe","chunk-6520ce15":"8c3968fa"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-07bbe338":1,"chunk-6520ce15":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-07bbe338":"a2afa582","chunk-6520ce15":"7c8b6a71"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),i={},l=o.a.create(i);l.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},r["a"].use(Plugin);Plugin;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-app",{staticClass:"dark"},[n("Navbar"),n("router-view"),n("Footer")],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{dark:"",flat:"",fixed:"",height:"100px"}},[r("v-spacer"),r("v-toolbar-title",[r("v-img",{staticClass:"d-none d-sm-block d-md-block d-lg-block d-xl-block",attrs:{src:n("9b19"),"max-width":"80px","max-height":"50px",contian:""}})],1),r("v-toolbar-items",[e._l(e.data.links,(function(t,n){return r("v-btn",{key:n+" "+t.title,staticClass:"mx-1",attrs:{to:t.link.includes(".pdf")?null:t.link,href:t.link.includes(".pdf")?t.link:null,target:t.newpage?"_blank":"",dark:"",text:"","active-class":"black"}},[e._v(e._s(t.title))])})),r("v-divider",{staticClass:"mx-4 d-none d-sm-none d-md-block",attrs:{vertical:""}}),e._l(e.data.social,(function(t,n){return r("v-btn",{key:n+" "+t.title,staticClass:"d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex",attrs:{target:t.newpage?"_blank":"",href:t.link,icon:"",dark:"",text:""}},[r("v-icon",[e._v(e._s("mdi-"+t.icon))])],1)}))],2),r("v-spacer")],1),r("div",{staticStyle:{height:"95px"}})],1)},d=[],f=n("b760"),p={data:function(){return{drawer:!1,data:f}}},v=p,m=n("2877"),h=n("6544"),b=n.n(h),g=n("40dc"),k=n("8336"),w=n("ce7e"),x=n("132d"),y=n("adda"),_=n("2fa4"),j=n("2a7f"),C=Object(m["a"])(v,u,d,!1,null,null,null),V=C.exports;b()(C,{VAppBar:g["a"],VBtn:k["a"],VDivider:w["a"],VIcon:x["a"],VImg:y["a"],VSpacer:_["a"],VToolbarItems:j["a"],VToolbarTitle:j["b"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-divider",{attrs:{color:"white"}}),n("v-card",{staticClass:"py-5",attrs:{dark:"",flat:"",color:"transparent"}},[n("v-card-text",[n("v-row",[n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Contact")])]),n("v-list-item",[e._v("(587) 585-6581")]),n("v-list-item",[e._v("j.atter66@gmail.com")]),n("v-list-item",[e._v("Resume")])],1)],1)],1),n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Social")])]),n("v-list-item",[e._v("Linkedin")])],1)],1)],1),n("v-col",[n("v-list",{attrs:{color:"transparent",dark:""}},[n("v-list-item-group",[n("v-list-item",[n("h3",[e._v("Links")])]),n("v-list-item",[e._v("Renders")]),n("v-list-item",[e._v("Models")]),n("v-list-item",[e._v("ArtStation")])],1)],1)],1)],1)],1),n("center",[n("small",[e._v("Copyright 2020 © Jesse Atter. All rights reserved.")])])],1)],1)},P=[],S=n("b0af"),E=n("99d9"),T=n("62ad"),A=n("a523"),L=n("8860"),N=n("da13"),I=n("1baa"),M=n("0fd9"),R={},B=Object(m["a"])(R,O,P,!1,null,null,null),$=B.exports;b()(B,{VCard:S["a"],VCardText:E["c"],VCol:T["a"],VContainer:A["a"],VDivider:w["a"],VList:L["a"],VListItem:N["a"],VListItemGroup:I["a"],VRow:M["a"]});var D={data:function(){return{drawer:!1}},components:{Navbar:V,Footer:$}},J=D,q=(n("034f"),n("7496")),F=n("f6c4"),H=Object(m["a"])(J,s,c,!1,null,null,null),G=H.exports;b()(H,{VApp:q["a"],VMain:F["a"]});var K=n("8c4f");r["a"].use(K["a"]);var U=[{path:"/",name:"Home",component:function(){return n.e("chunk-07bbe338").then(n.bind(null,"bb51"))}},{path:"/renders",name:"Renders",component:function(){return n.e("chunk-6520ce15").then(n.bind(null,"42fe"))}}],z=new K["a"]({routes:U}),Q=z,W=n("2f62");r["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");r["a"].use(Y["a"]);var Z=new Y["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Q,store:X,vuetify:Z,render:function(e){return e(G)}}).$mount("#app")},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.b238b73d.svg"},b760:function(e){e.exports=JSON.parse('{"logo":"logo.svg","links":[{"title":"Home","link":"/"},{"title":"Renders","link":"/renders"},{"title":"Resume","link":"/resume.pdf","newpage":true}],"social":[{"icon":"linkedin","link":"https://www.linkedin.com/in/jesseatter/","newpage":"true"},{"icon":"artstation","link":"https://www.artstation.com/jesseatter","newpage":"true"}]}')}});