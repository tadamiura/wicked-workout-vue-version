<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-row w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import { mapGetters } from "vuex";
export default {
name: "app",
components: {
  TheHeader
},
computed: {
  ...mapGetters("user", ["jwtToken"])
},
beforeMount() {
  if (this.jwtToken) {
    // console.log('beforeMount fetchCurrentUser')
    this.$store.dispatch("user/fetchCurrentUser");
  }
}
}
</script>

<style></style>
