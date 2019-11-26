import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51e7edf7 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5243c3ae = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _056e35b4 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _4d1a2ba4 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _1be0cb70 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _ebddd4c4 = () => interopDefault(import('../pages/protocol.vue' /* webpackChunkName: "pages/protocol" */))
const _e8bc5542 = () => interopDefault(import('../pages/address/list.vue' /* webpackChunkName: "pages/address/list" */))
const _4211a9ca = () => interopDefault(import('../pages/address/update.vue' /* webpackChunkName: "pages/address/update" */))
const _fc6c94b6 = () => interopDefault(import('../pages/demo/page.vue' /* webpackChunkName: "pages/demo/page" */))
const _10482b20 = () => interopDefault(import('../pages/download/app.vue' /* webpackChunkName: "pages/download/app" */))
const _9370c7a0 = () => interopDefault(import('../pages/goods/detail.vue' /* webpackChunkName: "pages/goods/detail" */))
const _769717da = () => interopDefault(import('../pages/invite/join.vue' /* webpackChunkName: "pages/invite/join" */))
const _3612672e = () => interopDefault(import('../pages/order/confirm.vue' /* webpackChunkName: "pages/order/confirm" */))
const _02b28138 = () => interopDefault(import('../pages/order/detail.vue' /* webpackChunkName: "pages/order/detail" */))
const _8f44da76 = () => interopDefault(import('../pages/order/list.vue' /* webpackChunkName: "pages/order/list" */))
const _36b01db6 = () => interopDefault(import('../pages/user/address.vue' /* webpackChunkName: "pages/user/address" */))
const _5d687148 = () => interopDefault(import('../pages/user/info.vue' /* webpackChunkName: "pages/user/info" */))
const _64887eb7 = () => interopDefault(import('../pages/user/invite.vue' /* webpackChunkName: "pages/user/invite" */))
const _48610f1c = () => interopDefault(import('../pages/user/profit.vue' /* webpackChunkName: "pages/user/profit" */))
const _19413690 = () => interopDefault(import('../pages/user/withdraw.vue' /* webpackChunkName: "pages/user/withdraw" */))
const _719fc8bc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _51e7edf7,
    name: "about"
  }, {
    path: "/auth",
    component: _5243c3ae,
    name: "auth"
  }, {
    path: "/cart",
    component: _056e35b4,
    name: "cart"
  }, {
    path: "/list",
    component: _4d1a2ba4,
    name: "list"
  }, {
    path: "/payment",
    component: _1be0cb70,
    name: "payment"
  }, {
    path: "/protocol",
    component: _ebddd4c4,
    name: "protocol"
  }, {
    path: "/address/list",
    component: _e8bc5542,
    name: "address-list"
  }, {
    path: "/address/update",
    component: _4211a9ca,
    name: "address-update"
  }, {
    path: "/demo/page",
    component: _fc6c94b6,
    name: "demo-page"
  }, {
    path: "/download/app",
    component: _10482b20,
    name: "download-app"
  }, {
    path: "/goods/detail",
    component: _9370c7a0,
    name: "goods-detail"
  }, {
    path: "/invite/join",
    component: _769717da,
    name: "invite-join"
  }, {
    path: "/order/confirm",
    component: _3612672e,
    name: "order-confirm"
  }, {
    path: "/order/detail",
    component: _02b28138,
    name: "order-detail"
  }, {
    path: "/order/list",
    component: _8f44da76,
    name: "order-list"
  }, {
    path: "/user/address",
    component: _36b01db6,
    name: "user-address"
  }, {
    path: "/user/info",
    component: _5d687148,
    name: "user-info"
  }, {
    path: "/user/invite",
    component: _64887eb7,
    name: "user-invite"
  }, {
    path: "/user/profit",
    component: _48610f1c,
    name: "user-profit"
  }, {
    path: "/user/withdraw",
    component: _19413690,
    name: "user-withdraw"
  }, {
    path: "/",
    component: _719fc8bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
