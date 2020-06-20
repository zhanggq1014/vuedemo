<template>
  <div class="popular-all">
    <slot name="title"></slot>
    <div class="popular">
      <div class="popular-item" v-for="(item, inx) in popularData" :key="inx">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePopular',
  props: ['popularData']
}
</script>
<style lang="scss">
.popular-all {
  background-color: #fff;
  margin-top: 10px;
  width: 100%;
  height: 300px;
  .popular {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .popular-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  img {
    width: 60;
    height: 60px;
  }
  span {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>
