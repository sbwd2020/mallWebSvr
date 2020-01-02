exports.ids=[11],exports.modules={34:function(t,e,r){"use strict";var o=r(16);e.a={authLogin:async data=>await o.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await o.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await o.a.post("/api/user/data/infoApp",data),addressList:async data=>await o.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await o.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await o.a.post("/api/user/message/update",data),addressUpdate:async data=>await o.a.post("/api/user/address/update",data),addressDelete:async data=>await o.a.post("/api/user/address/delete",data),cartItems:async()=>await o.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await o.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await o.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await o.a.post("/cart/clear"),getCategorys:async()=>await o.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await o.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await o.a.post("/api/user/invite/getCode"),createOrder:async data=>await o.a.post("/api/mall/order/create",data),cancelOrder:async data=>await o.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await o.a.post("/api/mall/order/finish",data),getOrder:async data=>await o.a.post("/api/mall/order/detail",data),getOrderList:async data=>await o.a.post("/api/mall/order/list",data),createPayment:async data=>await o.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await o.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await o.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await o.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await o.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await o.a.post("/api/mall/profit/list",data)}},35:function(t,e,r){"use strict";var o=r(32),n=r.n(o);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],o=function(t,e,n){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=n,l.html="";for(let t=0;t<n;t++)l.html+=" -- ";r.push(l),o(t,l.id,n+1)}}};return o(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,n()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return n()(r).format(e)}},monthPlus(t,e=1,r=!0){let o=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let d=0;d+=o[l-1]-c;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,n+=1),o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=o[l-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},37:function(t,e,r){var content=r(42);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("86bc28ac",content,!0,t)}},41:function(t,e,r){"use strict";r.r(e);var o=r(37),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},42:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".van-card{background-color:#fff!important}",""])},54:function(t,e,r){"use strict";r.r(e);var o=r(34),n={head:()=>({title:"商品列表"}),data:()=>({title:"商品列表",search:"",listData:{loading:!1,finished:!1,list:[],count:0,page:1,limit:10},activeType:"",activeType1:0,activeSort:"",optionTypes:[{text:"全部",value:""},{text:"套餐",value:"package"},{text:"新款",value:"new"},{text:"推荐",value:"recommend"}],optionTypes1:[{text:"类别",value:0},{text:"男用",value:1},{text:"女用",value:2}],optionSorts:[{text:"排序:默认",value:""},{text:"价格低->高",value:"price,asc"},{text:"价格高->低",value:"price,desc"}]}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},goCart(){this.$router.push("/cart")},goToDetail(t){this.$router.push("/goods/detail?id="+t.id)},async listLoad(){let data={page:this.listData.page,limit:this.listData.limit};"new"==this.activeType?data.new=1:"recommend"==this.activeType?data.recommend=1:"package"==this.activeType&&(data.package=1),this.activeType1&&(data.type_sub=this.activeType1),this.activeSort&&(data.order=this.activeSort.split(",")),this.search&&(data.search=this.search),console.log("/listLoad data",data),this.listData.loading=!0;try{let t=await o.a.getGoodsList(data);if(0!==t.code)throw new Error(t.message);this.listData.count=t.data.count,t.data.rows.forEach(t=>{this.listData.list.push(t)}),t.data.rows.length<this.listData.limit?this.listData.finished=!0:this.listData.page+=1}catch(t){this.$toast.fail(t.message)}this.listData.loading=!1},activeChange(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()},searchList(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()}},created(){let t=this.$route.query.category||"";t&&(this.activeType=t);let e=this.$route.query.typeSub||0;e&&(this.activeType1=parseInt(e))}},l=r(2);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="flex">',"</div>",[t._ssrNode('<div class="p-6 text-2xl">返回</div> '),r("van-search",{staticClass:"flex-1",attrs:{placeholder:"请输入搜索关键词"},on:{search:t.searchList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._ssrNode(" "),r("van-icon",{staticClass:"p-6",attrs:{name:"cart-o",size:"20"},on:{click:t.goCart}})],2),t._ssrNode(" "),r("van-dropdown-menu",[r("van-dropdown-item",{attrs:{options:t.optionTypes},on:{change:t.activeChange},model:{value:t.activeType,callback:function(e){t.activeType=e},expression:"activeType"}}),t._v(" "),r("van-dropdown-item",{attrs:{options:t.optionTypes1},on:{change:t.activeChange},model:{value:t.activeType1,callback:function(e){t.activeType1=e},expression:"activeType1"}}),t._v(" "),r("van-dropdown-item",{attrs:{options:t.optionSorts},on:{change:t.activeChange},model:{value:t.activeSort,callback:function(e){t.activeSort=e},expression:"activeSort"}})],1),t._ssrNode(" "),r("van-list",{attrs:{finished:t.listData.finished,"finished-text":"没有更多了"},on:{load:t.listLoad},model:{value:t.listData.loading,callback:function(e){t.$set(t.listData,"loading",e)},expression:"listData.loading"}},t._l(t.listData.list,(function(e){return r("van-cell",{key:e.id},[r("van-card",{attrs:{price:(e.price/100).toFixed(2),"origin-price":(e.price_market/100).toFixed(2),desc:e.description,title:"商品标题","lazy-load":!0},on:{click:function(r){return t.goToDetail(e)}}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[t._v(t._s(e.title))])]),t._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.thumb||e.cover,alt:""}})]),t._v(" "),r("template",{slot:"tag"},[e.is_recommend?[r("van-tag",{attrs:{type:"danger",mark:""}},[t._v("HOT")])]:e.is_new?[r("van-tag",{attrs:{type:"success",mark:""}},[t._v("NEW")])]:void 0],2),t._v(" "),r("template",{slot:"tags"},[r("div",{staticClass:"text-gray-500"},[e.package_level>0?[t._v("套餐")]:t._e(),t._v(" "),1==e.type_sub?[t._v("男用")]:t._e(),t._v(" "),2==e.type_sub?[t._v("女用")]:t._e()],2)])],2)],1)})),1)],2)}),[],!1,(function(t){var e=r(41);e.__inject__&&e.__inject__(t)}),null,"3bb67622");e.default=component.exports}};