(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-show-loading-show-loading"],{"3e15":function(n,t,i){"use strict";i.r(t);var e=i("fe73"),a=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},"4b55":function(n,t,i){"use strict";i.r(t);var e=i("4f93"),a=i("3e15");for(var o in a)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(o);var u=i("f0c5"),d=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"81c27a44",null,!1,e["a"],void 0);t["default"]=d.exports},"4f93":function(n,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={pageHead:i("7f90").default},a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-load",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.showLoading.apply(void 0,arguments)}}},[n._v("显示 loading 提示框")]),i("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hideLoading.apply(void 0,arguments)}}},[n._v("隐藏 loading 提示框")])],1)],1)],1)},o=[]},fe73:function(n,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"loading"}},methods:{showLoading:function(){uni.showLoading({title:"loading"})},hideLoading:function(){uni.hideLoading()}}};t.default=e}}]);