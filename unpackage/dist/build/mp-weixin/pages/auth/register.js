(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/register"],{"625a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,o){try{var u=t[i](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function u(t){i(o,a,r,u,s,"next",t)}function s(t){i(o,a,r,u,s,"throw",t)}u(void 0)}))}}var u={data:function(){return{name:"啊啊啊",email:"12asffdf@a.com",password:"123123",password_confirmation:"123123",isSame:!1}},computed:{inputStyle:function(){var t={};return this.$u.test.email(this.email)&&this.password&&this.password==this.password_confirmation&&this.name&&(t.color="#fff",t.backgroundColor=this.$u.color["primary"]),t}},watch:{},methods:{submit:function(){var t=this;return o(a.default.mark((function e(){var n,r,i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$u.test.email(t.email)||!t.password||t.password!=t.password_confirmation||!t.name){e.next=2;break}return e.abrupt("return");case 2:return n={name:t.name,email:t.email,password:t.password,password_confirmation:t.password_confirmation},e.next=5,t.$u.api.authRegister(n);case 5:if(r=e.sent,console.log(r),i=r.errors,!i){e.next=12;break}return t.$u.toast(i.email[0]),t.name="",t.email="",t.password="",t.password_confirmation="",e.abrupt("return");case 12:t.$u.toast("注册成功!"),setTimeout((function(){t.$u.route({type:"redirect",url:"pages/auth/login"})}),1e3),t.name="",t.email="",t.password="",t.password_confirmation="";case 15:case"end":return e.stop()}}),e)})))()},returnLogin:function(){this.$u.route({type:"reLaunch",url:"pages/auth/login"})},checkIsSame:function(){this.password!==this.password_confirmation?this.isSame="与输入的密码不一样":this.isSame=!1}}};e.default=u},"63ba":function(t,e,n){"use strict";(function(t){n("2cbb");a(n("66fd"));var e=a(n("c7c9"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"91ab":function(t,e,n){},c1a1:function(t,e,n){"use strict";var a=n("91ab"),r=n.n(a);r.a},c7c9:function(t,e,n){"use strict";n.r(e);var a=n("fe52"),r=n("e489");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c1a1");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"1a42e440",null,!1,a["a"],o);e["default"]=s.exports},e489:function(t,e,n){"use strict";n.r(e);var a=n("625a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},fe52:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uField:function(){return n.e("uview-ui/components/u-field/u-field").then(n.bind(null,"d18d"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.inputStyle]));t._isMounted||(t.e0=function(e){t.isSame=!1}),t.$mp.data=Object.assign({},{$root:{s0:n}})},i=[]}},[["63ba","common/runtime","common/vendor"]]]);