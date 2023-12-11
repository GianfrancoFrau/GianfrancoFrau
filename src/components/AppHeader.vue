<script setup lang="ts">
import { computed } from 'vue';
import IconArrowLeftVue from './icons/IconArrowLeft.vue';

const props: any = defineProps<{
  title?: string,
  class?: string
}>()

const headerCss = computed(() => ({
  'app-header': true,
  'sticky': true,
  // [props.class]: true
}))

</script>

<template>
  <header :class="headerCss">
    <RouterLink to="/" class="back-link">
      <IconArrowLeftVue />
    </RouterLink>

    <h1>{{ props.title }}</h1>
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  display: flex;
  justify-content: center;
  height: var(--header-height);
  padding: 2rem 1rem;
  align-items: center;
  transition: all 0.5s;
  background: white;
}

.back-link {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  display: flex;
  padding: 1rem;
  color: var(--vt-c-black);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  transition: all 0.5s;
}

.back-link:hover {
  color: var(--vt-c-black);
  border-color: var(--vt-c-black);
}

h1 {
  width: auto;
}

.app-header.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}

@media (min-width: 1024px) {
  .app-header {
    margin-bottom: 2rem;
  }
}
</style>