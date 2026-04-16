<script setup lang="ts">
import { ref } from 'vue';

const gradients = [
  'from-emerald-500 to-sky-500',
  'from-violet-500 to-amber-400',
  'from-orange-500 to-violet-600',
  'from-blue-500 to-rose-500',
  'from-teal-400 to-purple-600',
  'from-yellow-400 to-pink-600',
  'from-red-500 to-cyan-400',
  'from-lime-400 to-blue-600',
  'from-fuchsia-500 to-emerald-400',
  'from-sky-400 to-orange-500',
];

const pick = () => gradients[Math.floor(Math.random() * gradients.length)];

const currentGradient = ref(pick());

const handleClick = () => {
  currentGradient.value = pick();
};
</script>

<template>
  <span
    class="inline-flex items-center gap-2 cursor-pointer select-none"
    @click="handleClick"
    title="Click me!"
  >
    <span
      :class="`bg-gradient-to-r ${currentGradient} bg-clip-text text-transparent font-black transition-all duration-500`"
    >
      A Web Developer.
    </span>
    <!-- <span role="img" aria-label="alien monster">👾</span> -->
  </span>
</template>
