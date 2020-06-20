<template>
  <div class="cart-bottom">
    <div class="all-select">
      <cart-check-box
        :value="isAllSelect"
        @checked="allSelect"
      ></cart-check-box>
      <span>全选</span>
    </div>
    <div class="all-price">
      <span>合计：</span>
      <span class="price">￥{{ allPrice }}</span>
    </div>
    <div class="pay" @click="toPay">
      去结算
    </div>
  </div>
</template>

<script>
import CartCheckBox from './CartCheckBox'
export default {
  name: 'CartBottom',
  methods: {
    allSelect() {
      if (this.$store.state.cartList.every(e => e.checked)) {
        this.$store.state.cartList.forEach(e => {
          e.checked = false
        })
      } else {
        this.$store.state.cartList.forEach(e => {
          e.checked = true
        })
      }
    },
    toPay(){
        this.$emit("toPay")
    }
  },
  computed: {
    isAllSelect() {
      return this.$store.state.cartList.every(e => e.checked)
    },
    allPrice() {
      let s = 0
      this.$store.state.cartList.forEach(e => {
        if (e.checked) {
          s += e.price * e.count
        }
      })
      return s.toFixed(2)
    }
  },
  components: {
    CartCheckBox
  }
}
</script>
<style lang="scss">
.cart-bottom {
  width: 100%;
  height: 45px;
  border-top: 1px solid #bbb;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 50px;
  font-size: 14px;
  .all-select {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    span {
      margin-left: 2px;
    }
  }
  .all-price {
    margin-left: 70px;
    .price {
      color: #a0c9aa;
    }
  }
  .pay {
    position: absolute;
    right: 0;
    width: 123px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    margin-left: 10px;
    background-color: #a0c9aa;
  }
}
</style>
