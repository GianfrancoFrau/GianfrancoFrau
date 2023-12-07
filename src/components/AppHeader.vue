<script setup lang="ts">
// import { onMounted, onBeforeUnmount, ref } from 'vue';
import { computed } from 'vue';
import IconArrowLeftVue from './icons/IconArrowLeft.vue';

const props: any = defineProps<{
  title?: string,
  class?: string
}>()

/*
let stickyHeader = ref(false);

onMounted(() => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.addEventListener('scroll', handleScroll);
  }
  console.log('app-header mounted', appDiv);
})

onBeforeUnmount(() => {
  console.log('app-header unmounted');
});

const handleScroll = (ev: any) => {

  const scrollY = ev.target.scrollTop;
  const treeshold = 200;
  if (scrollY > treeshold) {
    stickyHeader.value = true;
  } else {
    stickyHeader.value = false;
  }

  console.log('HEY! handleScroll here', scrollY, stickyHeader.value);
}
*/


const headerCss = computed(() => ({
  'app-header': true,
  'sticky': true,
  [props.class]: true
}))

</script>

<template>
  <header :class="headerCss">
    <RouterLink to="/" class="back-link">
      <IconArrowLeftVue />
    </RouterLink>

    <h1>{{ title }}</h1>
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
  border-bottom: 10px solid white;
}

.back-link {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  display: flex;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  transition: all 0.5s;
  background: white;
}

h1 {
  width: auto;
  padding: 1rem 1rem;
  background: white;
}

.app-header.sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}

@media (min-width: 800px) {
  .app-header {
    margin-bottom: 2rem;
  }
}
</style>