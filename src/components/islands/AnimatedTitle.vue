<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Gradient {
  from: string
  to: string
}

const gradients: Gradient[] = [
  { from: '#ef4444', to: '#22d3ee' },  // red      ~  0°
  { from: '#f97316', to: '#7c3aed' },  // orange   ~ 25°
  { from: '#facc15', to: '#db2777' },  // yellow   ~ 45°
  { from: '#a3e635', to: '#2563eb' },  // lime     ~ 78°
  { from: '#10b981', to: '#0ea5e9' },  // green    ~160°
  { from: '#2dd4bf', to: '#9333ea' },  // teal     ~173°
  { from: '#38bdf8', to: '#f97316' },  // sky      ~199°
  { from: '#3b82f6', to: '#f43f5e' },  // blue     ~217°
  { from: '#8b5cf6', to: '#fbbf24' },  // violet   ~263°
  { from: '#d946ef', to: '#34d399' },  // fuchsia  ~293°
]

const current = ref(0)
const next = ref(1)
const fading = ref(false)
const animated = ref(true)
let timer: ReturnType<typeof setInterval> | undefined

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
    // Disable transitions before resetting state so the swap from span2 back to span1
    // happens instantly and invisibly. nextTick() is not enough here — it waits for
    // Vue's DOM update but not for the browser to paint the frame. The double RAF
    // ensures at least one frame has been rendered without transitions before
    // re-enabling them, preventing a second unwanted fade.
    animated.value = false
    current.value = nextIdx
    fading.value = false
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animated.value = true
        timer = setInterval(advance, 3500)
      })
    })
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
      class="font-black"
      :class="[fading ? 'opacity-0' : 'opacity-100', animated && 'transition-opacity duration-500']"
      :style="gradientStyle(gradients[current])"
    >
      A Web Developer.
    </span>
    <span
      class="font-black absolute inset-0"
      :class="[fading ? 'opacity-100' : 'opacity-0', animated && 'transition-opacity duration-500']"
      :style="gradientStyle(gradients[next])"
    >
      A Web Developer.
    </span>
  </span>
</template>
