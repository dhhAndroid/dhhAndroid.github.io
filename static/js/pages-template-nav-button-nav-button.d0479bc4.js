(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-button-nav-button"],{"067b":function(t,n,i){"use strict";i.r(n);var e=i("d4570"),u=i("261e");for(var a in u)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return u[t]}))}(a);var o=i("f0c5"),s=Object(o["a"])(u["default"],e["b"],e["c"],!1,null,"01ff092a",null,!1,e["a"],void 0);n["default"]=s.exports},"261e":function(t,n,i){"use strict";i.r(n);var e=i("a5c0"),u=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=u.a},a5c0:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"nav-button"}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"你点了分享按钮":"你点了收藏按钮",icon:"none"})}};n.default=e},d4570:function(t,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={pageHead:i("7f90").default,uniIcons:i("7d33").default},u=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:this.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[n("uni-icons",{attrs:{size:"16",type:"info"}}),this._v("说明 :")],1),n("v-uni-view",{staticClass:"uni-helllo-text"},[n("v-uni-view",[this._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听buttons的点击事件。")]),n("v-uni-view",[this._v("在小程序端，不支持配置buttons，故按钮不见了。")])],1)],1)],1)},a=[]}}]);