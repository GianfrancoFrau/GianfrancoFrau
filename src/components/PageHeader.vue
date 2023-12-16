<script setup lang="ts">
import { computed } from 'vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';

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
      <IconArrowLeft />
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
  transition: var(--transition-default);
  background-color: var(--color-background-header);
  z-index: 99;
}

.back-link {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  display: flex;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}

.back-link:hover {
  border-color: var(--color-border-hover);
}

h1 {
  width: auto;
  font-weight: 900;
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