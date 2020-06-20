<template>
  <div class="shop-info">
    <div class="shop-info-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info-center">
      <div class="csells">
        <p>{{ shopInfo.cSells }}</p>
        <p>总销量</p>
      </div>
      <div class="all-shop">
        <p>{{ shopInfo.cGoods }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="score">
        <p v-for="(item, inx) in shopInfo.score" :key="inx">
          <span>{{ item.name }}</span>
          <span class="better1" :class="{'better3':item.isBetter}">{{ item.score }}</span>
          <span class="better2" :class="{'better4':item.isBetter}">{{ item.isBetter ? '高' : '低' }}</span>
        </p>
      </div>
    </div>
    <div class="shop-info-bottom">
        进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.shop-info {
  width: 100%;
  height: 250px;
  background-color: #fff;
  margin-bottom: 10px;
  .shop-info-top {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 20px;
      margin-top: 30px;
    }
    span {
      margin-top: 30px;
      margin-left: 12px;
    }
  }
  .shop-info-center {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .csells {
      margin-left: 25px;
      text-align: center;
    }
    .all-shop {
      margin-left: 35px;
      text-align: center;
      border-right: 1px solid #bbb;
      padding-right: 25px;
    }
    .score {
      margin-left: 20px;
      span {
        margin-left: 10px;
      }
      .better1 {
        color: #8ec16f;
      }
      .better2 {
        color: white;
        background-color: #88be67;
      }
      .better3 {
        color: red;
      }
      .better4 {
        color: white;
        background-color: red;
      }
    }
  }
  .shop-info-bottom{
      width: 200px;
      height: 30px;
      margin: 0 auto;
      background-color: #ddd;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
      margin-top: 20px;
  }
}
</style>
