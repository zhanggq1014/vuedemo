import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state
const state = {
  cartList: [] //表示购物车列表数据
}

//actions(一般在action中请求后台api)
const actions = {}

//mutations
const mutations = {
  //添加商品到购物车(接收传递过来的对象，添加到CartList中)
  addCart(state, e) {
    // state.cartList.push(n)
    // 检查商品是否已经添加过
    let t = state.cartList.find(item => item.id === e.id)
    if (t) {
      //存在
      t.count += 1
    } else {
      // 不存在
      e.count = 1
      e.checked = false //初始状态未勾选
      state.cartList.push(e)
    }
  }
}
//创建store对象
const store = new Vuex.Store({
  state,
  actions,
  mutations
})
export default store
