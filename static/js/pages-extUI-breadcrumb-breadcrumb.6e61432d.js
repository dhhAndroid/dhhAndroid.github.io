(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-breadcrumb-breadcrumb"],{"042e":function(t,n,e){"use strict";e.r(n);var a=e("8d8d"),r=e("55a7");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("8c10");var i=e("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"3f60a12d",null,!1,a["a"],void 0);n["default"]=s.exports},1263:function(t,n,e){var a=e("20a7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("025bd2e1",a,!0,{sourceMap:!1,shadowMode:!1})},"1cee":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-breadcrumb-item"},[e("v-uni-view",{class:{"uni-breadcrumb-item--slot":!0,"uni-breadcrumb-item--slot-link":t.to&&t.currentPage!==t.to},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo.apply(void 0,arguments)}}},[t._t("default")],2),t.separatorClass?e("i",{staticClass:"uni-breadcrumb-item--separator",class:t.separatorClass}):e("v-uni-text",{staticClass:"uni-breadcrumb-item--separator"},[t._v(t._s(t.separator))])],1)},r=[]},"20a7":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-breadcrumb[data-v-3f60a12d]{display:flex}',""]),t.exports=n},"3a57":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={uniCard:e("8d2e").default,uniSection:e("a842").default,uniBreadcrumb:e("042e").default,uniBreadcrumbItem:e("9381").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[e("v-uni-text",{staticClass:"uni-h6"},[t._v("面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面")])],1),e("uni-section",{attrs:{title:"基础用法",type:"line",padding:!0}},[e("uni-breadcrumb",{attrs:{separator:"/"}},t._l(t.routes,(function(n,a){return e("uni-breadcrumb-item",{key:a,attrs:{to:n.to}},[t._v(t._s(n.name))])})),1)],1),e("uni-section",{attrs:{title:"自定义分隔符",type:"line",padding:!0}},[e("uni-breadcrumb",{attrs:{separator:">"}},t._l(t.routes,(function(n,a){return e("uni-breadcrumb-item",{key:a,attrs:{to:n.to}},[t._v(t._s(n.name))])})),1)],1)],1)},u=[]},"55a7":function(t,n,e){"use strict";e.r(n);var a=e("b344"),r=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},"72a8":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={components:{},data:function(){return{routes:[{to:"/pages/index/index",name:"首页"},{to:"",name:"菜单 A"},{to:"",name:"菜单 B"}]}}}},8394:function(t,n,e){var a=e("b02f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("b496fdae",a,!0,{sourceMap:!1,shadowMode:!1})},"8c10":function(t,n,e){"use strict";var a=e("1263"),r=e.n(a);r.a},"8d87":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("ac1f"),e("5319");var a={data:function(){return{currentPage:""}},options:{virtualHost:!0},props:{to:{type:String,default:""},replace:{type:Boolean,default:!1}},inject:{uniBreadcrumb:{from:"uniBreadcrumb",default:null}},created:function(){var t=getCurrentPages(),n=t[t.length-1];n&&(this.currentPage="/".concat(n.route))},computed:{separator:function(){return this.uniBreadcrumb.separator},separatorClass:function(){return this.uniBreadcrumb.separatorClass}},methods:{navTo:function(){var t=this.to;t&&this.currentPage!==t&&(this.replace?uni.redirectTo({url:t}):uni.navigateTo({url:t}))}}};n.default=a},"8d8d":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"uni-breadcrumb"},[this._t("default")],2)},r=[]},9331:function(t,n,e){"use strict";var a=e("8394"),r=e.n(a);r.a},9381:function(t,n,e){"use strict";e.r(n);var a=e("1cee"),r=e("9971");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("9331");var i=e("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"2840bad2",null,!1,a["a"],void 0);n["default"]=s.exports},9971:function(t,n,e){"use strict";e.r(n);var a=e("8d87"),r=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},aece:function(t,n,e){"use strict";e.r(n);var a=e("3a57"),r=e("dbcc");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);var i=e("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"6085eb62",null,!1,a["a"],void 0);n["default"]=s.exports},b02f:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-breadcrumb-item[data-v-2840bad2]{display:flex;align-items:center;white-space:nowrap;font-size:14px}.uni-breadcrumb-item--slot[data-v-2840bad2]{color:#6a6a6a;padding:0 10px}.uni-breadcrumb-item--slot-link[data-v-2840bad2]{color:#3a3a3a;font-weight:700;cursor:pointer}.uni-breadcrumb-item--slot-link[data-v-2840bad2]:hover{color:#2979ff}.uni-breadcrumb-item--separator[data-v-2840bad2]{font-size:12px;color:#6a6a6a}.uni-breadcrumb-item:first-child .uni-breadcrumb-item--slot[data-v-2840bad2]{padding-left:0}.uni-breadcrumb-item:last-child .uni-breadcrumb-item--separator[data-v-2840bad2]{display:none}',""]),t.exports=n},b344:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={options:{virtualHost:!0},props:{separator:{type:String,default:"/"},separatorClass:{type:String,default:""}},provide:function(){return{uniBreadcrumb:this}}};n.default=a},dbcc:function(t,n,e){"use strict";e.r(n);var a=e("72a8"),r=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a}}]);