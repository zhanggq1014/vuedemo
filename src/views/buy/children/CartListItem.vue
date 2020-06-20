<template>
  <div class="shop-item">
    <cart-check-box
      class="checkbox"
      :value="itemInfo.checked"
      @checked="checkBtn"
    ></cart-check-box>
    <div class="item-img">
      <img :src="itemInfo.imgUrl" alt="商品图片" />
    </div>
    <div class="shop-info">
      <div class="shop-title">{{ itemInfo.title }}</div>
      <div class="shop-desc">商品描述：{{ itemInfo.desc }}</div>
      <div class="shop-bottom">
        <div class="shop-price">￥{{ itemInfo.price }}</div>
        <div class="shop-count">×{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBox from './CartCheckBox'
export default {
  name: 'CartListItem',
  props: {
    itemInfo: {}
  },
  components: {
    CartCheckBox
  },
  methods: {
    checkBtn() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>
<style lang="scss">
.shop-item {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bbb;
  padding-top: 10px;
  .checkbox {
    margin-left: 2px;
  }
  img {
    width: 80px;
    height: 100px;
    border-radius: 7px;
    margin-left: 5px;
  }
  .shop-info {
    height: 110px;
    margin-left: 10px;
    .shop-title,
    .shop-desc {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 16px;
    }
    .shop-desc {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }
    .shop-bottom {
      margin-top: 20px;
      font-size: 14px;
      color: #a0c9aa;
      .shop-count {
        color: #888;
      }
    }
  }
}
</style>
