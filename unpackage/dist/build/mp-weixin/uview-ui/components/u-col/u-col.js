(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-col/u-col"],{"444b":function(t,n,e){"use strict";e.r(n);var u=e("ac64"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=i.a},"6d02":function(t,n,e){"use strict";e.r(n);var u=e("ba2c"),i=e("444b");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("924a");var a,s=e("f0c5"),f=Object(s["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=f.exports},"924a":function(t,n,e){"use strict";var u=e("b9d8"),i=e.n(u);i.a},ac64:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};n.default=u},b9d8:function(t,n,e){},ba2c:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,Number(t.gutter));t.$mp.data=Object.assign({},{$root:{m0:e}})},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-col/u-col-create-component',
    {
        'uview-ui/components/u-col/u-col-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6d02"))
        })
    },
    [['uview-ui/components/u-col/u-col-create-component']]
]);
