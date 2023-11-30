<script setup lang="ts">

</script>

<template>
  <div class="presentation">
    <h1 class="green">Gianfranco Frau</h1>
    <h2>
      A Web Developer.
    </h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.8rem;
  position: relative;
  top: -10px;
  margin-bottom: 5px;
}

h2 {
  font-size: 1.4rem;
}

.presentation h1,
.presentation h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  .presentation h1,
  .presentation h2 {
    text-align: left;
  }
}
</style>
