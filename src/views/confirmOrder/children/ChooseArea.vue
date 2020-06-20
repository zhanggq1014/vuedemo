<template>
  <div class="area">
    <div v-if="show" class="blacks" v-show="show1">
      <div class="info">
        <div class="divwrap">
          <v-distpicker
            type="mobile"
            @province="onChangeProvince"
            @city="onChangeCity"
            @area="onChangeArea"
          ></v-distpicker>
        </div>
        <div class="more">
          <input
            type="text"
            v-model="s1"
            placeholder="填写详细地址："
            @blur="getAdd"
          />
          <button @click="hide">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'ChooseArea',
  props: {
    show: {
      tyep: Boolean
    }
  },
  components: {
    VDistpicker
  },
  data() {
    return {
      show1: true,
      s: '',
      s1: '',
      str: ''
    }
  },
  methods: {
    onChangeProvince(a) {
      this.s = this.s + a.value + '-'
    },
    onChangeCity(a) {
      this.s = this.s + a.value + '-'
    },
    onChangeArea(a) {
      this.s = this.s + a.value + '-'
      //  console.log(this.s)
    },
    getAdd() {
      this.str = this.s + this.s1
      // console.log(this.str)
    },
    hide() {
      this.$emit('addrMsg', this.str)
      this.show1 = false
    }
  }
}
</script>
<style lang="scss">
/*遮罩层*/
.blacks {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.45);
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #fff;
    .divwrap {
      height: 150px;
      overflow-y: auto;
      position: absolute;
      left: 0;
      top: 0;
      width: 80%;
      z-index: 99;
      .address-header {
        width: 80%;
        position: fixed;
      }
    }
    .more {
      width: 100%;
      height: 200px;
      position: absolute;
      left: 0;
      bottom: -50px;
      z-index: 99;
      input {
        width: 97%;
        height: 50px;
        padding-top: 0;
      }
      button {
        margin-top: 5px;
        margin-left: 80%;
      }
    }
  }
}
</style>
