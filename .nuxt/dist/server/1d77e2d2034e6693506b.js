exports.ids=[9],exports.modules={51:function(e,t,r){"use strict";r.r(t);var o={data:()=>({}),beforeCreate(){this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0})},async created(){document.addEventListener("UniAppJSBridgeReady",()=>{console.log("created UniAppJSBridgeReady ................."),this.$store.commit("isAppSet",!0)});let e=this.$route.query.jump||"";if(console.log("/created jump:",e),e){let t=decodeURIComponent(e);console.log("/created jumpUrl:",t),this.$router.replace(t)}else this.$router.replace("/list");this.$toast.clear()}},l=r(2),component=Object(l.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",[])}),[],!1,null,null,"568ccdfe");t.default=component.exports}};