<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconCircle from './icons/IconCircle.vue';
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconEnvelopePlus from './icons/IconEnvelopePlus.vue'
import IconTwitterX from './icons/IconTwitterX.vue';
const sendMail = () => {
  window.location.href = 'mailto:gian.frau@hotmail.it';
}
</script>

<template>
  <nav>
    <!--
    <ul class="menu">
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
    -->
    <ul class="contacts animate__animated animate__fadeInUp">
      <li>
        <a href="https://github.com/GianfrancoFrau" target="_blank">
          <span class="icon">
            <IconGithub />
          </span>
          <span>
            Github
          </span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/gianfranco-frau/" target="_blank">
          <span class="icon">
            <IconLinkedin />
          </span>
          <span>Linkedin</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="sendMail" target="_blank">
          <span class="icon">
            <IconEnvelopePlus />
          </span>
          <span>Email</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  padding: 4rem;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

nav ul li {
  flex: 1 auto;
}

nav ul li a {
  font-weight: 900;
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem 1rem 1rem;
  opacity: 0.8;
  margin: 2px;
  font-size: 1.5rem;
  text-decoration: none;
  background: var(--color-background);
  /* border: 1px solid var(--color-border); */
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}

nav ul li a:hover {
  border-color: var(--color-border-hover);
  opacity: 1;
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
  transition: var(--transition-default);
}

nav ul li a:hover .icon svg {
  color: var(--color-border-hover);
}

ul.menu li,
ul.contacts li {
  min-width: 50%;
}

.contacts li a {
  font-size: 1rem;
  padding: 0.2rem;
}

@media (min-width: 767px) {

  .contacts li a {
    font-size: 1.2rem;
  }

  ul.contacts li {
    min-width: 0 !important;
  }
}
</style>