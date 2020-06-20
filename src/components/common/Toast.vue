<template>
  <div class="toast">
      <span class="info">{{toastInfo}}</span>
      <img src="../../assets/imgs/完成.png" alt="">
  </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        toastInfo:{
            type: String,
            default: ''
        },
    }
}

</script>
<style lang='scss' scoped>
    .toast{
        width: 120px;
        height: 140px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 10px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        position:absolute;
        z-index: 200;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        img{
            width: 70px;
            height: 70px;
        }
        .info{
            margin-top: 20px;
        }

    }

</style>