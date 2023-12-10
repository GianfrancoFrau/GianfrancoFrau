<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconEnvelopePlus from './icons/IconEnvelopePlus.vue'
const sendMail = () => {
  window.location.href = 'mailto:gian.frau@hotmail.it';
}
</script>

<template>
  <footer>
    <ul>
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
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
}

footer ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

footer ul li {
  display: inline;
  margin-right: 1.5rem;
}

footer ul li:last-child {
  margin-right: 0;
}

footer ul li a {
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--color-text) !important;
}

footer ul li a,
footer ul li a .icon {
  display: inline-flex;
  align-items: center;
}

footer ul li a .icon {
  margin-right: 0.4rem;
}
</style>