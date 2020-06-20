<template>
  <div class="con-ord">
    <i class="iconfont icon-fanhui back" @click="back"></i>
    <nav-bar class="nav-bar">
      <div slot="center">确认订单</div>
    </nav-bar>
    <div class="address">
      <p>
        请选择收货地址: <span>{{ str }}</span>
      </p>
      <img
        src="../../assets/imgs/加号.png"
        alt=""
        @click="choose"
        v-show="show1"
      />
    </div>
    <choose-area :show="show" @addrMsg="addrMsg"></choose-area>
    <confirm-order-list :cartList="cartList"></confirm-order-list>
    <bottom></bottom>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import ChooseArea from './children/ChooseArea'
import ConfirmOrderList from './children/ConfirmOrderList'
import Bottom from './children/Bottom'
export default {
  name: 'ConfirmOrder',
  data() {
    return {
      str: '',
      show: false,
      show1: true,
      cartList: this.$store.state.cartList
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    choose() {
      this.show = !this.show
    },
    addrMsg(v) {
      console.log(v)
      this.str = v
      this.show1 = false
    }
  },
  components: {
    NavBar,
    ChooseArea,
    ConfirmOrderList,
    Bottom
  }
}
</script>
<style lang="scss">
.con-ord {
  i {
    position: absolute;
    z-index: 200;
    top: 12px;
    left: 10px;
    color: white;
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
  .address {
    width: 100%;
    height: 40px;
    font-size: 12px;
    border-bottom: 1px solid #aaa;
    display: flex;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
    p {
      padding-left: 5px;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
