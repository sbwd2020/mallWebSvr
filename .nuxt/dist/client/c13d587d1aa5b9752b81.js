(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(e,t,r){"use strict";r(80),r(38),r(27),r(17),r(63);var n=r(47),o=(r(28),r(119));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={authLogin:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/auth/register",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getVerifyCode:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/sms/sendVerifyCode",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/data/infoApp",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserMsgList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},userMsgRead:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressUpdate:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressDelete:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/delete",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cartItems:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},cartItemPlus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/plus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartItemMinus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/minus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartClear:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/clear"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},getCategorys:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/categorys",{status:1}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getGoodsList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/list",l({},data,{status:1})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInviteCode:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/getCode"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cancelOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/cancel",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},finishOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/finish",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/detail",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrderList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createPayment:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/payment/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},alipaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/alipay/wapPay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getInviteList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getWithdrawList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},withdrawApply:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getProfitList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/profit/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}}},323:function(e,t,r){"use strict";r(81),r(82),r(17);var n=r(194),o=r.n(n);t.a={formatPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e/100).toFixed(2)},unLimitTreeLevel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],n=0,o=function e(t,n,o){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==n){c.level=o,c.html="";for(var l=0;l<o;l++)c.html+=" -- ";r.push(c),e(t,c.id,o+1)}}};return o(e,t,n),r},getTimestamp:function(e){var t=new Date(e);return parseInt(t.getTime()/1e3)},dateFormat:function(e,t){t=t||"YYYY-MM-DD HH:mm";var r=null;return r=e?new Date(1e3*e):new Date,o()(r).format(t)},dateDisplay:function(e){var t=parseInt(Date.now()/1e3)-e;if(t<60)return t+"秒前";if(t>=60&&t<3600)return parseInt(t/60).toString()+"分钟前";if(t>=3600&&t<86400)return parseInt(t/3600).toString()+"小时前";if(t>=86400&&t<2592e3)return parseInt(t/3600/24).toString()+"天前";var r=new Date(1e3*e);return o()(r).format("YYYY-MM-DD HH:mm")},monthPlus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(e,"YYYY")),c=parseInt(this.dateFormat(e,"MM")),l=parseInt(this.dateFormat(e,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var f=0,v=n[c-1]-l;f+=v;for(var i=0;i<t;i++){(c+=1)>12&&(c=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var d=n[c-1];i==t-1&&(d=d-l<0?d:l),console.log("for days:",d),f+=d}return r?(e=e||parseInt(Date.now()/1e3))+24*f*3600:f},checkPlatform:function(){return/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":""},checkWeixin:function(){return!!/MicroMessenger/i.test(navigator.userAgent)}}},324:function(e,t,r){var map={"./af":195,"./af.js":195,"./ar":196,"./ar-dz":197,"./ar-dz.js":197,"./ar-kw":198,"./ar-kw.js":198,"./ar-ly":199,"./ar-ly.js":199,"./ar-ma":200,"./ar-ma.js":200,"./ar-sa":201,"./ar-sa.js":201,"./ar-tn":202,"./ar-tn.js":202,"./ar.js":196,"./az":203,"./az.js":203,"./be":204,"./be.js":204,"./bg":205,"./bg.js":205,"./bm":206,"./bm.js":206,"./bn":207,"./bn.js":207,"./bo":208,"./bo.js":208,"./br":209,"./br.js":209,"./bs":210,"./bs.js":210,"./ca":211,"./ca.js":211,"./cs":212,"./cs.js":212,"./cv":213,"./cv.js":213,"./cy":214,"./cy.js":214,"./da":215,"./da.js":215,"./de":216,"./de-at":217,"./de-at.js":217,"./de-ch":218,"./de-ch.js":218,"./de.js":216,"./dv":219,"./dv.js":219,"./el":220,"./el.js":220,"./en-SG":221,"./en-SG.js":221,"./en-au":222,"./en-au.js":222,"./en-ca":223,"./en-ca.js":223,"./en-gb":224,"./en-gb.js":224,"./en-ie":225,"./en-ie.js":225,"./en-il":226,"./en-il.js":226,"./en-nz":227,"./en-nz.js":227,"./eo":228,"./eo.js":228,"./es":229,"./es-do":230,"./es-do.js":230,"./es-us":231,"./es-us.js":231,"./es.js":229,"./et":232,"./et.js":232,"./eu":233,"./eu.js":233,"./fa":234,"./fa.js":234,"./fi":235,"./fi.js":235,"./fo":236,"./fo.js":236,"./fr":237,"./fr-ca":238,"./fr-ca.js":238,"./fr-ch":239,"./fr-ch.js":239,"./fr.js":237,"./fy":240,"./fy.js":240,"./ga":241,"./ga.js":241,"./gd":242,"./gd.js":242,"./gl":243,"./gl.js":243,"./gom-latn":244,"./gom-latn.js":244,"./gu":245,"./gu.js":245,"./he":246,"./he.js":246,"./hi":247,"./hi.js":247,"./hr":248,"./hr.js":248,"./hu":249,"./hu.js":249,"./hy-am":250,"./hy-am.js":250,"./id":251,"./id.js":251,"./is":252,"./is.js":252,"./it":253,"./it-ch":254,"./it-ch.js":254,"./it.js":253,"./ja":255,"./ja.js":255,"./jv":256,"./jv.js":256,"./ka":257,"./ka.js":257,"./kk":258,"./kk.js":258,"./km":259,"./km.js":259,"./kn":260,"./kn.js":260,"./ko":261,"./ko.js":261,"./ku":262,"./ku.js":262,"./ky":263,"./ky.js":263,"./lb":264,"./lb.js":264,"./lo":265,"./lo.js":265,"./lt":266,"./lt.js":266,"./lv":267,"./lv.js":267,"./me":268,"./me.js":268,"./mi":269,"./mi.js":269,"./mk":270,"./mk.js":270,"./ml":271,"./ml.js":271,"./mn":272,"./mn.js":272,"./mr":273,"./mr.js":273,"./ms":274,"./ms-my":275,"./ms-my.js":275,"./ms.js":274,"./mt":276,"./mt.js":276,"./my":277,"./my.js":277,"./nb":278,"./nb.js":278,"./ne":279,"./ne.js":279,"./nl":280,"./nl-be":281,"./nl-be.js":281,"./nl.js":280,"./nn":282,"./nn.js":282,"./pa-in":283,"./pa-in.js":283,"./pl":284,"./pl.js":284,"./pt":285,"./pt-br":286,"./pt-br.js":286,"./pt.js":285,"./ro":287,"./ro.js":287,"./ru":288,"./ru.js":288,"./sd":289,"./sd.js":289,"./se":290,"./se.js":290,"./si":291,"./si.js":291,"./sk":292,"./sk.js":292,"./sl":293,"./sl.js":293,"./sq":294,"./sq.js":294,"./sr":295,"./sr-cyrl":296,"./sr-cyrl.js":296,"./sr.js":295,"./ss":297,"./ss.js":297,"./sv":298,"./sv.js":298,"./sw":299,"./sw.js":299,"./ta":300,"./ta.js":300,"./te":301,"./te.js":301,"./tet":302,"./tet.js":302,"./tg":303,"./tg.js":303,"./th":304,"./th.js":304,"./tl-ph":305,"./tl-ph.js":305,"./tlh":306,"./tlh.js":306,"./tr":307,"./tr.js":307,"./tzl":308,"./tzl.js":308,"./tzm":309,"./tzm-latn":310,"./tzm-latn.js":310,"./tzm.js":309,"./ug-cn":311,"./ug-cn.js":311,"./uk":312,"./uk.js":312,"./ur":313,"./ur.js":313,"./uz":314,"./uz-latn":315,"./uz-latn.js":315,"./uz.js":314,"./vi":316,"./vi.js":316,"./x-pseudo":317,"./x-pseudo.js":317,"./yo":318,"./yo.js":318,"./zh-cn":319,"./zh-cn.js":319,"./zh-hk":320,"./zh-hk.js":320,"./zh-tw":321,"./zh-tw.js":321};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=324},326:function(e,t,r){var content=r(333);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("86bc28ac",content,!0,{sourceMap:!1})},332:function(e,t,r){"use strict";var n=r(326);r.n(n).a},333:function(e,t,r){(e.exports=r(30)(!1)).push([e.i,".van-card{background-color:#fff!important}",""])},354:function(e,t,r){"use strict";r.r(t);r(80),r(38),r(27),r(17),r(63),r(121),r(120),r(28);var n=r(47),o=r(322);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={head:function(){return{title:"商品列表"}},data:function(){return{title:"商品列表",search:"",listData:{loading:!1,finished:!1,list:[],count:0,page:1,limit:10},activeType:"",activeType1:0,activeSort:"",optionTypes:[{text:"全部",value:""},{text:"套餐",value:"package"},{text:"新款",value:"new"},{text:"推荐",value:"recommend"}],optionTypes1:[{text:"类别",value:0},{text:"男用",value:1},{text:"女用",value:2}],optionSorts:[{text:"排序:默认",value:""},{text:"价格低->高",value:"price,asc"},{text:"价格高->低",value:"price,desc"}]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},r(323).a,{navBack:function(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},goCart:function(){this.$router.push("/cart")},goToDetail:function(e){this.$router.push("/goods/detail?id="+e.id)},listLoad:function(){var data,e,t=this;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return data={page:this.listData.page,limit:this.listData.limit},"new"==this.activeType?data.new=1:"recommend"==this.activeType?data.recommend=1:"package"==this.activeType&&(data.package=1),this.activeType1&&(data.type_sub=this.activeType1),this.activeSort&&(data.order=this.activeSort.split(",")),this.search&&(data.search=this.search),console.log("/listLoad data",data),this.listData.loading=!0,r.prev=7,r.next=10,regeneratorRuntime.awrap(o.a.getGoodsList(data));case 10:if(0!==(e=r.sent).code){r.next=17;break}this.listData.count=e.data.count,e.data.rows.forEach((function(e){t.listData.list.push(e)})),e.data.rows.length<this.listData.limit?this.listData.finished=!0:this.listData.page+=1,r.next=18;break;case 17:throw new Error(e.message);case 18:r.next=23;break;case 20:r.prev=20,r.t0=r.catch(7),this.$toast.fail(r.t0.message);case 23:this.listData.loading=!1;case 24:case"end":return r.stop()}}),null,this,[[7,20]])},activeChange:function(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()},searchList:function(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()}}),created:function(){var e=this.$route.query.category||"";e&&(this.activeType=e);var t=this.$route.query.typeSub||0;t&&(this.activeType1=parseInt(t))}},f=(r(332),r(29)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"flex"},[r("div",{staticClass:"p-6 text-2xl",on:{click:e.navBack}},[e._v("返回")]),e._v(" "),r("van-search",{staticClass:"flex-1",attrs:{placeholder:"请输入搜索关键词"},on:{search:e.searchList},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("van-icon",{staticClass:"p-6",attrs:{name:"cart-o",size:"20"},on:{click:e.goCart}})],1),e._v(" "),r("van-dropdown-menu",[r("van-dropdown-item",{attrs:{options:e.optionTypes},on:{change:e.activeChange},model:{value:e.activeType,callback:function(t){e.activeType=t},expression:"activeType"}}),e._v(" "),r("van-dropdown-item",{attrs:{options:e.optionTypes1},on:{change:e.activeChange},model:{value:e.activeType1,callback:function(t){e.activeType1=t},expression:"activeType1"}}),e._v(" "),r("van-dropdown-item",{attrs:{options:e.optionSorts},on:{change:e.activeChange},model:{value:e.activeSort,callback:function(t){e.activeSort=t},expression:"activeSort"}})],1),e._v(" "),r("van-list",{attrs:{finished:e.listData.finished,"finished-text":"没有更多了"},on:{load:e.listLoad},model:{value:e.listData.loading,callback:function(t){e.$set(e.listData,"loading",t)},expression:"listData.loading"}},e._l(e.listData.list,(function(t){return r("van-cell",{key:t.id},[r("van-card",{attrs:{price:(t.price/100).toFixed(2),"origin-price":(t.price_market/100).toFixed(2),desc:t.description,title:"商品标题","lazy-load":!0},on:{click:function(r){return e.goToDetail(t)}}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[e._v(e._s(t.title))])]),e._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.thumb||t.cover,alt:""}})]),e._v(" "),r("template",{slot:"tag"},[t.is_recommend?[r("van-tag",{attrs:{type:"danger",mark:""}},[e._v("HOT")])]:t.is_new?[r("van-tag",{attrs:{type:"success",mark:""}},[e._v("NEW")])]:void 0],2),e._v(" "),r("template",{slot:"tags"},[r("div",{staticClass:"text-gray-500"},[t.package_level>0?[e._v("套餐")]:e._e(),e._v(" "),1==t.type_sub?[e._v("男用")]:e._e(),e._v(" "),2==t.type_sub?[e._v("女用")]:e._e()],2)])],2)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);