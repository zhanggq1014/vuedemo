<template>
  <scroll :click="true"  class="wrapper" >
    <div class="cart-list">
        <cart-list-item v-for="item in cartList" :key="item.id"
        :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../../../components/common/Scroll'
import CartListItem from '../children/CartListItem'
export default {
  name: 'CartList',
  props: {
      cartList: {
          type: Array
      }
  },
  components: {
    Scroll,
    CartListItem
  }
}
</script>
<style lang="scss">
    .wrapper{
        overflow: hidden;
        height: calc(100vh - 99px);
    } 
</style>
