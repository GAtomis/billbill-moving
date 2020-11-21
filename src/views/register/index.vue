<template>
  <div class="move-page">
    <mt-header title="注册BiliBill"></mt-header>
    <form-group />
  </div>
</template>
<script>
import FormGroup from './components/FormGroup'
export default {
  name: 'register',
  components: {
    FormGroup
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
::v-deep .mint-header {
  height: 13.889vw;
  font-size: 4.444vw; //alt+z转换
}
</style>
