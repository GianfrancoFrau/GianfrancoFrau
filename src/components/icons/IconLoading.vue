<!-- https://blog.logrocket.com/how-to-animate-svg-css-tutorial-examples/ -->
<template>
  <svg id="loading-bar" xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22">
    <g>
      <rect id="loading-bar-left" width="8" height="22" />
      <rect id="loading-bar-middle" width="8" height="22" x="14" />
      <rect id="loading-bar-right" width="8" height="22" x="28" />
    </g>
  </svg>
</template>

<style scoped>

#loading-bar-left {
  animation: loading-bar-morph 1s linear 0.1s infinite;
  transform-origin: center;
  fill: var(--color-icon-loading);
}

#loading-bar-middle {
  animation: loading-bar-morph 1s linear 0.2s infinite;
  transform-origin: center;
  fill: var(--color-icon-loading);
}

#loading-bar-right {
  animation: loading-bar-morph 1s linear 0.4s infinite;
  transform-origin: center;
  fill: var(--color-icon-loading);
}

@keyframes loading-bar-morph {
  0% {
    transform: scaleY(1);
  }

  25% {
    transform: scaleY(0.3);
  }

  50% {
    transform: scaleY(0.7);
  }

  75% {
    transform: scaleY(0.15);
  }
}</style>