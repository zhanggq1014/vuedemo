<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav">
      <div slot="center" class="nav">时尚街</div>
    </nav-bar>
    <tab-control
      ref="tabControl2"
      class="clone-tab-control"
      v-show="cloneTabControlIsShow"
      :tabControlData="tabControlData"
      @clickTab="clickTab"
    ></tab-control>
    <scroll
      ref="scroll"
      class="wrapper"
      :pullUpLoad="true"
      :click="true"
      :probeType="3"
      @showClone="showClone1"
      @pullUp="loadMore"
    >
      <!-- 轮播 -->
      <home-swiper :swiperData="swiperData"></home-swiper>
      <!-- 推荐 -->
      <home-remmond :remmondData="remmondData"></home-remmond>
      <!-- 本周流行 -->
      <home-popular :popularData="popularData">
        <h3 slot="title">本周流行</h3>
      </home-popular>
      <!-- 中间选项卡 -->
      <tab-control
        ref="tabControl1"
        :tabControlData="tabControlData"
        @clickTab="clickTab"
      ></tab-control>
      <!-- 商品列表 -->
      <goods-list :data="this.goods[this.tabCurrType].list"></goods-list>
      <div>没有更多数据了！！！</div>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
import Scroll from '../../components/common/Scroll'
import HomeSwiper from './children/HomeSwiper'
import HomeRemmond from './children/HomeRemmond'
import HomePopular from './children/HomePopular'
import TabControl from '../../components/content/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import {
  getSwiperData,
  getRemmondData,
  getPopularData,
  getGoodsData
} from '../../network/home'

export default {
  name: 'Home',
  data() {
    return {
      cloneTabControlIsShow: false,
      swiperData: [],
      remmondData: [],
      popularData: [],
      tabControlData: ['流行', '新款', '经典'],
      tabControlDataEn: ['pop', 'new', 'classic'],
      goods: {
        pop: { list: [], totalPages: 0, page: 0 },
        new: { list: [], totalPages: 0, page: 0 },
        classic: { list: [], totalPages: 0, page: 0 }
      },
      tabCurrType: 'pop', //表示当前的type类型
      tabControlOffsetTop: 0
    }
  },
  created() {
    this.getSwiperData()
    this.getRemmondData()
    this.getPopularData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('classic')
  },
  mounted() {
    this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
    console.log(this.tabControlOffsetTop)
  },
  methods: {
    getSwiperData() {
      getSwiperData().then(res => {
        // console.log(res)
        if (res.success) {
          this.swiperData = res.data[140378].list
        }
      })
    },
    getRemmondData() {
      getRemmondData().then(res => {
        // console.log(res)
        this.remmondData = res.data[122995].list
      })
    },
    getPopularData() {
      getPopularData().then(res => {
        // console.log(res)
        this.popularData = res.data[132826].list
      })
    },
    getGoodsData(type) {
      let page = ++this.goods[type].page;
      // console.log(page);
      getGoodsData(type, page).then(res => {
        console.log(res)
        // this.goods[this.tabCurrType].list = res.data.wall.docs
        this.goods[type].list.push(...res.data.wall.docs)
        this.goods[type].totalPages = res.data.param.totalPages

        //标识本次上拉动作的结束,触发上拉事件后，在回调函数的最后，都应该调用finishPullUp()方法，在该方法调用前不会触发下一次的上拉事件
        //finishPullUp()
        // console.log(this.$refs.scroll.scroll)
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    clickTab(inx) {
      // console.log(this.tabControlDataEn[inx])
      this.tabCurrType = this.tabControlDataEn[inx]
      // console.log(this.tabCurrType)
      this.$refs.tabControl1.currInx = inx
      this.$refs.tabControl2.currInx = inx
      // console.log(this.$refs.tabControl2.currInx)
    },
    showClone1(pos) {
      // console.log(pos)
      // console.log(this.$refs.tabControl)
      // console.log(this.$refs.tabControl.$el.offsetTop)
      if (Math.abs(pos.y) >= this.tabControlOffsetTop) {
        this.cloneTabControlIsShow = true
      } else {
        this.cloneTabControlIsShow = false
      }
    },
    loadMore() {
      if (
        this.goods[this.tabCurrType].page <
        this.goods[this.tabCurrType].totalPages
      ) {
        this.getGoodsData(this.tabCurrType)
      } else {
        // alert('没了')
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRemmond,
    HomePopular,
    TabControl,
    GoodsList,
    Scroll
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: 44px;
  background-color: #eee;
  margin-bottom: 55px;
  .nav {
    width: 100%;
    background-color: #a0c9aa;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
  .clone-tab-control {
    margin-top: 0;
  }
  .wrapper {
    overflow: hidden;
    height: calc(100vh - 99px);
    // background-color: red;
    h3 {
      text-align: center;
      padding-top: 10px;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-bottom: 10px;
    }
  }
}
</style>
