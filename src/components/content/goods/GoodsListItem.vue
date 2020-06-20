<template>
  <div class="goods-list-item" @click="toDetail">
    <div class="pics">
      <!-- <img :src="dataItem.img" alt="" /> -->
      <!-- 图片懒加载 -->
      <img v-lazy="dataItem.img" alt="" />
      <span class="sale-num">已售{{ dataItem.sale }}</span>
    </div>
    <div class="introduce">
      <div class="title">{{ dataItem.title }}</div>
      <div class="info">
        <span class="price">&yen;{{ dataItem.price }}</span>
        <span class="like">☆{{ dataItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: ['dataItem'],
  methods: {
    toDetail() {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.dataItem.iid
        }
      })
    }
  }
}
</script>
<style lang="scss">
.goods-list-item {
  width: 45%;
  .pics {
    position: relative;
    img {
      width: 100%;
      height: 270px;
    }
    .sale-num {
      position: absolute;
      left: 0;
      bottom: 10px;
      padding: 5px 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
  .introduce {
    .title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 16px;
      margin: 10px 0;
    }
    .info {
      margin-bottom: 15px;
      .price {
        color: limegreen;
        margin-right: 60px;
      }
    }
  }
}
</style>
