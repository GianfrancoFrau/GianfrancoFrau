<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ text: string }>()

interface Gradient {
  from: string
  to: string
}

/**
 * Clicking rotates the hue of the two palette accents, keeping their lightness and chroma so
 * every step stays readable. Some hues (yellow, green) read lighter at the same lightness:
 * --hue-step-darken (global.css) compensates on the light theme.
 */
const rotate = (token: string, degrees: number) =>
  degrees === 0
    ? `var(${token})`
    : `oklch(from var(${token}) calc(l - var(--hue-step-darken)) c calc(h + ${degrees}))`

const HUE_STEPS = 10
const gradients: Gradient[] = Array.from({ length: HUE_STEPS }, (_, i) => {
  const degrees = (360 / HUE_STEPS) * i
  return { from: rotate('--signal', degrees), to: rotate('--signal-2', degrees) }
})

const current = ref(0)
const next = ref(1)
const fading = ref(false)
const animated = ref(true)

const gradientStyle = (g: Gradient) => ({
  backgroundImage: `linear-gradient(to right, ${g.from}, ${g.to})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent'
})

const setAccentVar = (g: Gradient) =>
  document.documentElement.style.setProperty('--hero-accent', g.from)

const advance = () => {
  if (fading.value) return
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
      })
    })
  }, 600)
}

onMounted(() => setAccentVar(gradients[current.value]))
</script>

<template>
  <button
    type="button"
    class="relative inline-flex cursor-pointer select-none"
    title="Click me!"
    @click="advance"
  >
    <span
      class="font-heading-solid"
      :class="[
        fading ? 'opacity-0' : 'opacity-100',
        animated && 'transition-opacity duration-500 motion-reduce:transition-none'
      ]"
      :style="gradientStyle(gradients[current])"
    >
      {{ text }}
    </span>
    <span
      class="font-heading-solid absolute inset-0"
      aria-hidden="true"
      :class="[
        fading ? 'opacity-100' : 'opacity-0',
        animated && 'transition-opacity duration-500 motion-reduce:transition-none'
      ]"
      :style="gradientStyle(gradients[next])"
    >
      {{ text }}
    </span>
  </button>
</template>
