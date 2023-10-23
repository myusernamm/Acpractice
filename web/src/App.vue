<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>

import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}

</script>

<style>
body {
  background-image: url("@/assets/images/background.webp");
  background-size: cover;
}
</style>
