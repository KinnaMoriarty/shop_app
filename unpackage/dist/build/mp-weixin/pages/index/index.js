(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1ca5":function(n,t,e){"use strict";(function(n){e("2cbb");r(e("66fd"));var t=r(e("e158"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"280c":function(n,t,e){"use strict";e.r(t);var r=e("b4a0"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=o.a},"679b":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}));var r={uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"b2b1e"))},uTabs:function(){return e.e("uview-ui/components/u-tabs/u-tabs").then(e.bind(null,"1982"))},uRow:function(){return e.e("uview-ui/components/u-row/u-row").then(e.bind(null,"ac31"))},uCol:function(){return e.e("uview-ui/components/u-col/u-col").then(e.bind(null,"6d02"))},goodsCard:function(){return e.e("components/goods-card/goods-card").then(e.bind(null,"821b"))},uSkeleton:function(){return e.e("uview-ui/components/u-skeleton/u-skeleton").then(e.bind(null,"8315"))}},o=function(){var n=this,t=n.$createElement;n._self._c},u=[]},b4a0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n){return s(n)||c(n)||a(n)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(n,t){if(n){if("string"===typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}function c(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function s(n){if(Array.isArray(n))return l(n)}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function d(n,t,e,r,o,u,i){try{var a=n[u](i),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(r,o)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var u=n.apply(t,e);function i(n){d(u,r,o,i,a,"next",n)}function a(n){d(u,r,o,i,a,"throw",n)}i(void 0)}))}}var p={data:function(){return{sortList:[{name:"默认"},{name:"销量"},{name:"推荐"},{name:"最新"}],currentSort:0,slides:[],goods:[{},{},{},{}],page:1,loading:!1}},onLoad:function(){this.$u.utils.isLogin()},onReachBottom:function(){this.page=this.page+1,this.getData()},methods:{changeSort:function(n){this.currentSort=n,this.goods=[],this.page=1,this.getData()},getData:function(){var n=this;return f(r.default.mark((function t(){var e,o,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.loading=!0,e={page:n.page},1==n.currentSort&&(e.sales=1),2==n.currentSort&&(e.recommend=1),3==n.currentSort&&(e.new=1),t.next=7,n.$u.api.index(e);case 7:o=t.sent,n.loading=!1,n.slides=o.slides,i=n.goods[0],console.log(i),n.goods=void 0===i?o.goods.data:[].concat(u(o.goods.data),u(n.goods));case 13:case"end":return t.stop()}}),t)})))()}}};t.default=p},e158:function(n,t,e){"use strict";e.r(t);var r=e("679b"),o=e("280c");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);var i,a=e("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"014505fe",null,!1,r["a"],i);t["default"]=c.exports}},[["1ca5","common/runtime","common/vendor"]]]);