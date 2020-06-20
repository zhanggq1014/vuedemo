<template>
  <div class="detail-nav-bar">
    <i class="iconfont icon-fanhui back" @click="back"></i>
    <div
      class="item"
      v-for="(item, inx) in detailNavBarData"
      :key="inx"
      @click="currClass(inx)"
    >
      <span :class="{ active: inx === currInx }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailNavBar',
  props: {
    currInx: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      detailNavBarData: ['商品', '参数', '评论']
    }
  },
  methods: {
    currClass(inx) {
      this.$emit('clickTab', inx)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/iconfont.css';
.detail-nav-bar {
  position: fixed;
  top:0;
  z-index:101;
  width: 100%;
  display: flex;
  flex-direction: row;
  //   align-items: center;
  height: 40px;
  line-height: 40px;
  //   line-height: 40px;
  background-color: #fff;
  .item {
    flex: 1;
    width: 100%;
    text-align: center;
    span {
      font-size: 14px;
      &.active {
        color: #a0c9aa;
      }
    }
  }
}
</style>
