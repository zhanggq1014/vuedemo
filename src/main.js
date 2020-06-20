import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad: 1, //图片放大比例
  // error: require('') //后台拉取图片失败时展示的图片
  loading: require('./assets/imgs/加载中.svg'),
  attempt: 2
}) 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
