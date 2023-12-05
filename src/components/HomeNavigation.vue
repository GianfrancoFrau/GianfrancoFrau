<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconPersonRaisedHand from './icons/IconPersonRaisedHand.vue';
import IconProjects from './icons/IconProjects.vue';
import IconNotebooks from './icons/IconNotebooks.vue';
import IconBookmarks from './icons/IconBookmarks.vue';
</script>

<template>
  <nav>
    <!-- <RouterLink to="/">Home</RouterLink> -->
    <ul>
      <li>
        <span class="icon">
          <IconPersonRaisedHand />
        </span>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <span class="icon">
          <IconProjects />
        </span>
        <RouterLink to="/projects">Projects</RouterLink>
      </li>
      <li>
        <span class="icon">
          <IconNotebooks />
        </span>
        <RouterLink to="/notebook">Notebook</RouterLink>
      </li>
      <li>
        <span class="icon">
          <IconBookmarks />
        </span>
        <RouterLink to="/bookmarks">Bookmarks</RouterLink>
      </li>
    </ul>
    <!-- <a href="https://github.com/GianfrancoFrau" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/gianfranco-frau/" target="_blank">Linkedin</a> -->
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1.4rem;
  /* text-align: center; */
  padding: 1rem;
  /* border: 1px solid red; */
}

nav ul {
  /* border: 1px solid blue; */
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li {
  display: flex;
  align-items: center;
}

nav ul li .icon {
  display: flex;
  margin-right: 1rem;
}

nav ul li .icon svg {
  width: 25px;
  height: 25px;
}

nav a {
  display: block;
  flex: 1 auto;
  padding: 1rem 2.5rem 1rem 0;
  text-decoration: underline;
  color: var(--icon-color);
  /* border-bottom: 1px solid var(--color-border); */
}

nav a:hover {
  color: var(--vt-c-black);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 767px) {
  nav ul {
    width: 100%;
    display: flex;
  }
  nav ul li {
    /* border: 1px solid black; */
    width: 25%;
    /* text-align: center; */
  }
}

</style>