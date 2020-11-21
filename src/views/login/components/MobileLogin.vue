<template>
  <div>
    <div class="form-group">
      <mt-cell
        :title="form.country"
        @click.native="popupVisible = true"
        is-link
      ></mt-cell>
    </div>
    <div class="form-group">
      <mt-field
        label="+86"
        placeholder="请输入手机号"
        type="tel"
        v-model="form.phoneNum"
        :state="status"
        @blur.native="checkInput"
      >
        <mt-button
          plain
          type="danger"
          style=" border: 1px solid #fff;font-size:16px"
          :disabled="getValidate"
          @click.native="handleVerify"
          >获取验证码</mt-button
        >
      </mt-field>
      <mt-field label="验证码" v-model="form.verify">
        <!-- <img src="../assets/100x100.png" height="45px" width="100px" /> -->
      </mt-field>
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

    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom"
    >
      <!-- <div>adsad</div> -->
      <div style="width:104.167vw;">
        <mt-picker
          :slots="slots"
          @change="onValuesChange"
          value="pickerVal"
        ></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>
<script>
//导入工具
import mixin from '@/components/common/formGroup/public'
import mobile from '@/components/common/formGroup/mobile'

export default {
  name: 'MobileLogin',
  data() {
    return {
      slots: [
        {
          values: ['中国大陆', '港澳台用户', '海外用户'],
          className: 'slot1'
        }
      ]
    }
  },
  mixins: [mixin, mobile]
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
