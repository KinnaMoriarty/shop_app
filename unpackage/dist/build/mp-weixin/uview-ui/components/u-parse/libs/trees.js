(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-parse/libs/trees"],{"0ad5":function(t,e,r){"use strict";var i=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=i},"4c2a":function(t,e,r){"use strict";r.r(e);var i=r("c032"),a=r.n(i);for(var s in i)"default"!==s&&function(t){r.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"7d10":function(t,e,r){"use strict";var i;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"92ae":function(t,e,r){},c032:function(t,e,r){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var a=function(){Promise.resolve().then(function(){return resolve(r("c696"))}.bind(null,r)).catch(r.oe)},s=r("2a99").errorImg,n={components:{trees:a},name:"trees",data:function(){return{ctrl:[],placeholder:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="225"/>',errorImg:s,loadVideo:"undefined"==typeof plus,c:"",s:""}},props:{nodes:Array,lazyLoad:Boolean,loading:String},mounted:function(){for(this.top=this.$parent;"parser"!=this.top.$options.name;this.top=this.top.$parent);this.init()},methods:{init:function(){for(var t,e=this.nodes.length;t=this.nodes[--e];)if("img"==t.name)this.top.imgList.setItem(t.attrs.i,t.attrs["original-src"]||t.attrs.src);else if("video"==t.name||"audio"==t.name){var r;"video"==t.name?r=i.createVideoContext(t.attrs.id,this):this.$refs[t.attrs.id]&&(r=this.$refs[t.attrs.id][0]),r&&(r.id=t.attrs.id,this.top.videoContexts.push(r))}},play:function(t){var e=this.top.videoContexts;if(e.length>1&&this.top.autopause)for(var r=e.length;r--;)e[r].id!=t.currentTarget.dataset.id&&e[r].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var a=!0,s={id:e.target.id,src:r.src,ignore:function(){return a=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(s),this.top.$emit("imgtap",s),a){var n=this.top.imgList,o=n[r.i]?parseInt(r.i):(n=[r.src],0);i.previewImage({current:o,urls:n})}}},loadImg:function(t){var e=t.currentTarget.dataset.i;this.lazyLoad&&!this.ctrl[e]?this.$set(this.ctrl,e,1):this.loading&&2!=this.ctrl[e]&&this.$set(this.ctrl,e,2)},linkpress:function(e){var r=!0,a=e.currentTarget.dataset.attrs;if(a.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(a),this.top.$emit("linkpress",a),r){if(a["app-id"])return i.navigateToMiniProgram({appId:a["app-id"],path:a.path});a.href&&("#"==a.href[0]?this.top.useAnchor&&this.top.navigateTo({id:a.href.substring(1)}):0==a.href.indexOf("http")||0==a.href.indexOf("//")?i.setClipboardData({data:a.href,success:function(){return i.showToast({title:"链接已复制"})}}):i.navigateTo({url:a.href,fail:function(){i.switchTab({url:a.href})}}))}},error:function(t){var e=t.currentTarget,r=e.dataset.source,i=e.dataset.i;if("video"==r||"audio"==r){var a=this.ctrl[i]?this.ctrl[i].i+1:1;a<this.nodes[i].attrs.source.length&&this.$set(this.ctrl,i,a),t.detail.__args__&&(t.detail=t.detail.__args__[0])}else s&&"img"==r&&(this.top.imgList.setItem(e.dataset.index,s),this.$set(this.ctrl,i,3));this.top&&this.top.$emit("error",{source:r,target:e,errMsg:t.detail.errMsg})},_loadVideo:function(t){this.$set(this.ctrl,t.target.dataset.i,0)}}};e.default=n}).call(this,r("c8ba"),r("543d")["default"])},c696:function(t,e,r){"use strict";r.r(e);var i=r("7d10"),a=r("4c2a");for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);r("d2af");var n,o=r("f0c5"),u=r("0ad5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);"function"===typeof u["a"]&&Object(u["a"])(c),e["default"]=c.exports},d2af:function(t,e,r){"use strict";var i=r("92ae"),a=r.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-parse/libs/trees-create-component',
    {
        'uview-ui/components/u-parse/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c696"))
        })
    },
    [['uview-ui/components/u-parse/libs/trees-create-component']]
]);
