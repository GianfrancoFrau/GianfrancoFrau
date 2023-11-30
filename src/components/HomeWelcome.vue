<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconProjects from './icons/IconProjects.vue'
import IconBookmarks from './icons/IconBookmarks.vue'
import IconNotebooks from './icons/IconNotebooks.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconProjects />
    </template>
    <template #heading>Projects</template>

    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
    ipsum dolor sit amet Lorem ipsum dolor sit amet
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconBookmarks />
    </template>
    <template #heading>Bookmarks</template>

    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
    ipsum dolor sit amet Lorem ipsum dolor sit amet
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconNotebooks />
    </template>
    <template #heading>Notebook</template>

    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
    ipsum dolor sit amet Lorem ipsum dolor sit amet
  </WelcomeItem>
</template>

<style scoped>
svg {
  width: 50px;
  height: 50px;
}

@media (min-width: 1024px) {
  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
