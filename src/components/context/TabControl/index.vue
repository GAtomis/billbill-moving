<template>
  <div
    class="tab"
    id="tab"
    ref="tabTag"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div
      class="scroll-tab"
      id="scroll_tab"
      style="transform: translate(0px, 0px) translateZ(0px);"
      ref="scroll"
    >
      <template v-for="(route, index) of value">
        <router-link
          :to="route.path"
          :class="{ active: index === currentIndex }"
          v-if="!route.hidden"
          @click.native="handleLink"
          ><span>{{ route.children[0].meta.title }}</span></router-link
        >
      </template>
    </div>
  </div>
</template>
<script>
let $scrollTab,
  $tab,
  touchstartX,
  touchstartY,
  scrollMax,
  mX,
  mY,
  moveto,
  beforeX
export default {
  // model: {
  //   // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
  //   prop: 'tabList',
  //   event: 'cc'
  // },
  props: {
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    },
    value: Object
  },
  data() {
    return {
      // $scrollTab: '',
      // $tab: '',
      // touchstartX: '',
      // touchstartY: '',
      // scrollMax: '',
      // mX: '',
      // mY: '',
      // moveto: ''
    }
  },

  created() {},
  mounted() {
    const _this = this
    $tab = _this.$refs.tabTag
    $scrollTab = _this.$refs.scroll
    // beforeX = null
    // console.log(this.permission_routes)
    console.log($tab, $scrollTab)
  },
  methods: {
    handleTouchStart(e) {
      console.log(e)

      let { pageX, pageY } = e.targetTouches[0]
      // console.log(`开始出触摸X位置${pageX}开始出触摸Y位置${pageY}`)
      //设置触摸位置
      touchstartX = pageX
      touchstartY = pageY
      //滚动最大范围
      scrollMax = $scrollTab.scrollWidth - $tab.clientWidth
      beforeX = null
    },
    handleTouchMove(e) {
      let { pageX, pageY } = e.targetTouches[0]
      console.log('上一个节点', beforeX, '现在节点', pageX)

      //第一步得到当前的点 pageX  touchX-pageX等于移动的距离
      //右=>左  t>m
      //左=>右  m>t
      // if (!beforeX) {
      //   beforeX = touchstartX - pageX
      // }
      //

      mX = pageX
      mY = pageY
      let nowX = touchstartX - mX
      console.log(
        'touchX' + touchstartX,
        'touchY' + touchstartY,
        'mX' + mX,
        'mY' + mY
      )
      //用户回滑

      if (touchstartY - mY <= 15 && touchstartY - mY >= -15) {
        let transform = $scrollTab.style.transform
        // console.log('更改前' + transform)

        transform = transform.replace('translate(', '')
        // console.log('更改后' + transform)
        let currentX = Number(
          transform.substring(0, transform.indexOf(',') - 2)
        )
        console.log('删减后', currentX)
        if (beforeX === null) {
          console.log('beforeX===null')

          moveto = -nowX + currentX
        } else {
          moveto = -(beforeX - mX)
          moveto = moveto + currentX
        }

        beforeX = mX

        // moveto = -(touchstartX - mX) / 4.8
        // moveto = -(touchstartX - mX) / 4.8
        // moveto = moveto + currentX
        if (moveto <= 100 && moveto >= -scrollMax - 100) {
          console.log('开始移动', moveto)

          $scrollTab.style.transform =
            'translate(' + moveto + 'px, 0px) translateZ(0px)'
        }
      }
    },
    handleTouchEnd(e) {
      $scrollTab.style.transitionDuration = '600ms'
      if (moveto > 0) {
        $scrollTab.style.transform = 'translate(0px, 0px) translateZ(0px)'
      } else if (moveto < -scrollMax) {
        $scrollTab.style.transform =
          'translate(' + -scrollMax + 'px, 0px) translateZ(0px)'
      }
      setTimeout(function() {
        $scrollTab.style.transitionDuration = '0ms'
      }, 600)
    },
    handleLink(e) {
      const magin = e.view.innerWidth * 0.05 //间隙
      const itemGap = e.view.innerWidth - e.layerX
      itemGap
      // const nowSpace = e.layerX +
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/we-ui.scss';
.tab {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  // margin: 0 auto;
}
.scroll-tab {
  display: flex;
  position: relative;
  font-size: 3.73333vw;
}
// .scroll-tab a {
//   padding: 1.389vw 2.778vw;
//   border-bottom: 0.556vw solid transparent;
//   // text-decoration: none;
//   flex-shrink: 0;
//   color: #333333;
//   font-size: 4.444vw;
//   line-height: 6.389vw;
//   font-family: 'arial, helvetica, sans-serif', '微软雅黑';
// }
.scroll-tab a {
  position: relative;
  flex-shrink: 0;
  height: 10.156vw;
  line-height: 10.156vw;
  border-bottom: 0.556vw solid transparent;
  // display: inline-block;
  text-align: center;
  font-size: 3.73333vw;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 0 4.26667vw;
  color: #505050;
  transition: 0.2s all linear;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 0.556vw solid $color-primary;
    transition: 0.2s all linear;
  }
}

.scroll-tab a.active {
  color: $color-primary;
  border-color: $color-primary;
  &::before {
    width: 100%;
    left: 0;
    top: 0;
  }
  .hover::before {
    width: 200%;
  }
}
.scroll-tab a.active ~ a::before {
  left: 0;
}
</style>
