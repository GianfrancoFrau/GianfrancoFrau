<script setup lang="ts">
import HomePresentation from "../components/HomePresentation.vue";
import HomeNavigation from "../components/HomeNavigation.vue";

const ls = new Date(BUILD_TS);
const lsd = ls.getDate() + '/' + ls.getMonth() + 1 + '/' + ls.getFullYear();
const lsStr = "Version " + APP_VERSION + " &bull; Last update: " + lsd;

</script>

<template>
  <div class="app-page home-page">
    <HomePresentation />
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