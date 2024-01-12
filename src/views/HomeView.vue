<script setup lang="ts">
import HomePresentation from "../components/HomePresentation.vue";
import HomeNavigation from "../components/HomeNavigation.vue";

const ls = (new Date(document.lastModified));
const lsd = ls.getDate() + '&bull;' + ls.getMonth() + 1 + '&bull;' + ls.getFullYear();
const lsStr = "Last update: " + lsd;

</script>

<template>
  <div class="app-page home-page">
    <HomePresentation />
    <HomeNavigation />
    <p v-html="lsStr" />
  </div>
</template>

<style scoped>
p {
  padding: 1rem;
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.8rem;
  opacity: 0.4;
  text-align: center;
  background: white;
}
</style>