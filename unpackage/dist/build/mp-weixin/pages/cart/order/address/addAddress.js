(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/order/address/addAddress"],{"153e":function(e,n,t){},"56b4":function(e,n,t){"use strict";t.r(n);var r=t("d26a"),u=t("cca5");for(var c in u)"default"!==c&&function(e){t.d(n,e,(function(){return u[e]}))}(c);t("9171");var o,i=t("f0c5"),a=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"cdf26f74",null,!1,r["a"],o);n["default"]=a.exports},9171:function(e,n,t){"use strict";var r=t("153e"),u=t.n(r);u.a},b723:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,n,t,r,u,c,o){try{var i=e[c](o),a=i.value}catch(s){return void t(s)}i.done?n(a):Promise.resolve(a).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var o=e.apply(n,t);function i(e){c(o,r,u,i,a,"next",e)}function a(e){c(o,r,u,i,a,"throw",e)}i(void 0)}))}}var i={data:function(){return{name:"",address:"",phone:"",province:"",city:"",county:"",is_default:0,show:!1}},computed:{wholeAddress:function(){return this.province?this.province+""+this.city+this.county:""}},methods:{setDefault:function(e){this.is_default=e.detail.value?1:0},setAddress:function(e){this.province=e.province.label,this.city=e.city.label,this.county=e.area.label},showRegionPicker:function(){this.show=!0},addNewAddress:function(){var e=this;return o(r.default.mark((function n(){var t,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={name:e.name,address:e.address,phone:e.phone,province:e.province,city:e.city,county:e.county,is_default:e.is_default},console.log(t),n.next=4,e.$u.api.addAddress(t);case 4:u=n.sent,console.log(u),e.$u.toast("添加成功"),setTimeout((function(){e.$u.route({type:"redirect",url:"pages/cart/order/address/address"})}),1500);case 8:case"end":return n.stop()}}),n)})))()}}};n.default=i},cca5:function(e,n,t){"use strict";t.r(n);var r=t("b723"),u=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=u.a},d26a:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return r}));var r={uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-picker/u-picker")]).then(t.bind(null,"3b63"))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,"b2d8"))}},u=function(){var e=this,n=e.$createElement;e._self._c},c=[]},d3c8:function(e,n,t){"use strict";(function(e){t("2cbb");r(t("66fd"));var n=r(t("56b4"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["d3c8","common/runtime","common/vendor"]]]);