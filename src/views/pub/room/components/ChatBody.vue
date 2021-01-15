<template>
  <div class="body-wrapper">
    <template v-for="msgObj in CHAT.msgArr">
      <!-- 用户名 -->
      <template v-if="msgObj.login">
        <system-msg :msg="msgObj.user.username"></system-msg>
      </template>
      <!-- id和信息 -->
      <template v-if="!msgObj.login && !msgObj.logout">
        <other-msg
          v-if="msgObj.userid != CHAT.userid"
          :name="msgObj.username"
          :msg="msgObj.msg"
          :color="msgObj.color"
        ></other-msg>
        <self-msg
          v-if="msgObj.userid == CHAT.userid"
          :msg="msgObj.msg"
          :color="msgObj.color"
        ></self-msg>
      </template>
    </template>
    <!-- <other-msg></other-msg> -->
  </div>
</template>
