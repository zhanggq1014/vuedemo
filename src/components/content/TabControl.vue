<template>
  <div class="tab-control">
    <div class="item" v-for="(item, inx) in tabControlData" :key="inx" @click='currClass(inx)'>
      <span :class="{active:inx===currInx}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabControlData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
     return {
          currInx: 0
     }
  },
  methods: {
      currClass(inx){
          this.currInx = inx;
          this.$emit("clickTab",inx)
      }
  }
}
</script>
<style lang="scss" scoped>
.tab-control {
  display: flex;
  flex-direction: row;
//   align-items: center;
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
//   line-height: 40px;
  background-color: #fff;
  position: sticky;//浏览器原生滚动才有效
  z-index: 100;
  top:44px;
  .item {
    flex: 1;
    width: 100%;
    text-align: center;
    span{
        font-size: 14px;
        &.active{
            padding-bottom: 5px;
            color: #a0c9aa;
            border-bottom: 2px solid #a0c9aa;
        }
    }
  }
}
</style>
