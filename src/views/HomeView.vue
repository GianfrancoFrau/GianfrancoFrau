<script setup lang="ts">
import HomeTitle from "../components/HomeTitle.vue";
import HomeNavigation from "../components/HomeNavigation.vue";

const ls = new Date(BUILD_TS);
const lsd = ls.toLocaleDateString();;
const lsStr = "Version " + APP_VERSION + " &bull; Last update: " + lsd;

</script>

<template>
  <div class="app-page home-page">
    <HomeTitle />
    <HomeNavigation />
    <footer v-html="lsStr" />
  </div>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.8rem;
  opacity: 0.4;
  text-align: center;
  background: white;
}
</style>