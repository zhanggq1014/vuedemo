<template>
  <div>
    <div class="goods-list" v-for="(itemInfo, index) in cartList" :key="index">
      <div class="goods-info">
        <div class="item-img">
          <img :src="itemInfo.imgUrl" alt="商品图片" />
        </div>
        <div class="shop-info">
          <div class="shop-title">{{ itemInfo.title }}</div>
          <div class="shop-bottom">
            <div class="shop-price">￥{{ itemInfo.price }}</div>
            <div class="shop-count">×{{ itemInfo.count }}</div>
          </div>
        </div>
      </div>
      <div class="marks">
        <div>
          <span class="marks-item">退货补运费</span
          ><span class="marks-item2">商家赠送</span>
        </div>
        <div>
          <span class="marks-item">延误必赔</span
          ><span class="marks-item2">商家赠送</span>
        </div>
        <div>
          <span class="marks-item">订单备注</span
          ><input type="text" class="marks-item2" />
        </div>
        <div><span class="all">合计：</span><span class="price">￥{{(itemInfo.price * itemInfo.count).toFixed(2)}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmOrderList',
  props: {
    cartList: {
      type: Array
    }
  },
  computed: {
      allPrice() {
      let s = 0
      this.cartList.forEach(e => {
        if (e.checked) {
          s = e.price * e.count
        }
      })
      return s.toFixed(2)
    }
  }
}
</script>
<style lang="scss">
.goods-list {
  width: 100%;
  .goods-info {
    width: 100%;
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
      .shop-bottom {
        margin-top: 45px;
        font-size: 14px;
        color: #a0c9aa;
        .shop-count {
          color: #888;
        }
      }
    }
  }
  .marks {
    width: 375.2px;
    div {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .marks-item {
      margin-left: 8px;
    }
    .marks-item2 {
      margin-right: 5px;
    }
    .all{
        margin-left: 60%;
    }
    .price{
        font-size: 12px;
        color: green;
        margin-right: 40px;
    }
  }
}
</style>
