
<script setup lang="ts">
import AppHeaderVue from '../components/AppHeader.vue';
</script>

<template>
  <div class="app-page about-page">
    <AppHeaderVue title="About" />

    <div class="page-content">

      <section class="bio">
        <h2>
          <span class="icon">🌱</span>
          bio.
        </h2>
        <p>
          I'm born in Nuoro (<span class="phonetic" title="Nùoro"> /ˈnu.oro/</span>), Sardinia, in <b>1989</b>. I
          grew up in
          Orosei and after graduating from high school I moved to Pisa and then to Cagliari, where I currently live and
          work.
        </p>
        <p>
          I am a curious person who likes to learn. I like to understand how things work around me.
        </p>
        <p>
          I love technology. As a child I alternated between living outdoors and gaming sessions with my Super Nintendo.
          My love for video games is what drove me to become a programmer when I grew up.
        </p>
        <p>
          I love writing code. Programming for me has always been an <b>art</b> to be used to create something that works and has
          a purpose.
        </p>
        <p>
          I love nature. My grandparents were farmers and ranchers and I grew up in a small town near the sea and
          surrounded by the countryside.
        </p>
        <p>
          I love music. I like to strum the guitar now and then (classical and acoustic) but I have to say I'm not very
          good at it.
        </p>

      </section>

      <section class="profile">
        <h2>
          <span class="icon">👨‍💻</span>
          profile & tech skills.
        </h2>
        <p>
          I am a passionate Web Developer, focused on building amazing things with Web Technologies.
        </p>
        <p>Here are some of the
          skills I have acquired and technologies I learned or used over the years.
        </p>
        <ul>
          <li>HTML & CSS</li>
          <li>Javascript & Typescript</li>
          <li>Web Components based architectures</li>
          <li>Angular, Vuejs, Stenciljs, Ionicframework</li>
          <li>Scripting and automation</li>
          <li>Git and software versioning</li>
        </ul>
      </section>

    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 900;
  margin: 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid var(--color-border);
}

.phonetic {
  font-style: italic;
  border-bottom: 1px dashed var(--color-text);
}

.bio ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.profile {
  padding-bottom: 4rem;
}

.profile ul {
  padding: 1rem;
}

</style>
