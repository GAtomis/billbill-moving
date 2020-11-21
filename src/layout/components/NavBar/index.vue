<template>
  <div class="header-wrapper">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/home" slot="left">
        <svg-icon icon-class="Logo" class-name="logo-panel-icon" />
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
::v-deep .mint-header {
  height: 13.889vw;
  // font-size: 4.444vw; //alt+z转换
}
.header-wrapper {
  .logo-panel-icon {
    font-size: 13.889vw;
  }
}
</style>
