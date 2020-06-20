<template>
  <div class="serve-info">
      <div class="serve-item" v-for='(item,inx) in serves' :key="inx">
          <img :src="item.icon" alt="">
          <div>{{item.name}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailServeInfo',
    props: {
        serves: {
            type: Array
        }
    }
}

</script>
<style lang='scss'>
.serve-info{
    width: 100%;
    display: flex;
    height: 70px;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    .serve-item{
        width: 28%;
        height:20px;
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left:15px;
    }
    img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
}
</style>