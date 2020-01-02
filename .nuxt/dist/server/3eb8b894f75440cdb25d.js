exports.ids=[2],exports.modules={34:function(t,e,r){"use strict";var d=r(16);e.a={authLogin:async data=>await d.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await d.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await d.a.post("/api/user/data/infoApp",data),addressList:async data=>await d.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await d.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await d.a.post("/api/user/message/update",data),addressUpdate:async data=>await d.a.post("/api/user/address/update",data),addressDelete:async data=>await d.a.post("/api/user/address/delete",data),cartItems:async()=>await d.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await d.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await d.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await d.a.post("/cart/clear"),getCategorys:async()=>await d.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await d.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await d.a.post("/api/user/invite/getCode"),createOrder:async data=>await d.a.post("/api/mall/order/create",data),cancelOrder:async data=>await d.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await d.a.post("/api/mall/order/finish",data),getOrder:async data=>await d.a.post("/api/mall/order/detail",data),getOrderList:async data=>await d.a.post("/api/mall/order/list",data),createPayment:async data=>await d.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await d.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await d.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await d.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await d.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await d.a.post("/api/mall/profit/list",data)}},35:function(t,e,r){"use strict";var d=r(32),o=r.n(d);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],d=function(t,e,o){for(var i=0;i<t.length;i++){var n=t[i];if(n.pid==e){n.level=o,n.html="";for(let t=0;t<o;t++)n.html+=" -- ";r.push(n),d(t,n.id,o+1)}}};return d(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,o()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return o()(r).format(e)}},monthPlus(t,e=1,r=!0){let d=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(t,"YYYY")),n=parseInt(this.dateFormat(t,"MM")),l=parseInt(this.dateFormat(t,"DD"));d[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let c=0;c+=d[n-1]-l;for(let i=0;i<e;i++){(n+=1)>12&&(n=1,o+=1),d[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let t=d[n-1];i==e-1&&(t=t-l<0?t:l),console.log("for days:",t),c+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*c*3600:c},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},59:function(t,e,r){"use strict";r.r(e);var d=r(34),o={head:()=>({title:"地址管理"}),data:()=>({chosenAddressId:0,list:[],addressList:[]}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},onAdd(){this.$store.commit("addressSet",{});this.$router.push("/address/update")},onEdit(t){t.id;this.addressList.forEach(address=>{address.id==t.id&&this.$store.commit("addressSet",address)});this.$router.push("/address/update")},onSelect(t){t.id;this.addressList.forEach(address=>{address.id==t.id&&this.$store.commit("addressSet",address)}),this.$route.query.jump&&this.$router.go(-1)}},async created(){let t=await d.a.addressList();if(console.log("/created ret:",t),0==t.code){t.data.rows.forEach(t=>{this.addressList.push(t),this.list.push({id:t.id,name:t.name,tel:t.tel,address:t.province+t.city+t.county+t.addressDetail})})}let e=this.$store.state.address;e&&e.id&&(this.chosenAddressId=e.id)}},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"地址管理","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),r("van-address-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],2)}),[],!1,null,null,"3ffa7c46");e.default=component.exports}};