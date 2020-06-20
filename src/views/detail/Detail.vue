<template>
  <div class="detail">
    <!-- 定位的购物车 -->
    <img src="../../assets/imgs/圆形购物车.png" alt="" class="cart-img" @click="toCart"/>
    <!-- 导航条 -->
    <detail-nav-bar
      :currInx="currInx"
      @clickTab="clickTab"
      class="nav-bar"
    ></detail-nav-bar>
    <scroll
      class="wrapper"
      ref="scroll"
      :click="true"
      :probeType="3"
      @showClone="scroll"
    >
      <!-- 轮播图 -->
      <detail-swiper :swiperData="swiperData" ref="goods"></detail-swiper>
      <!-- 基本信息 -->
      <detail-base-info :goods="baseInfo"></detail-base-info>
      <!-- 服务信息 -->
      <detail-serve-info :serves="serves"></detail-serve-info>
      <!-- 商家信息 -->
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <!-- 商品信息 -->
      <detail-goods-info
        :goodsInfo="goodsInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <!-- 尺码信息 -->
      <detail-params-info
        :paramsRuleInfo="paramsRuleInfo"
        :paramsInfo="paramsInfo"
        ref="params"
      ></detail-params-info>
      <!-- 买家评价 -->
      <detail-rate-info :rateInfo="rateInfo" ref="rate"></detail-rate-info>
    </scroll>
    <detail-bar class="detail-bar" @addCart="addToCart"></detail-bar>
    <toast v-show="toastShow" :toastInfo="toastInfo"></toast>
  </div>
</template>

<script>
import DetailNavBar from '../detail/children/DetailNavBar'
import DetailSwiper from '../detail/children/DetailSwiper'
import DetailBaseInfo from '../detail/children/DetailBaseInfo'
import DetailServeInfo from '../detail/children/DetailServeInfo'
import DetailShopInfo from '../detail/children/DetailShopInfo'
import DetailGoodsInfo from '../detail/children/DetailGoodsInfo'
import DetailParamsInfo from '../detail/children/DetailParamsInfo'
import DetailRateInfo from '../detail/children/DetailRateInfo'
import DetailBar from '../detail/children/DetailBar'
import Scroll from '../../components/common/Scroll'
import Toast from '../../components/common/Toast'
import { getDetailData } from '../../network/detail'
export default {
  name: 'Detail',
  data() {
    return {
      currInx: 0,
      swiperData: [],
      baseInfo: {},
      serves: [],
      shopInfo: {},
      goodsInfo: {},
      paramsRuleInfo: [],
      paramsInfo: {},
      rateInfo: [],
      offsetTopYs: [],
      toastInfo: '添加成功',
      toastShow: false
    }
  },
  created() {
    let id = this.$route.query.id
    // console.log(this.$route.query.id)
    getDetailData(id).then(res => {
      console.log(res)
      this.swiperData = res.data.result.topImages
      this.baseInfo = res.data.result.itemInfo
      this.serves = res.data.result.itemServices.services
      this.shopInfo = res.data.result.shopInfo
      this.goodsInfo = res.data.result.detailInfo
      this.paramsRuleInfo = res.data.result.itemParams.rule.tables[0]
      this.paramsInfo = res.data.result.itemParams.info.set
      this.rateInfo = res.data.result.rateInfo.list
    })
  },
  mounted() {},
  methods: {
    clickTab(inx) {
      this.currInx = inx
      //点击让页面滚动到对应的位置
      this.$refs.scroll.scroll.scrollTo(0, -this.offsetTopYs[inx], 500) //scrollTo(x坐标,y坐标,动画时长-毫秒值)
    },
    scroll(pos) {
      //滚到到对应位置，按钮自动切换
      // console.log(pos)
      this._listenScroll(-pos.y)
    },
    //滚到到对应位置，按钮自动切换
    _listenScroll(y) {
      for (let i = 0, len = this.offsetTopYs.length; i < len; i++) {
        let f1 =
          y >= this.offsetTopYs[i] &&
          y < this.offsetTopYs[i + 1] &&
          i !== len - 1
        let f2 = i === len - 1 && y > this.offsetTopYs[i]
        if (f1 || f2) {
          this.currInx = i
          break
        }
      }
    },
    imgLoad() {
      // let goodsTop = this.$refs.goods.$el.offsetTop
      // let paramsTop = this.$refs.params.$el.offsetTop
      // let rateTop = this.$refs.rate.$el.offsetTop
      // console.log(goodsTop,paramsTop,rateTop)
      this.offsetTopYs.push(this.$refs.goods.$el.offsetTop)
      this.offsetTopYs.push(this.$refs.params.$el.offsetTop)
      this.offsetTopYs.push(this.$refs.rate.$el.offsetTop)
    },
    // 添加购物车
    addToCart() {
      //1.添加到购物车
      let e = {
        id: this.baseInfo.itemId,
        imgUrl: this.swiperData[0],
        title: this.baseInfo.title,
        desc: this.baseInfo.desc,
        price: this.baseInfo.lowNowPrice,
      }
      this.$store.commit('addCart',e)
      //2.提示框
      this.toastShow = true
      setTimeout(() => {
        this.toastShow = false
      }, 1000)
    },
    //点击购物车图标进入购物车页面
    toCart(){
        this.$router.push('/buy')
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailServeInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailRateInfo,
    DetailBar,
    Scroll,
    Toast
  }
}
</script>
<style lang="scss">
.detail {
  width: 100%;
  background-color: #eee;
  position: relative;
  .cart-img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 200;
  }
  .wrapper {
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 94px);
    position: relative; //让轮播的位置计算参照父容器
  }
}
</style>
