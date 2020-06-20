<template>
  <div class="cart">
    <i class="iconfont icon-fanhui back" @click="back"></i>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list :cartList='cartList' class="cart-list"></cart-list>
    <cart-bottom @toPay="toPay"></cart-bottom>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import CartList from '../buy/children/CartList'
import CartBottom from './children/CartBottom'
export default {
  name: 'Buy',
  data(){
    return {
      cartList: this.$store.state.cartList
    }
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1)
    },
    toPay(){
      this.$router.push('/ConfirmOrder')
    }
  },
  computed: {
    cartCount(){
      return this.$store.state.cartList.length
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottom
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/iconfont.css';
.cart {
  i{
    position: absolute;
    z-index: 200;
    top: 12px;
    left: 10px;
    color:white;
  }
  .nav-bar {
    width: 100%;
    background-color: #a0c9aa;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
  .cart-list{
    margin-top: 44px;
  }
}
</style>
