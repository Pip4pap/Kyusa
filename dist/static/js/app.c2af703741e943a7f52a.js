webpackJsonp([1],{100:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mainHeading"),t._v(" "),n("inputForm")],1)},o=[],i={render:r,staticRenderFns:o};e.a=i},25:function(t,e,n){"use strict";var r=n(50),o=n(53),i=n(56);e.a={name:"app",components:{Hello:r.a,inputForm:i.a,mainHeading:o.a}}},26:function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},27:function(t,e,n){"use strict";e.a={name:"mainHeading",data:function(){return{title:"Currency Converter"}}}},28:function(t,e,n){"use strict";var r=n(58);e.a={name:"inputForm",data:function(){return{currencies:[],fromCurrency:null,toCurrency:null,result:null,inputAmount:null}},created:function(){var t=this;Object(r.a)().then(function(e){return t.currencies=e})},mounted:function(){$("#fromCurrency").dropdown(),$("#toCurrency").dropdown()},methods:{convert:function(){var t=this;!1===navigator.onLine&&$("#popup").css({visibility:"visible",opacity:"1","animation-name":"slideUp","animation-duration":"2s"}),Object(r.b)(this.fromCurrency,this.toCurrency).then(function(e){var n=+(e*t.inputAmount).toFixed(0);t.result=n.toLocaleString()})},closePopup:function(){$(".close").click(function(){$(".overlay").css({visibility:"hidden",opacity:"0"})})}}}},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(44),o=n(47);r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:o.a}})},47:function(t,e,n){"use strict";function r(t){n(48)}var o=n(25),i=n(100),u=n(10),c=r,a=u(o.a,i.a,!1,c,null,null);e.a=a.exports},48:function(t,e){},50:function(t,e,n){"use strict";function r(t){n(51)}var o=n(26),i=n(52),u=n(10),c=r,a=u(o.a,i.a,!1,c,null,null);e.a=a.exports},51:function(t,e){},52:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],i={render:r,staticRenderFns:o};e.a=i},53:function(t,e,n){"use strict";function r(t){n(54)}var o=n(27),i=n(55),u=n(10),c=r,a=u(o.a,i.a,!1,c,null,null);e.a=a.exports},54:function(t,e){},55:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(" "+t._s(t.title))])},o=[],i={render:r,staticRenderFns:o};e.a=i},56:function(t,e,n){"use strict";function r(t){n(57)}var o=n(28),i=n(99),u=n(10),c=r,a=u(o.a,i.a,!1,c,null,null);e.a=a.exports},57:function(t,e){},58:function(t,e,n){"use strict";function r(){return!1 in navigator?c.a.resolve():a.a.open("currencyDB",3,function(t){switch(t.oldVersion){case 0:t.createObjectStore("currencies");case 1:t.createObjectStore("rates")}})}function o(){return r().then(function(t){return t.transaction(["currencies"]).objectStore("currencies").get("currencies").then(function(t){return void 0===t?fetch("https://free.currencyconverterapi.com/api/v5/currencies").then(function(t){return t.json()}).then(function(t){var e=t.results;return r().then(function(t){t.transaction("currencies","readwrite").objectStore("currencies").put(e,"currencies")}),e}):t})})}function i(t,e){return r().then(function(n){return n.transaction(["rates"]).objectStore("rates").get(t+"_"+e).then(function(n){return void 0===n?(!1===navigator.onLine&&l()("Ooops!","This conversion is not available offline","error"),fetch("https://free.currencyconverterapi.com/api/v5/convert?q="+t+"_"+e+","+e+"_"+t).then(function(t){return t.json()}).then(function(n){var o=t+"_"+e,i=e+"_"+t,u=n.results[o].val,c=n.results[i].val;return r().then(function(t){var e=t.transaction("rates","readwrite"),n=e.objectStore("rates");n.put(u,o),n.put(c,i)}),u}).catch(function(t){console.log(t)})):n})})}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var u=n(29),c=n.n(u),a=n(94),s=n(98),l=n.n(s)},94:function(t,e,n){"use strict";function r(t){return Array.prototype.slice.call(t)}function o(t){return new g.a(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function i(t,e,n){var r,i=new g.a(function(i,u){r=t[e].apply(t,n),o(r).then(i,u)});return i.request=r,i}function u(t,e,n){var r=i(t,e,n);return r.then(function(t){if(t)return new f(t,r.request)})}function c(t,e,n){n.forEach(function(n){y()(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})})}function s(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function l(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return u(this[e],r,arguments)})})}function p(t){this._index=t}function f(t,e){this._cursor=t,this._request=e}function v(t){this._store=t}function d(t){this._tx=t,this.complete=new g.a(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function _(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function h(t){this._db=t}var m=n(95),y=n.n(m),b=n(29),g=n.n(b);c(p,"_index",["name","keyPath","multiEntry","unique"]),a(p,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(p,"_index",IDBIndex,["openCursor","openKeyCursor"]),c(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(f.prototype[t]=function(){var e=this,n=arguments;return g.a.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),o(e._request).then(function(t){if(t)return new f(t,e._request)})})})}),v.prototype.createIndex=function(){return new p(this._store.createIndex.apply(this._store,arguments))},v.prototype.index=function(){return new p(this._store.index.apply(this._store,arguments))},c(v,"_store",["name","keyPath","indexNames","autoIncrement"]),a(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(v,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))},c(d,"_tx",["objectStoreNames","mode"]),s(d,"_tx",IDBTransaction,["abort"]),_.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))},c(_,"_db",["name","version","objectStoreNames"]),s(_,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},c(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[v,p].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=r(arguments),n=e[e.length-1],o=this._store||this._index,i=o[t].apply(o,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[p,v].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new g.a(function(o){n.iterateCursor(t,function(t){return t?(r.push(t.value),void 0!==e&&r.length==e?void o(r):void t.continue()):void o(r)})})})}),e.a={open:function(t,e,n){var r=i(indexedDB,"open",[t,e]),o=r.request;return o&&(o.onupgradeneeded=function(t){n&&n(new _(o.result,t.oldVersion,o.transaction))}),r.then(function(t){return new h(t)})},delete:function(t){return i(indexedDB,"deleteDatabase",[t])}}},99:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAmount,expression:"inputAmount"}],staticClass:"form-control",attrs:{value:"0",min:"0",id:"inputAmount",type:"number",name:"inputAmount",placeholder:"Enter amount"},domProps:{value:t.inputAmount},on:{input:function(e){e.target.composing||(t.inputAmount=e.target.value)}}}),n("br"),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.fromCurrency,expression:"fromCurrency"}],staticClass:"ui search selection dropdown",attrs:{id:"fromCurrency"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.fromCurrency=e.target.multiple?n:n[0]}}},t._l(t.currencies,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n \t\t        \t"+t._s(e.id)+" "+t._s(e.currencyName)+"\t\t    \t\n\t\t\t")])}),0),n("br"),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.toCurrency,expression:"toCurrency"}],staticClass:"ui search selection dropdown",attrs:{id:"toCurrency"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.toCurrency=e.target.multiple?n:n[0]}}},t._l(t.currencies,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n\t\t          \t"+t._s(e.id)+" "+t._s(e.currencyName)+"\n\t        ")])}),0),n("br"),t._v(" "),n("button",{class:{disabled:!(t.toCurrency&&t.fromCurrency)},on:{click:t.convert}},[t._v("Convert")]),t._v(" "),n("p",{attrs:{id:"display"}},[t._v(t._s(t.toCurrency)+" "+t._s(t.result))]),t._v(" "),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popup"}},[n("span",[n("strong",[t._v("You're offline!")]),t._v(" "),n("i",[t._v("Only")]),t._v(" conversions you made while online will be available offline")])])}],i={render:r,staticRenderFns:o};e.a=i}},[43]);
//# sourceMappingURL=app.c2af703741e943a7f52a.js.map