exports.ids=[8],exports.modules={34:function(t,e,o){"use strict";var r=o(16);e.a={authLogin:async data=>await r.a.post("/api/user/auth/register",data),getUserInfo:async()=>await r.a.post("/api/user/data/infoApp",data),addressList:async()=>await r.a.post("/api/user/address/listUser"),addressUpdate:async data=>await r.a.post("/api/user/address/update",data),addressDelete:async data=>await r.a.post("/api/user/address/delete",data),cartItems:async()=>await r.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await r.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await r.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await r.a.post("/cart/clear"),getCategorys:async()=>await r.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await r.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await r.a.post("/api/user/invite/getCode"),createOrder:async data=>await r.a.post("/api/mall/order/create",data),cancelOrder:async data=>await r.a.post("/api/mall/order/cancel",data),getOrder:async data=>await r.a.post("/api/mall/order/detail",data),getOrderList:async data=>await r.a.post("/api/mall/order/list",data),createPayment:async data=>await r.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await r.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await r.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await r.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await r.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await r.a.post("/api/mall/profit/list",data)}},35:function(t,e,o){"use strict";var r=o(32),n=o.n(r);e.a={formatPrice:t=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var o=[],r=function(t,e,n){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==e){c.level=n,c.html="";for(let t=0;t<n;t++)c.html+=" -- ";o.push(c),r(t,c.id,n+1)}}};return r(t,e,0),o},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let o=null;return o=t?new Date(1e3*t):new Date,n()(o).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",o=new Date(1e3*t);return n()(o).format(e)}},monthPlus(t,e=1,o=!0){let r=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),c=parseInt(this.dateFormat(t,"MM")),l=parseInt(this.dateFormat(t,"DD"));r[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let d=0;d+=r[c-1]-l;for(let i=0;i<e;i++){(c+=1)>12&&(c=1,n+=1),r[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=r[c-1];i==e-1&&(t=t-l<0?t:l),console.log("for days:",t),d+=t}return o?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},36:function(t,e,o){"use strict";e.a={cartItems(){let t=plus.storage.getItem("cart");return t?JSON.parse(t):[]},cartItemPlus(t,e=1){let o=this.cartItems(),body={...t,num:e},r=body.id,n=!1;for(let t=0;t<o.length;t++){let c=o[t];c.id==r&&(c.num+=e,n=!0)}return n||o.push({id:body.id,num:body.num,cover:body.cover,title:body.title,desc:body.description||"",price:body.price,price_market:body.price_market,business_id:body.business_id,stock:body.stock||-1}),plus.storage.setItem("cart",JSON.stringify(o)),o},cartItemMinus(t,e=1){let o=this.cartItems(),r={...t,num:e}.id,n=-1;for(let t=0;t<o.length;t++){let c=o[t];c.id==r&&(c.num>e?c.num-=e:n=t)}return n>-1&&o.splice(n,1),console.log("/cartItemMinus",JSON.stringify(t,null,2)),plus.storage.setItem("cart",JSON.stringify(o||[])),o},cartClear:()=>(plus.storage.setItem("cart",""),[])}},42:function(t,e,o){"use strict";o.r(e);var r=o(16),n=o(34),c=o(35),l=o(36),d={head:()=>({title:"商品详情"}),data:()=>({isLoading:!1,show:!1,actionType:0,num:1,goods:{title:"",price:0,cover:"",stock:"",express:"免运费",pics:[]},buyCount:""}),methods:{...c.a,async onRefresh(){try{await this.getGoodsInfo(this.$route.query.id),this.$toast.success("刷新成功")}catch(t){this.$toast.fail("刷新失败，请稍后重试")}this.isLoading=!1},formatPrice(){return"¥"+(this.goods.price/100).toFixed(2)},navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},addCart(){this.goods.id?(this.actionType=1,this.show=!0):this.$toast.fail("商品信息获取失败，请稍后刷新重试")},goBuy(){this.goods.id?(this.actionType=2,this.show=!0):this.$toast.fail("商品信息获取失败，请稍后刷新重试")},async doAction(){if(1==this.actionType){try{this.$store.state.isApp?l.a.cartItemPlus(this.goods,this.num):await n.a.cartItemPlus(this.goods,this.num)}catch(t){return console.log(t),this.$toast.fail("添加购物车失败，请稍后刷新重试"),!1}this.show=!1,this.goCart()}else if(2==this.actionType){let t=[{...this.goods,num:this.num}];this.$store.commit("orderDatasSet",t),this.$router.push("/order/confirm?isBuy=1")}},goCart(){console.log("/goCart isApp:",this.$store.state.isApp),this.$router.push("/cart?from="+this.$route.query.from)},onClickIcon(){},async getGoodsInfo(t){let e=await r.a.post("/api/mall/goods/detail",{id:t});return 0===e.code?(this.goods=e.data,this.goods.package_level>0?(this.goods.buy_limit=1,this.buyCount=1):this.buyCount=-1==this.goods.stock?1e4:this.goods.stock):this.$toast.fail("获取商品信息失败"),e}},async created(){let t=this.$route.query.id;console.log("/created id",t);let e=await this.getGoodsInfo(t);0!==e.code?setTimeout(()=>{this.navBack()},1e3):1!=e.data.status&&(this.$toast.fail("商品已下架"),setTimeout(()=>{this.navBack()},1e3))}},h=o(2),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pb-20"},[o("van-nav-bar",{attrs:{title:"商品详情","left-text":"","left-arrow":""},on:{"click-left":t.navBack,"click-right":t.navHome}},[o("van-icon",{attrs:{slot:"right",name:"wap-home-o",size:"20"},slot:"right"})],1),t._ssrNode(" "),o("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[o("van-image",{attrs:{src:t.goods.cover},scopedSlots:t._u([{key:"loading",fn:function(){return[o("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),t._v(" "),o("van-cell-group",[o("van-cell",[o("div",{staticClass:"goods-title text-black text-2xl"},[t._v(t._s(t.goods.title))]),t._v(" "),o("div",{staticClass:"goods-price"},[o("span",{staticClass:"text-red-500"},[t._v(t._s(t.formatPrice(t.goods.price)))]),t._v(" "),o("span",{staticClass:"text-gray-400 line-through"},[t._v(t._s(t.formatPrice(t.goods.price)))])])]),t._v(" "),o("van-cell",{staticClass:"goods-express text-gray-400"},[o("van-col",{staticClass:"text-gray-400",attrs:{span:"10"}},[t._v("运费：")]),t._v(" "),o("van-col",{staticClass:"text-gray-400",attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.stock))])],1)],1),t._v(" "),o("van-cell-group",{staticClass:"goods-cell-group"},[o("van-cell",[o("van-col",{staticClass:"text-gray-600",attrs:{span:"24"}},[t._v(t._s(t.goods.description))])],1)],1)],1),t._ssrNode(" "),o("van-goods-action",[o("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),t._v(" "),o("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.goCart}}),t._v(" "),0==t.goods.package_level?o("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}):t._e(),t._v(" "),o("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.goBuy}})],1),t._ssrNode(" "),o("van-popup",{staticClass:"pt-8",attrs:{closeable:"","close-icon":"close",position:"bottom",round:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"mt-8"},[o("van-cell-group",[o("van-cell",{attrs:{title:"购买数量"}},[o("template",{slot:"default"},[o("van-stepper",{attrs:{integer:"",max:t.buyCount},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1)],2)],1),t._v(" "),o("div",{staticClass:"p-8"},[o("van-button",{attrs:{round:"",color:"linear-gradient(to right, #ff8917, #ff6034)",block:""},on:{click:t.doAction}},[t._v("确定")])],1)],1)])],2)}),[],!1,null,null,"0aa888ae");e.default=component.exports}};