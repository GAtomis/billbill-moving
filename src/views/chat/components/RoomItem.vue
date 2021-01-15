<template>
  <div class="room-item app-container mint-wrap ">
    <div class=" room-item-type">
      <span
        ><artms-svg icon-class="yinpin"></artms-svg>{{ goods.roomType }}</span
      >
    </div>
    <p class="room-item-title">{{ goods.roomName }}</p>

    <div class="room-item-foot">
      <i></i><span>在线{{ goods.total }}人</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RoomItem',
  props: ['goods']
}
</script>
<style lang="scss" scoped>
.room-item {
  // width: 22.222vw;
  height: 30.778vw;
  border: 1px solid #fff;
  border-radius: 10px;
  position: relative;

  &-type {
    font-size: 2.778vw;
    border-radius: 10px;
    width: 55%;
    // background: #000;
  }
  &-title {
    margin-top: 2.778vw;
  }
  &-foot {
    font-size: 2.778vw;
    position: absolute;
    bottom: 0.278vw;
  }
}
</style>
