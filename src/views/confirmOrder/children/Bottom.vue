<template>
  <div class="bottom">
    <div class="all-price">
      <span>合计：</span>
      <span class="price">￥{{ allPrice }}</span>
    </div>
    <div class="pay" @click="toPay">
      提交订单
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  methods: {
    toPay(){
        this.$emit("toPay")
    }
  },
  computed: {
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
  }
}
</script>
<style lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  border-top: 1px solid #bbb;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 300;
  font-size: 14px;
  background-color: #fff;
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
    height: 50px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    margin-left: 10px;
    background-color: #a0c9aa;
  }
}
</style>
