<template>
  <div class="params-info">
    <table class="rule">
      <tr v-for="(item, inx) in paramsRuleInfo" :key="inx">
        <td v-for="(items, index) in item" :key="index">{{ items }}</td>
      </tr>
    </table>

    <table class="info">
      <tr v-for="(v,k) in paramsInfo" :key="k">
        <td class="key">{{k}}</td>
        <td class="value">{{v}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsRuleInfo: {
      type: Array
    },
     paramsInfo: {
      type: Object
    }
  },
 
}
</script>
<style lang="scss">
.params-info {
  width: 100%;
  background-color: #fff;
  .rule {
    width: 320px;
    td {
      width: 150px;
      height: 40px;
      text-align: center;
      border-bottom: 1px solid #eee;
    }
    
  }
  .info{
      td{
          height: 40px;
          text-align: left;
          padding-left: 10px;
          border-bottom: 1px solid #eee;
      }
        width: 320px;
        .key{
            width: 100px;
        }
        .value{
            width:220px;
            color: #A0C9AA;
        }
    }
}
</style>
