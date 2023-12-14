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

const gradients = ['nephritis-to-wet-asphalt', 'wet-asphalt-to-green-sea']
const gradient = ref(gradients[getRandomNumber(gradients.length)])
const h2Css = computed(() => {
  return {
    [gradient.value]: true
  }
})

const iconCss = computed(() => ({
  icon: true,
  animate__animated: true,
  [`animate__${animation.value}`]: true
}))

</script>

<template>
  <div class="presentation">
    <b><span class="welcome">Welcome!</span> I'm</b>
    <h1 class="yellow-tail-font">
      Gianfranco Frau
    </h1>
    <h2 @click="handleTitleClick">
      <span :class="h2Css">A Web Developer.</span>
      <span :class="iconCss">👾</span>
    </h2>
  </div>
</template>

<style scoped>
.presentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.presentation b {
  font-size: 1.8rem;
  font-weight: 900;
}

.welcome {
  font-weight: 900;
}

h1 {
  font-size: 3rem;
  transition: all 0.5s ease-in;
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

h2 span:first-child {
  font-weight: 900;
  transition: all 0.5s;
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

@media (min-width: 767px) {
  .presentation {
    margin-top: 0;
  }

  h1 {
    font-size: 3.5rem;
  }
}
</style>
