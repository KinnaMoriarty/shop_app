(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/index"],{"321e":function(e,n,t){},"519a":function(e,n,t){"use strict";t.r(n);var u=t("c0bd"),o=t("64ac");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("edca");var c,i=t("f0c5"),a=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=a.exports},"64ac":function(e,n,t){"use strict";t.r(n);var u=t("800e"),o=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=o.a},"710d":function(e,n,t){"use strict";(function(e){t("2cbb");u(t("66fd"));var n=u(t("519a"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"800e":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,u,o,r,c){try{var i=e[r](c),a=i.value}catch(l){return void t(l)}i.done?n(a):Promise.resolve(a).then(u,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(u,o){var c=e.apply(n,t);function i(e){r(c,u,o,i,a,"next",e)}function a(e){r(c,u,o,i,a,"throw",e)}i(void 0)}))}}var i={data:function(){return{pic:"https://uviewui.com/common/logo.png",show:!0}},onLoad:function(){this.$u.utils.isLogin()},methods:{toBaseInfo:function(){this.$u.route({url:"pages/center/baseinfo"})},logout:function(){var e=this;return c(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$u.api.authLogout();case 2:e.$u.vuex("vuex_token",null),e.$u.vuex("vuex_user",{}),e.$u.toast("退出成功"),setTimeout((function(){e.$u.route({type:"reLaunch",url:"pages/index/index"})}),1e3);case 6:case"end":return n.stop()}}),n)})))()},toAddress:function(){this.$u.route({type:"redirect",url:"pages/cart/order/address/address"})},toCollected:function(){this.$u.route({type:"redirect",url:"pages/center/collectedGoods"})}}};n.default=i},c0bd:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var u={ossUpload:function(){return t.e("components/oss-upload/oss-upload").then(t.bind(null,"1bc1"))},uCellGroup:function(){return t.e("uview-ui/components/u-cell-group/u-cell-group").then(t.bind(null,"145f"))},uCellItem:function(){return t.e("uview-ui/components/u-cell-item/u-cell-item").then(t.bind(null,"f324"))},uButton:function(){return t.e("uview-ui/components/u-button/u-button").then(t.bind(null,"5c82"))}},o=function(){var e=this,n=e.$createElement;e._self._c},r=[]},edca:function(e,n,t){"use strict";var u=t("321e"),o=t.n(u);o.a}},[["710d","common/runtime","common/vendor"]]]);