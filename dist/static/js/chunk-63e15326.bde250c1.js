(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e15326"],{"177f":function(t,e,n){},"211f":function(t,e,n){"use strict";n("4ca1")},2344:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"member_header"},[n("el-input",{staticClass:"filter_item",staticStyle:{width:"200px"},attrs:{placeholder:t.firstPlaceholder},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleBtn1(e)}},model:{value:t.firstValue,callback:function(e){t.firstValue=e},expression:"firstValue"}}),n("el-input",{staticClass:"filter_item",staticStyle:{width:"200px"},attrs:{placeholder:t.secondPlaceholder},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleBtn1(e)}},model:{value:t.secondValue,callback:function(e){t.secondValue=e},expression:"secondValue"}}),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter_item filter_item_button",attrs:{type:t.firstBtnType,icon:t.firstIcon},on:{click:t.handleBtn1}},[t._v(" "+t._s(t.btn1Title)+" ")]),t._t("btn"),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter_item filter_item_button",attrs:{loading:t.btn2Loading,type:t.secondBtnType,icon:t.secondIcon},on:{click:t.handleBtn2}},[t._v(" "+t._s(t.btn2Title)+" ")])],2)},r=[],i=(n("a9e3"),{props:{btn1Title:{type:String,default:"查找"},btn2Title:{type:String,default:"导出"},first:{type:[String,Number],required:!0},second:{type:[String,Number],required:!0},firstPlaceholder:String,secondPlaceholder:String,btn2Loading:{type:Boolean,default:!1},firstIcon:{type:String,default:"el-icon-search"},secondIcon:{type:String,default:"el-icon-download"},firstBtnType:{type:String,default:"primary"},secondBtnType:{type:String,default:"primary"}},computed:{firstValue:{get:function(){return this.first},set:function(t){this.$emit("update:first",t)}},secondValue:{get:function(){return this.second},set:function(t){this.$emit("update:second",t)}}},methods:{handleBtn1:function(){this.$emit("firstEven")},handleBtn2:function(){this.$emit("secondEven")}}}),o=i,s=(n("8b22"),n("2877")),l=Object(s["a"])(o,a,r,!1,null,"2a3b8942",null);e["a"]=l.exports},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,n){var a=s(),r=t-a,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var s=Math.easeInOutQuad(u,a,r,e);o(s),u<e?i(t):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.currentPage=1,this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("8b59"),n("2877")),p=Object(d["a"])(c,a,r,!1,null,"6fa1a737",null);e["a"]=p.exports},"4ca1":function(t,e,n){},6794:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));n("4d63"),n("ac1f"),n("2c3e"),n("25f0");function a(t){var e=new Date(t),n=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",i=e.getHours()+":",o=e.getMinutes()+":",s=e.getSeconds();return s<10&&(s="0"+s),n+a+r+i+o+s}function r(t){var e=new RegExp("[^/]+(?!.*/)");this.brandFrom.picUrl="http://47.100.25.227/storage/"+e.exec(response.data.url)}},"6a16":function(t,e,n){},"8b22":function(t,e,n){"use strict";n("6a16")},"8b59":function(t,e,n){"use strict";n("177f")},"9ef3":function(t,e,n){},acf8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_content"},[n("memberHeader",{attrs:{first:t.id,second:t.name,firstPlaceholder:"请输入品牌商ID",secondPlaceholder:"请输入品牌商名称",btn2Loading:t.downloadLoading},on:{"update:first":function(e){t.id=e},"update:second":function(e){t.name=e},firstEven:t.handleFilter,secondEven:t.handleDownload},scopedSlots:t._u([{key:"btn",fn:function(){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.addBrand}},[t._v("添加")])]},proxy:!0}])}),n("ContentTable",{attrs:{rowArr:t.showRowArr,list:t.list,listLoading:t.listLoading,useLastSlot:"",lastSlotTitle:"编辑",lastSlotWidth:200,lastSlotAlign:"center"},on:{sortChange:t.sortChange},scopedSlots:t._u([{key:"last",fn:function(e){return n("div",{},[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.goEditBrand(e)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.deleteBrand(e.data.id)}}},[t._v("删除")])],1)}}])}),n("div",{staticClass:"table_stepper"},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.userlist.page,limit:t.userlist.limit,pageSizes:t.userlist.pageSizes},on:{"update:page":function(e){return t.$set(t.userlist,"page",e)},"update:limit":function(e){return t.$set(t.userlist,"limit",e)},pagination:t.getList}})],1),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.handleClose}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.brandFrom,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"品牌商名称",prop:"name"}},[n("el-input",{model:{value:t.brandFrom.name,callback:function(e){t.$set(t.brandFrom,"name",e)},expression:"brandFrom.name"}})],1),n("el-form-item",{attrs:{label:"介绍",prop:"desc"}},[n("el-input",{model:{value:t.brandFrom.desc,callback:function(e){t.$set(t.brandFrom,"desc",e)},expression:"brandFrom.desc"}})],1),n("el-form-item",{attrs:{label:"品牌商图片"}},[t.brandFrom.picUrl?[n("img",{staticStyle:{width:"160px"},attrs:{src:t.brandFrom.picUrl,alt:"",srcset:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.upImgShow,expression:"!upImgShow"}],staticClass:"up_img",on:{click:function(e){t.upImgShow=!0}}},[t._v("上传")])]:t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.brandFrom.picUrl||t.upImgShow,expression:"!brandFrom.picUrl || upImgShow"}]},[n("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://47.100.25.227:8083/admin/storage/create",headers:{"X-Mymall-Admin-Token":t.getToken()},"on-success":t.upImgSuccess}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])])],1)],2),n("el-form-item",{attrs:{label:"底价",prop:"floorPrice"}},[n("el-input-number",{attrs:{precision:2},model:{value:t.brandFrom.floorPrice,callback:function(e){t.$set(t.brandFrom,"floorPrice",e)},expression:"brandFrom.floorPrice"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 取消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(" 确认 ")])],1)],1)],1)},r=[],i=n("5530"),o=(n("b0c0"),n("5f87")),s=n("6794"),l=n("f923"),u=n("333d"),c=n("2344"),d=n("b9e7"),p={name:"mallManBrand",data:function(){return{listLoading:!1,downloadLoading:!1,list:[],total:0,id:"",name:"",userlist:{page:1,limit:5,pageSizes:[5,10,15,20],order:"desc"},showRowArr:[{key:"id",title:"品牌商ID",sortable:"custom",width:"120"},{key:"name",title:"品牌商名称",width:"150"},{key:"picUrl",title:"品牌商图片",img:!0,width:"150"},{key:"desc",title:"介绍"},{key:"floorPrice",title:"底价",width:"150"}],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新建"},upImgShow:!1,brandFrom:{id:"",name:"",desc:"",picUrl:"",floorPrice:""},rules:{name:[{required:!0,message:"供应商名不可为空",trigger:"blur"}]}}},components:{Pagination:u["a"],memberHeader:c["a"],ContentTable:d["a"]},beforeMount:function(){this.getList()},methods:{getToken:o["a"],handleDownload:function(){this.downloadLoading=!0},handleFilter:function(){this.userlist.page=1,this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={page:this.userlist.page,limit:this.userlist.limit,id:this.id||null,name:this.name||null,sort:"add_time",order:"desc"==this.userlist.order?"asc":"desc"};Object(l["c"])(e).then((function(e){t.list=e.data.items,t.total=e.data.total,setTimeout((function(){t.listLoading=!1}),1500)}))},sortChange:function(t){var e=t.prop,n=t.order;"id"===e&&this.sortByID(n)},sortByID:function(t){this.userlist.order="ascending"===t||null===t?"desc":"asc",this.handleFilter()},goEditBrand:function(t){for(var e in this.dialogFormVisible=!0,this.dialogStatus="update",this.brandFrom)this.brandFrom[e]=t.data[e]},addBrand:function(){this.dialogFormVisible=!0,this.dialogStatus="create"},deleteBrand:function(t){var e=this;Object(l["b"])({id:t}).then((function(){e.getList()}))},createData:function(){var t=this;Object(l["a"])(Object(i["a"])({},this.brandFrom)).then((function(){t.handleClose(),t.getList()}))},updateData:function(){var t=this;Object(l["f"])(Object(i["a"])(Object(i["a"])({},this.brandFrom),{},{id:this.brandFrom.id,update:Object(s["b"])(Date.now())})).then((function(){t.handleClose(),t.getList()}))},handleClose:function(){this.brandFrom={name:"",desc:"",picUrl:"",floorPrice:""},this.upImgShow=!1},upImgSuccess:function(t){this.brandFrom.picUrl=Object(s["a"])(t.data.url)}}},f=p,m=(n("e183"),n("2877")),h=Object(m["a"])(f,a,r,!1,null,"a595bbf2",null);e["default"]=h.exports},b9e7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"member_list_table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[t._l(t.rowArr,(function(e,a){return n("el-table-column",{key:a,attrs:{label:e.title,prop:"id",sortable:e.sortable,align:"center",width:e.width},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.row;return[e.img?n("img",{staticStyle:{width:"50%"},attrs:{src:Array.isArray(r[e.key])?r[e.key][0]:r[e.key]}}):e.tag?"gender"==e.key?n("div",[r.gender?n("el-tag",{attrs:{type:1===r[e.key]?"":"danger"}},[t._v(t._s(1===r[e.key]?e.trueText:e.falseText))]):n("el-tag",[t._v("未知")])],1):n("el-tag",{attrs:{type:r[e.key]?e.trueText:e.falseText}},[t._v(t._s(r[e.key]?e.trueText:e.falseText))]):n("span",{staticClass:"test"},[t._v(t._s(r[e.key]))])]}}],null,!0)})})),t.useLastSlot?n("el-table-column",{attrs:{width:t.lastSlotWidth,label:t.lastSlotTitle,align:t.lastSlotAlign},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,a=e.$index;return[t._t("last",null,{data:n,index:a})]}}],null,!0)}):t._e()],2)],1)},r=[],i=(n("a9e3"),n("4de4"),n("d3b7"),{props:{listLoading:{type:Boolean,default:!1},list:{type:Array,default:[]},rowArr:{type:Array,default:[]},useLastSlot:Boolean,lastSlotTitle:String,lastSlotWidth:Number,lastSlotAlign:String},data:function(){return{}},methods:{birthdayDispose:function(t){if(!t)return"未填写";var e=t.split("-").filter((function(t,e){return e>=1}));return e[0]+"月"+e[1]+"日"},sortChange:function(t){this.$emit("sortChange",t)}}}),o=i,s=(n("211f"),n("2877")),l=Object(s["a"])(o,a,r,!1,null,"1db43b4a",null);e["a"]=l.exports},e183:function(t,e,n){"use strict";n("9ef3")},f923:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return g}));var a=n("c7eb"),r=n("1da1"),i=n("b775");function o(t){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"admin/region/list",method:"get",params:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(t){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"admin/brand/list",method:"get",params:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function c(t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/admin/brand/create",method:"post",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/admin/brand/update",method:"post",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/admin/brand/delete",method:"post",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(Object(a["a"])().mark((function t(e){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/admin/category/list",method:"get",params:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}}}]);