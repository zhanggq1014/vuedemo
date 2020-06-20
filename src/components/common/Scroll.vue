<template>
  <div  ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click, //click设置为true点击事件才能生效
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (pos) => {
          // console.log(pos)
        //if(Math.abs(Math.round(pos.y)) > 580){
        //    this.$emit('show',true)
        // }else{
        //      this.$emit('show',false)
        // }
        this.$emit("showClone",pos)
        })
      }
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log('123')
          this.$emit('pullUp')
        })
      }
    }, 20)
  },
  methods: {
    
  },
  components: {}
}
</script>
<style lang="scss" scoped>

</style>
