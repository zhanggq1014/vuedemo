<template>
  <div class="rate-info">
    <h3>用户评价</h3>
    <div class="rate-item" v-for="(item, inx) in rateInfo" :key="inx">
      <div class="top">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="center">
        <p>{{ item.content }}</p>
      </div>
      <div class="bottom">
        <span>{{ item.created | showDate }}</span>
        <!-- <span>{{showDate }}</span> -->
        <span class="style">{{item.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import format from '../../../tools/formatData'
export default {
  name: 'DetailRateInfo',
  props: {
    rateInfo: {

    }
  },
    filters: {
        showDate(date){
            let date1 = new Date(date * 1000)
          return format(date1,"YYYY-MM-DD")
        }

    },
  // computed: {
  //   showDate() {
  //     let date = this.rateInfo[0].created * 1000
  //     return format(date, 'YYYY-MM-DD')
  //   }
  // }
}
</script>
<style lang="scss">
.rate-info {
  width: 100%;
  height: 350px;
  background-color: #fff;
  margin-top: 7px;
  margin-bottom: 50px;
  h3 {
    padding-top: 20px;
    margin-left: 10px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .rate-item {
    width: 94%;
    margin: 10px auto;
    border-top: 2px solid #eee;
    .top {
      display: flex;
      align-items: center;
      padding-top: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-left: 10px;
      }
    }
    .bottom{
        color: #bbb;
        font-size: 14px;
        .style{
            margin-left: 10px;
        }
    }
  }
}
</style>
