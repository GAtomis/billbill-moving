<template>
  <div>
    <mt-header :title="title">
      <mt-button icon="back" slot="left" @click="handleBack">返回</mt-button>

      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <navbar /> -->
    <chat-head />
    <chat-body />
    <!-- <chat-foot />
    <chat-foot /> -->
  </div>
</template>

<script>
// import Navbar from './components/Navbar'
import { ChatHead, ChatBody } from './components'
export default {
  name: 'ChatRoom',
  components: {
    // Navbar

    ChatHead,
    ChatBody
  },
  data() {
    return {
      title: '公共聊天室'
    }
  },

  created() {
    // console.log(this.$route.params)

    this.title = this.title + this.$route.params.id
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-wrap {
}
</style>
