<template>
  <div class="control">
    <TopBar class="topBar"></TopBar>
    <div class="content">
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TopBar from "./TopBar.vue";
import ContentMessage from "./ContentMessage.vue";
export default {
  data() {
    return {
      sum: 0,
    };
  },
  components: {
    TopBar,
    ContentMessage,
  },
};
</script>
<style scoped>
.control {
  width: 100%;
}
.topBar {
  width: 100%;
  height: 40px;
  background-color: #32373e;
}
.content {
  width: 100%;
  height: 750px;
  position: absolute;
  top: 40px;
  background: #f2f5f4;
}
</style>
