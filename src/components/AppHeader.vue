<script setup lang="ts">
import IconArrowLeftVue from './icons/IconArrowLeft.vue';

defineProps<{
  title?: string
}>()
</script>

<template>
  <header class="app-header sticky">
    <RouterLink to="/" class="back-link">
      <IconArrowLeftVue />
    </RouterLink>

    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>

  .app-header {
    display: flex;
    height: var(--header-height);
    align-items: center;
    /* border: 1px solid black; */
    margin-bottom: 2rem;
    transition: all 0.5s ease-in;
    background: white;
  }

  .app-header.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .back-link {
    display: flex;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 5px;
  }

  .back-link svg {
    /* width: 20px;
    height: 20px; */
  }

  h1 {
    margin-left: 2rem;
  }



</style>