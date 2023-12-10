<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconCircle from './icons/IconCircle.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/about">
          <span class="icon">
            <IconCircle />
          </span>
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects">
          <span class="icon">
            <IconCircle />
          </span>
          Projects
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/notebook" class="disabled">
          <span class="icon">
            <IconCircle />
          </span>
          Notebook
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/bookmarks" class="disabled">
          <span class="icon">
            <IconCircle />
          </span>
          Bookmarks
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
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li a {
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem 1rem 1rem;
  margin: 2px;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--vt-c-black);
  border: 1px solid var(--color-border);
  border-collapse: collapse;
  border-radius: var(--border-radius);;
}

nav ul li a:hover {
  color: var(--vt-c-black);
}

nav ul li a.disabled {
  pointer-events: none;
  opacity: 0.5;
}

nav ul li a .icon {
  display: flex;
  margin-right: 1rem;
}

nav ul li a .icon svg {
  width: 30px;
  height: 30px;
  color: var(--color-border);
}

@media (min-width: 767px) {
  nav ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  nav ul li {
    width: 50%;
  }
}
</style>