<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/content/TabBar'
export default {
  name: 'App',
  components: {
      TabBar
  }
}
</script>

<style lang="scss">
@import './assets/css/base.css';
</style>
