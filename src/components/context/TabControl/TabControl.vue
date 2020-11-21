<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index, sroll: sroll }"
      @click="itemClick(index)"
      v-for="(item, index) in titles"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    sroll: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data: function() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick: function(index) {
      // 1.改变currentIndex
      this.currentIndex = index

      // 2.发出事件
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 3.889vw;
  background-color: #fff;
  flex-flow: row nowrap;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
  height: 10.66667vw;
  line-height: 10.66667vw;
}
.sroll {
  height: 10.66667vw;
  line-height: 10.66667vw;
  flex: 0;
}

.tab-control-item span {
  padding: 0 4.26667vw;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
