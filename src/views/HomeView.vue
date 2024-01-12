<script setup lang="ts">
import HomePresentation from "../components/HomePresentation.vue";
import HomeNavigation from "../components/HomeNavigation.vue";
// import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="app-page home-page">
    <HomePresentation />
    <HomeNavigation />
    <!-- <AppFooter /> -->

    <p>
      Last update: 23&bull;01&bull;2024
    </p>
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