<template>
  <swiper class="home-swiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in swiperData" :key='index'>
      <img :src="item.image_800" alt="轮播图片">
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
  name: 'HomeSwiper',
  props: ['swiperData'],
  data(){
      return {
          swiperOption: {
              autoplay: 3000,
              pagination: '.swiper-pagination',
              paginationClickable: true
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
    .home-swiper{
      height: 130px;
        img{
            width: 100%;
            height: 130px;
        }
        //圆点的格式
        .swiper-pagination-bullet{
            background-color: #fff;
            opacity: 0.2;
        }
        //当前圆点的格式
         .swiper-pagination-bullet-active{
             background-color: #fff;
             opacity: 0.8;
         }
    }
</style>
