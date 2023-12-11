<script setup lang="ts">

import AppHeaderVue from '../components/AppHeader.vue';
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '../stores/projects'
import IconBoxArrowUpRight from '../components/icons/IconBoxArrowUpRight.vue';

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

      <ul class="projects" v-if="!error">
        <li v-for="p in projects" :key="p.name">
          <div class="project" v-if="!p.hidden">
            <div class="image" v-if="p.image">
              <img :src="p.image" />
            </div>
            <div class="info">
              <span class="name">{{ p.name }}</span>
              <span class="year" v-if="p.year">{{ p.year }}</span>
              <span class="url" v-if="p.url">
                <a :href="p.url" target="_blank">
                  <span>Website</span>
                  <span class="icon">
                    <IconBoxArrowUpRight />
                  </span>
                </a>
              </span>
            </div>
            <p class="description" v-if="p.short_description">{{ p.short_description }}</p>
            <div class="technologies" v-if="p.technologies">
              <ul>
                <li v-for="t in p.technologies" :key="t">
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
.projects {
  margin: 2rem 0 0 0;
  padding: 0;
  list-style: none;
}

.info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.image {
  width: 100%;
}

.image img {
  width: 100%;
  border-radius: var(--border-radius);
  /* box-shadow: 4px 4px 2px #ccc;
  -webkit-box-shadow: 4px 4px 2px #ccc;
  -moz-box-shadow: 4px 4px 2px #ccc; */
}

.name {
  flex: 1 auto;
  font-size: 1.5rem;
  font-weight: 900;
  margin-right: 1rem;
}

.year {
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 0.4rem 0.8rem;
  margin-right: 1rem;
  opacity: 0.5;
}

.url a {
  flex: 1 auto;
  display: flex;
  align-items: center;
  color: var(--vt-c-black);
  /* border: 1px solid red; */
}

.url a span:first-child {
  flex: 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.url .icon {
  margin-left: 0.4rem;
  display: flex;
}

.description {
  margin-top: 1rem;
  font-size: 1.2rem;
}

.technologies {
  margin-top: 1rem;
}

.technologies ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 -0.1rem 0 -0.1rem;
}
.technologies ul li {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin: 0.1rem;
}
</style>