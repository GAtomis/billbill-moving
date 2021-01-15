<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
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
