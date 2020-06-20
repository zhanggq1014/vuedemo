<template>
  <div class="goods-list" >
      <goods-list-item v-for="(item,inx) in data" :key="inx" :dataItem="item">
 
      </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'GoodsList',
    props:{
        data:{
            type:Array,
            default(){
                return []
            } 
        }
    },
    components: {
        GoodsListItem
    }
}

</script>
<style lang='scss'>
.goods-list{
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>