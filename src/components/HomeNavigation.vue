<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconPersonRaisedHand from './icons/IconPersonRaisedHand.vue';
import IconProjects from './icons/IconProjects.vue';
import IconNotebooks from './icons/IconNotebooks.vue';
import IconBookmarks from './icons/IconBookmarks.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/about">
          <span class="icon">
            <IconPersonRaisedHand />
          </span>About
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects">
          <span class="icon">
            <IconProjects />
          </span>
          Projects
          <!-- <span class="link-badge">soon</span> -->
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/notebook">
          <span class="icon">
            <IconNotebooks />
          </span>
          Notebook
          <!-- <span class="link-badge">soon</span> -->
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/bookmarks">
          <span class="icon">
            <IconBookmarks />
          </span>
          Bookmarks
          <!-- <span class="link-badge">soon</span> -->
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1.4rem;
  padding: 1rem;
  border: 1px solid red;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li a {
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem 1rem 0;
  font-size: 1.6rem;
  text-decoration: underline;
  color: var(--icon-color);
  border: 1px solid blue;
}

nav ul li a:hover {
  color: var(--vt-c-black);
}

nav ul li a .icon {
  display: flex;
  margin-right: 1rem;
}

nav ul li a .icon svg {
  width: 30px;
  height: 30px;
}

@media (min-width: 767px) {
  nav ul {
    width: 100%;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
  }

  nav ul li {
    width: 25%;
  }
}

/* @media (min-width: 767px) {
  nav ul {
    width: 100%;
    display: flex;
    justify-content: center;
  }
} */
</style>