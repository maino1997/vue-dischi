(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"429b":function(t,e,n){"use strict";n("7d62")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Main",{attrs:{List:t.images}})},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},t._l(t.List,(function(e){return n("div",{key:e.poster,staticClass:"col-5"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:"item.poster",alt:"item.author"}}),n("h2",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.author))]),n("p",[t._v(t._s(e.year))])])])})),0)])},c=[],u={name:"Main",props:["List"]},s=u,l=(n("429b"),n("2877")),p=Object(l["a"])(s,a,c,!1,null,"bb665e40",null),f=p.exports,d=n("bc3a"),b=n.n(d),v={name:"App",components:{Main:f},data:function(){return{images:[]}},mounted:function(){var t=this;b.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.images=e.data.response}))}},h=v,m=(n("5c0b"),Object(l["a"])(h,o,i,!1,null,null,null)),y=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7d62":function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.d91901f8.js.map