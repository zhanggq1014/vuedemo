<template>
  <div class="base-info">
    <p>{{ goods.title }}</p>
    <div class="price">
      <span class="now-price">￥{{ goods.lowNowPrice }}</span>
      <span class="old-price">{{ goods.highPrice }}</span>
       <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.base-info {
  background-color: #fff;
  padding-top: 20px;
  p {
    margin: 0 5px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .price{
      margin-top: 10px;
      .now-price{
          font-size: 26px;
          color: #A0C9AA;
      }
      .old-price{
          text-decoration: line-through;
          color: #ccc;
          margin-left: 5px;
      }
  }
}
</style>
