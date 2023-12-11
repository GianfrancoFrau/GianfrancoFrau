<script setup lang="ts">

import AppHeaderVue from '../components/AppHeader.vue';
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '../stores/projects'
// import IconLoading from '@/components/icons/IconLoading.vue';

const { projects, loading, error } = storeToRefs(useProjectsStore())
const { fetchProjects } = useProjectsStore()

fetchProjects()

</script>

<template>
  <div class="app-page projects-page">
    <AppHeaderVue title="Projects" />

    <div class="page-content">

      <p class="text-center" v-if="error">
        Can't load projects
      </p>

      <p v-if="loading">
        <!-- <IconLoading /> -->
      </p>

      <ul v-if="!error">
        <li v-for="p in projects" :key="p.name">
          <p>{{ p.name }}</p>
          <p v-if="p.short_description">{{ p.short_description }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>

</style>