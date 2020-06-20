<template>
  <div class="detail-bar">
    <div class="item">
      <i class="iconfont icon-kefu"></i>
      <span>客服</span>
    </div>
    <div class="item">
      <i class="iconfont icon-dianpu"></i>
      <span>店铺</span>
    </div>
    <div class="item">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </div>
    <div class="item add" @click='addCart'>加入购物车</div>
    <div class="item buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBar',
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  }
}
</script>
<style lang="scss">
/* css模块化导入方式 */
// @import '~assets/css/iconfont.css';
@import '../../../assets/css/iconfont.css';
.detail-bar {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ddd;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 102;
  align-items: center;
  background-color: #fff;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 14px;
    }
  }
  .add{
      width: 60px;
      height: 50px;
      line-height: 50PX;
      font-size: 14px;
      background-color: #E2EFE5;
      color: #A0C9AA;
  }
  .buy{
      height: 50px;
      line-height: 50px;
      background-color: #A0C9AA;
      color: white;
  }
}
</style>
