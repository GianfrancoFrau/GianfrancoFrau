<script setup lang="ts">
import { computed, ref } from 'vue';

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

const animateIcon = () => {
  const i = getRandomNumber(animations.length);
  const a = animations[i];
  if (a !== animation.value) {
    animation.value = a;
  } else {
    animateIcon();
  }
}

const handleTitleClick = () => {
  animateIcon();
}

const animations = ['bounce', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat']
const startingAnimation = 'bounceIn';
const animation = ref(startingAnimation)

const iconCss = computed(() => ({
  icon: true,
  animate__animated: true,
  [`animate__${animation.value}`]: true
}))


</script>

<template>
  <div class="presentation">
    <h1>
      Gianfranco Frau
    </h1>
    <h2 @click="handleTitleClick">
      A Web Developer.
      <span :class="iconCss">👾</span>
    </h2>
    <!-- <h3 class="startupitalia">
      <span>Currently @ <a href="https://startupitalia.eu" target="_blank">StartupItalia</a></span>
      <span class="icon animate__animated animate__bounceIn">🚀</span>
    </h3> -->
  </div>
</template>

<style scoped>
.presentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid red;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.4rem;
}

h2 {
  font-size: 1.4rem;
}

h2:hover {
  cursor: pointer;
}

h2,
h3 {
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px 35px;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  background: white;
  font-weight: 900;
}

h2 .icon,
h3 .icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -1.2rem;
  background: white;
  border: 1px solid var(--color-border);
  font-size: 2rem;
  border-radius: 50%;
}

/* h3.startupitalia a {
  color: var(--startupitalia);
}

h3.startupitalia a:hover {
  color: var(--startupitalia);
}

h1,
h2 {
  display: inline-block;
  width: auto;
} */
</style>
