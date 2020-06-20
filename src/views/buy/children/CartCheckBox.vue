<template>
  <div class="check-button" :class="{ active: value }" @click="selectItem">
    <div class="icon-selector">
      <div class="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCheckBox',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectItem() {
      this.$emit('checked')
    }
  }
}
</script>
<style lang="scss">
.check-button {
  display: flex;
  align-items: center;
  &.active .checkbox {
    width: 30px;
    height: 30px;
    background-image: url('../../../assets/imgs/duihao.png');
  }
  .checkbox {
    width: 30px;
    height: 30px;
    background-image: url('../../../assets/imgs/yuanquan.png');
    background-size: 30px 30px;
  }
}
</style>
