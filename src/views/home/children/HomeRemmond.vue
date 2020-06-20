<template>
  <div class="remmond">
    <div class="remmond-item" v-for="(item, inx) in remmondData" :key="inx">
      <img :src="item.backgroundImage" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRemmond',
  props: ['remmondData']
}
</script>
<style lang="scss">
.remmond {
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background-color: #fff;
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  span {
    font-size: 14px;
  }
}
</style>
