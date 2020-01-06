exports.ids=[15],exports.modules={34:function(t,e,o){"use strict";var r=o(16);e.a={authLogin:async data=>await r.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await r.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await r.a.post("/api/user/data/infoApp",data),addressList:async data=>await r.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await r.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await r.a.post("/api/user/message/update",data),addressUpdate:async data=>await r.a.post("/api/user/address/update",data),addressDelete:async data=>await r.a.post("/api/user/address/delete",data),cartItems:async()=>await r.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await r.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await r.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await r.a.post("/cart/clear"),getCategorys:async()=>await r.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await r.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await r.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await r.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await r.a.post("/api/mall/order/create",data),cancelOrder:async data=>await r.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await r.a.post("/api/mall/order/finish",data),getOrder:async data=>await r.a.post("/api/mall/order/detail",data),getOrderList:async data=>await r.a.post("/api/mall/order/list",data),createPayment:async data=>await r.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await r.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await r.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await r.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await r.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await r.a.post("/api/mall/profit/list",data)}},35:function(t,e,o){"use strict";var r=o(32),n=o.n(r);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var o=[],r=function(t,e,n){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=n,l.html="";for(let t=0;t<n;t++)l.html+=" -- ";o.push(l),r(t,l.id,n+1)}}};return r(t,e,0),o},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let o=null;return o=t?new Date(1e3*t):new Date,n()(o).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",o=new Date(1e3*t);return n()(o).format(e)}},monthPlus(t,e=1,o=!0){let r=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));r[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let d=0;d+=r[l-1]-c;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,n+=1),r[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=r[l-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return o?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},56:function(t,e,o){"use strict";o.r(e);var r=o(35),n=o(34),l={head:()=>({title:"支付"}),data:()=>({leftArrow:!1,total:0,amount:0,score:0,submitLoading:!1,submitDisabled:!0,orders:[],orderIds:[],payType:1,payTypeText:"",payTypeShow:!1,payTypeActions:[{name:"线下支付"},{name:"在线支付",color:"#07c160"}],payMethod:0,outTradeNo:"",paymentId:0}),methods:{...r.a,async onSubmit(){this.submitLoading=!0;let t={order_ids:this.orderIds,total:this.total,amount:this.amount,score:this.score,pay_type:this.payType,pay_method:this.payMethod,balance:0,coupon:0,user_coupon_id:0};if(this.payType>0&&0==this.payMethod)this.$toast.fail("请选择支付方式");else{console.log("/onSubmit data",t);try{let e=await n.a.createPayment(t);if(0!=e.code)throw new Error(e.message);{console.log("/onSubmit paymentData:",e.data);let t=e.data;1==t.status?this.$route.replace("/order/list?status=1"):(this.outTradeNo=t.out_trade_no,this.paymentId=t.id,console.log("/onSubmit outTradeNo",this.outTradeNo),console.log("/onSubmit paymentId",this.paymentId),1==this.payMethod||await this.alipaySubmit())}}catch(t){console.error(t),this.$toast.fail(t.message||t)}this.submitLoading=!1}},async alipaySubmit(){try{let t="http://mall.sunonenight.com";t+="/order/list?status=1";let e=await n.a.alipaySumbit({out_trade_no:this.outTradeNo,subject:"支付金额: ￥"+(this.amount/100).toFixed(2),amount:this.amount,return_url:t});if(console.log("/alipaySubmit ret:",JSON.stringify(e,null,2)),0!==e.code)throw new Error(e.message||"调用支付宝失败");{let t=e.data.action;console.log("/alipaySubmit action:",t),location.href=t}}catch(t){return console.error(t.message),this.$toast.fail(t.message||"调用支付宝失败"),!1}},async wxpaySubmit(){},navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},payTypeChoose(){},payTypeSelect(t,e){console.log(t),console.log(e),this.payTypeText=t.name,this.payType=e,0==e&&(this.payMethod=0),this.payTypeShow=!1,this.checkSubmitBtn()},payMethodSelect(t){this.payMethod=t,this.checkSubmitBtn()},checkSubmitBtn(){0==this.payType||1==this.payType&&this.payMethod>0?this.submitDisabled=!1:this.submitDisabled=!0},failMessage(t){this.$dialog.alert({title:"提示",message:t}).then(()=>{this.navHome()})}},async created(){let t=this.$route.query.orderIds||this.$route.query.orderId;if(0===(t=t.split(",")).length)return void this.failMessage("获取订单信息错误");this.orders=[];for(let e=0;e<t.length;e++){let o=t[e];this.orderIds.push(o);try{let t=await n.a.getOrder({id:o});if(0!=t.code)throw console.log(o,t.message),new Error("获取订单信息错误");this.orders.push(t.data)}catch(t){return void this.failMessage("获取订单信息错误!")}}console.log("/create orders",this.orders);let e=0,o=0,r=0;this.orders.forEach(t=>{0!=t.status&&this.failMessage("已有订单处于不需要支付状态！"),e+=t.total,r+=t.score,o+=t.total-t.score}),this.total=e,this.amount=o,this.score=r}},c=o(2),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-nav-bar",{attrs:{title:"支付","left-text":"","left-arrow":t.leftArrow},on:{"click-left":t.navBack,"click-right":t.navHome}},[o("van-icon",{attrs:{slot:"right",name:"wap-home-o",size:"2rem"},slot:"right"})],1),t._ssrNode(' <div class="p-8 text-center"><div class="text-xl text-gray-500">需支付金额</div> <div class="text-6xl text-red-600 mt-4 mb-8">'+t._ssrEscape("￥ "+t._s((t.amount/100).toFixed(2)))+"</div></div> "),o("van-cell",{attrs:{title:"选择支付方式","is-link":"","arrow-direction":"down",value:t.payTypeText},on:{click:t.payTypeChoose}}),t._ssrNode(" "),1==t.payType?o("van-radio-group",{model:{value:t.payMethod,callback:function(e){t.payMethod=e},expression:"payMethod"}},[o("van-cell-group",[o("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(e){return t.payMethodSelect(1)}}},[o("van-radio",{attrs:{slot:"right-icon",name:1,"checked-color":"#07c160"},slot:"right-icon"})],1),t._v(" "),o("van-cell",{attrs:{title:"支付宝",clickable:""},on:{click:function(e){return t.payMethodSelect(2)}}},[o("van-radio",{attrs:{slot:"right-icon",name:2},slot:"right-icon"})],1)],1)],1):t._e(),t._ssrNode(" "),o("van-action-sheet",{attrs:{actions:t.payTypeActions,title:"选择支付方式"},on:{select:t.payTypeSelect},model:{value:t.payTypeShow,callback:function(e){t.payTypeShow=e},expression:"payTypeShow"}}),t._ssrNode(" "),o("van-submit-bar",{attrs:{price:t.total,"button-text":"确认支付",loading:t.submitLoading,disabled:t.submitDisabled},on:{submit:t.onSubmit}},[o("span",{attrs:{slot:"tip"},slot:"tip"})])],2)}),[],!1,null,null,"79a18832");e.default=component.exports}};