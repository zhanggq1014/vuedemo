<template>
  <div class="goods-info">
      <p>{{goodsInfo.desc}}</p>
      <div v-for='(item,inx) in goodsInfo.detailImage' :key="inx">
          <h3>{{item.key}}</h3>
          <img v-for="(items, index) in goodsInfo.detailImage[0].list" :src="items" :key="index" alt="" @load="imgLoad" >
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    props: {
        goodsInfo: {
            type: Object
        }
    },
    data(){
        return {
            count: 0,
        }
    },
    methods: {
        // 监听图片加载
        // 事件绑定在原生load上，只要有一张图片，就执行imgLoad，count数量加一，所有图片加载完成，发送出去通知父级
        imgLoad(){
            this.count++
            if(this.count === this.goodsInfo.detailImage[0].list.length){
                this.$emit("imgLoad")
            }
        }
    }
}

</script>
<style lang='scss'>
    .goods-info{
        width: 100%;
        font-size:0;
        background-color: #fff;
        p{
            padding-top: 10px;
            margin-left: 10px;
        }
        h3{
            margin-left: 10px;
        }
        img{
            width: 100%;
        }
    }
</style>