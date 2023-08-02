<template>
  <!-- uri에 따라 하단의 컴포넌트가 router-view를 대신함 -->
  <HeaderView />
  <NavigationView />
  <router-view />
  <FooterView />
</template>

<script>
import HeaderView from "./components/common/HeaderView.vue";
import FooterView from "./components/common/FooterView.vue";
import NavigationView from "./components/common/NavigationView.vue";
export default {
  name: "AppView",
  components: {
    HeaderView,
    FooterView,
    NavigationView,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
