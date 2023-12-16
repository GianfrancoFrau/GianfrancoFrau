<script setup lang="ts">

import PageHeader from '../components/PageHeader.vue';
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '../stores/projects'
import IconBoxArrowUpRight from '../components/icons/IconBoxArrowUpRight.vue';

const { projects, loading, error } = storeToRefs(useProjectsStore())
const { fetchProjects } = useProjectsStore()

fetchProjects('position')

</script>

<template>
  <div class="app-page projects-page">
    <PageHeader title="Projects" />

    <div class="page-content">

      <p class="text-center" v-if="error">
        Can't load projects
      </p>

      <p class="text-error text-center" v-if="loading">
        <!-- <IconLoading /> -->
      </p>

      <p class="intro animate__animated animate__fadeInDown">
        Something I've built, including side projects, clients projects and experiments.
      </p>

      <ul class="projects" v-if="!error && !loading">
        <li v-for="p in projects" :key="p.name">
          <div class="project animate__animated animate__fadeInUp" v-if="!p.hidden">
            <!-- <div class="left">
              <div class="image" v-if="p.image">
                <img :src="p.image" />
              </div>
            </div> -->
            <div class="right">
              <div class="info">
                <span class="name">{{ p.name }}</span>
                <span class="year" v-if="p.year">{{ p.year }}</span>
                <span class="url" v-if="p.url">
                  <a :href="p.url" target="_blank">
                    <span>{{ p.urlLabel || 'url' }}</span>
                    <span class="icon">
                      <IconBoxArrowUpRight />
                    </span>
                  </a>
                </span>
              </div>
              <p class="description" v-if="p.description_html" v-html="p.description_html"></p>
              <p class="description" v-if="p.description && !p.description_html">{{ p.description }}</p>
              <div class="technologies" v-if="p.technologies">
                <ul>
                  <li v-for="t in p.technologies" :key="t">
                    {{ t }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
.projects {
  margin: 0;
  padding: 0;
  list-style: none;
}

.intro {
  margin: 2rem 0;
  font-size: 1.6rem;
}

.project {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
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
  opacity: 0.8;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin: 0.1rem;
}

@media (min-width: 767px) {
  .project {
    padding: 2rem;
    display: flex;
  }

  .left {
    max-width: 45%;
    margin-right: 2rem;
  }

  .right {
    flex: 1 auto;
  }
}
</style>