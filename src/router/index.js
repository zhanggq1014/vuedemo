import Vue from 'vue'
import VueRouter from 'vue-router'

const Me = () => import(/* webpackChunkName: "me" */ 'views/me/Me.vue')
const Home = () => import(/* webpackChunkName: "home" */ 'views/home/Home.vue')
const Cate = () => import(/* webpackChunkName: "cate" */ 'views/cate/Cate.vue')
const Buy = () => import(/* webpackChunkName: "buy" */ 'views/buy/Buy.vue')
const Detail = () => import(/* webpackChunkName: "detail" */ 'views/detail/Detail')
const ConfirmOrder = () => import(/* webpackChunkName: "confirmOrder" */ 'views/confirmOrder/ConfirmOrder')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/cate',
    name: 'Cate',
    component: Cate
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path:'/detail',
    name:'Detail',
    component: Detail
  },
  {
    path:'/confirmOrder',
    name:'ConfirmOrder',
    component: ConfirmOrder
  }
]

const router = new VueRouter({
  routes
})

export default router
