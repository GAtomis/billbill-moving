<template>
  <div class="move-page">
    <mt-header title="登录Bilibili">
      <template>
        <span slot="right" @click="handleMode">{{
          meta[currentIndex].title
        }}</span>
      </template>
    </mt-header>
    <keep-alive>
      <component :is="meta[currentIndex].page" />
    </keep-alive>
    <!-- <form-group /> -->
  </div>
</template>
<script>
import MobileLogin from './components/MobileLogin'
import UserLogin from './components/UserLogin'
export default {
  name: 'Login',
  components: {
    MobileLogin,
    UserLogin
  },
  computed: {},
  data() {
    return {
      currentIndex: 0,
      meta: [
        { title: '密码登录', page: 'MobileLogin' },
        { title: '短信登录', page: 'UserLogin' }
      ]
    }
  },
  created() {
    // console.log(this.$route)
  },
  activated() {
    // console.log(this.$route)
  },
  methods: {
    handleMode(e) {
      // console.log(e)
      this.currentIndex++
      if (this.currentIndex === this.meta.length) {
        this.currentIndex = 0
      }
    }
  },
  watch: {
    currentPage(val, newVal) {}
  }
}
</script>
<style lang="scss" scoped>
::v-deep .mint-header {
  height: 13.889vw;
  font-size: 4.444vw; //alt+z转换
}
</style>
