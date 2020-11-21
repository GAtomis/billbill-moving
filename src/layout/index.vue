<template>
  <div>
    <div class="suspension-box">
      <nav-bar></nav-bar>
      <tab-tag></tab-tag>
    </div>

    <app-main></app-main>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import NavBar from './components/NavBar'
import TabTag from './components/TabTag'
import AppMain from './components/AppMain'
import TabBar from './components/TabBar'
export default {
  name: 'Layout',
  components: {
    NavBar,
    TabTag,
    AppMain,
    TabBar
  }
}
</script>
<style lang="less" scoped></style>
