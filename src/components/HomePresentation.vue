<script setup lang="ts">

</script>

<template>
  <div class="presentation">
    <h1>
      Gianfranco Frau
    </h1>
    <h2>
      A Web Developer.
      <span class="icon animate__animated animate__bounceIn">👾</span>
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
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  position: absolute;
  right: -12px;
  background: white;
  border: 1px solid var(--color-border);
  font-size: 1.3rem;
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
