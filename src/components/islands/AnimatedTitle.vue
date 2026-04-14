<script setup lang="ts">
import { ref } from 'vue';

const gradients = [
  'from-emerald-500 to-sky-500',
  'from-violet-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-blue-500 to-indigo-500',
  'from-green-500 to-teal-500',
];

const pickOther = <T>(arr: T[], current: T): T => {
  const others = arr.filter((i) => i !== current);
  return others[Math.floor(Math.random() * others.length)];
};

const currentGradient = ref(gradients[Math.floor(Math.random() * gradients.length)]);

const handleClick = () => {
  currentGradient.value = pickOther(gradients, currentGradient.value);
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
    <span role="img" aria-label="alien monster">👾</span>
  </span>
</template>
