<template>
  <div class="app-container">
    <mt-cell title="聊天室公共" to="//github.com" is-link value="查看规则">
    </mt-cell>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <room class="room-container">
        <room-item
          :goods="item"
          v-for="item in roomList"
          class="room-content"
          @click.native="handleRouter(item)"
          :key="item.roodId"
        />
      </room>
    </mt-loadmore>
  </div>
</template>
<script>
import Room from './components/Room'
import RoomItem from './components/RoomItem'
export default {
  name: 'Chat',
  data() {
    return {
      roomList: [
        {
          roomId: '002',
          roomType: '1001',
          roomName: '渣女感情分析',
          total: 20,
          hotStatus: Boolean || String
        },
        {
          roomId: '023',
          roomType: '1001',
          roomName: '大师分析A股票',
          total: 20,
          hotStatus: Boolean || String
        },
        {
          roomId: '012',
          roomType: '1001',
          roomName: 'NBA2020新赛季',
          total: 20,
          hotStatus: Boolean || String
        },
        {
          roomId: '001',
          roomType: '1001',
          roomName: '库里粉丝聚集地',
          total: 20,
          hotStatus: Boolean || String
        }
      ]
    }
  },
  components: {
    Room,
    RoomItem
  },
  methods: {
    handleRouter({ roomId }) {
      this.$router.push('/room/' + roomId)
    }
  }
}
</script>
<style lang="scss" scoped>
.room-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  .room-content {
    flex: 0 0 42%;
    margin-top: 4.167vw;
    // width: 30%;
  }
}
</style>
