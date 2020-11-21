<template>
  <div>
    <div class="form-group">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="form.username"
      ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="form.password"
      ></mt-field>
    </div>

    <div class="form-group btn-box">
      <mt-button
        type="primary"
        size="normal"
        class="btn-login"
        @click.native="handleLogin"
        >登录</mt-button
      >
    </div>
  </div>
</template>
<script>
//导入工具

import mixin from '@/components/common/formGroup/public'
export default {
  name: 'UserLogin',
  mixins: [mixin]
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/we-ui.scss';

.form-group {
  // width: 104.167vw;
  // min-height: 48px;
  padding-top: 4.444vw;

  ::v-deep .is-plain {
    color: $color-primary;
    border: 1px solid $color-primary;
  }
}
.btn-box {
  background: #f4f4f4;
  display: flex;
  justify-content: space-around;
  align-self: center;

  .btn-login {
    width: 93.333vw;
    font-weight: 600;
    font-size: 3.889vw;
  }
  .btn-agree {
    width: 45.111vw;
    font-weight: 600;
    font-size: 3.889vw;
  }
}
</style>
