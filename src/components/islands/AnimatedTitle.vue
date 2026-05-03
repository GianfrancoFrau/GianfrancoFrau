<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Gradient {
  from: string;
  to: string;
}

const gradients: Gradient[] = [
  { from: '#10b981', to: '#0ea5e9' },
  { from: '#8b5cf6', to: '#fbbf24' },
  { from: '#f97316', to: '#7c3aed' },
  { from: '#3b82f6', to: '#f43f5e' },
  { from: '#2dd4bf', to: '#9333ea' },
  { from: '#facc15', to: '#db2777' },
  { from: '#ef4444', to: '#22d3ee' },
  { from: '#a3e635', to: '#2563eb' },
  { from: '#d946ef', to: '#34d399' },
  { from: '#38bdf8', to: '#f97316' },
];

const pick = () => gradients[Math.floor(Math.random() * gradients.length)];

const currentGradient = ref<Gradient>(pick());

const setAccentVar = (g: Gradient) => {
  document.documentElement.style.setProperty('--hero-accent', g.from);
};

onMounted(() => setAccentVar(currentGradient.value));

const handleClick = () => {
  currentGradient.value = pick();
  setAccentVar(currentGradient.value);
};
</script>

<template>
  <span
    class="inline-flex items-center cursor-pointer select-none"
    @click="handleClick"
    title="Click me!"
  >
    <span
      class="font-black"
      :style="{
        backgroundImage: `linear-gradient(to right, ${currentGradient.from}, ${currentGradient.to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }"
    >
      A Web Developer.
    </span>
  </span>
</template>
