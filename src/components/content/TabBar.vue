<template>
  <div class="tab-bar">
    <router-link to="/home" class="item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/cate" class="item">
      <i class="iconfont icon-cate"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/buy" class="item">
      <i class="iconfont icon-buy"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/me" class="item">
      <i class="iconfont icon-me"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>
<style lang="scss">
/* css模块化导入方式 */
// @import '~assets/css/iconfont.css';
@import '../../assets/css/iconfont.css';
.tab-bar {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ddd;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 101;
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
    &.router-link-active {
      color: forestgreen;
    }
  }
}
</style>
