<template>
  <swiper class="home-swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in swiperData" :key="index">
      <img :src="item" alt="轮播图片" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import Vue from 'vue'
import VueAweSomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAweSomeSwiper)

export default {
  name: 'DetailSwiper',
  props: ['swiperData'],
  data() {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1.5,
        spaceBetween: 20
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
.home-swiper {
  height: 350px;
  background-color: #fff;
  img {
    width: 250px;
    height: 350px;
  }
  //圆点的格式
  .swiper-pagination {
    text-align: left;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.2;
  }
  //当前圆点的格式
  .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 0.8;
  }
}
</style>
