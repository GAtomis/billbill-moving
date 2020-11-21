<template>
  <div>
    <div class="risk-tab-top">
      <div
        class="risk-tab-cont"
        @click="tabChange(index)"
        v-for="(item, index) in tabList"
        :class="[activeIndex == index ? 'risk-active' : '']"
        :key="index"
      >
        {{ item }}
      </div>
      <div
        class="risk-active-line"
        :class="[
          activeIndex == 0 ? 'risk-active-line-f' : 'risk-active-line-r'
        ]"
      ></div>
    </div>
    <ul class="risk-cont">
      <li v-show="activeIndex == 0">111111111111</li>
      <li v-show="activeIndex == 1">22222222222222</li>
      <li v-show="activeIndex == 3">33333333333333</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tabList: ['就近搜索', '指定搜索', '纠结', '彷徨'],
      contList: ['11111111', '2222222222', '33333333'],
      activeIndex: 0
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    tabChange(val) {
      this.activeIndex = val
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.risk-tab-top {
  color: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  justify-content: center;
  .risk-tab-cont {
    cursor: pointer;

    width: 71px;
    text-align: center;
    font-size: 16px;
    height: 28px;
    margin: auto 25px;
    box-sizing: border-box;
  }
  .risk-active {
    color: #00ffff;
  }
  .risk-active-line {
    width: 71px;
    height: 2px;
    background: rgba(0, 255, 255, 1);
    position: absolute;
    top: 28px;
    left: 166px;
    transition: all 0.3s ease;
  }
  .risk-active-line-f {
    left: 166px;
  }
  .risk-active-line-r {
    left: 288px;
  }
}
.risk-cont {
  color: #fff;
}
</style>
