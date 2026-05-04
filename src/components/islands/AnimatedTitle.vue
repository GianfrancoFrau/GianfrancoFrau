<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Gradient {
  from: string
  to: string
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
]

const current = ref(0)
const next = ref(1)
const fading = ref(false)
let timer: ReturnType<typeof setInterval>

const gradientStyle = (g: Gradient) => ({
  backgroundImage: `linear-gradient(to right, ${g.from}, ${g.to})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
})

const setAccentVar = (g: Gradient) =>
  document.documentElement.style.setProperty('--hero-accent', g.from)

const advance = () => {
  if (fading.value) return
  clearInterval(timer)
  const nextIdx = (current.value + 1) % gradients.length
  next.value = nextIdx
  fading.value = true
  setAccentVar(gradients[nextIdx])
  setTimeout(() => {
    current.value = nextIdx
    fading.value = false
    timer = setInterval(advance, 3500)
  }, 600)
}

onMounted(() => {
  setAccentVar(gradients[current.value])
  timer = setInterval(advance, 3500)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <span
    class="relative inline-flex cursor-pointer select-none"
    @click="advance"
    title="Click me!"
  >
    <span
      class="font-black transition-opacity duration-500"
      :class="fading ? 'opacity-0' : 'opacity-100'"
      :style="gradientStyle(gradients[current])"
    >
      A Web Developer.
    </span>
    <span
      class="font-black transition-opacity duration-500 absolute inset-0"
      :class="fading ? 'opacity-100' : 'opacity-0'"
      :style="gradientStyle(gradients[next])"
    >
      A Web Developer.
    </span>
  </span>
</template>
