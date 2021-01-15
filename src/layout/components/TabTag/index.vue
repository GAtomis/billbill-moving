<template>
  <div class="tab-tag">
    <!-- <mt-navbar v-model="selected">
      <template v-for="route of permission_routes">
        <mt-tab-item :id="1" v-if="route.children"></mt-tab-item>
      </template>
    </mt-navbar> -->
    <tab-control :currentIndex="currentIndex" v-model="permission_routes">
      
    </tab-control>
  </div>
</template>
<script>
import TabControl from '@/components/context/TabControl'
import { mapGetters } from 'vuex'
export default {
  mounted() {
    //标签初始化
    console.log(this.$route, this.permission_routes)
  },
  components: {
    TabControl
  },
  computed: {
    ...mapGetters(['permission_routes']),
    currentIndex() {
      return this.permission_routes.findIndex(item => {
        return (
          item.path === this.$route.path ||
          (item.redirect === this.$route.path && !item.hidden)
        )
      })
    }
  },
  data() {
    return {}
  },
  methods: {
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
// .tab-tag a {
//   padding: 1.389vw 2.778vw;
//   border-bottom: 0.556vw solid transparent;
//   text-decoration: none;
//   color: #333333;
//   font-size: 4.444vw;
//   line-height: 6.389vw;
//   font-family: 'arial, helvetica, sans-serif', '微软雅黑';
// }
.tab-tag a.active {
  color: $color-primary;
  border-color: $color-primary;
}
</style>
