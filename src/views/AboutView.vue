
<script setup lang="ts">
import IconFingerprint from '@/components/icons/IconFingerprint.vue';
import IconSuitcase from '@/components/icons/IconSuitcase.vue';
import IconBackpack from '@/components/icons/IconBackpack.vue';
import IconHouseGear from '@/components/icons/IconHouseGear.vue';
import IconBoxArrowUpRight from '@/components/icons/IconBoxArrowUpRight.vue';
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
  <div class="app-page about-page">
    <PageHeader title="About" />

    <div class="page-content">

      <section class="bio animate__animated animate__fadeInUp">
        <h2>
          <span class="icon">
            <IconFingerprint />
          </span>
          bio.
        </h2>
        <p>
          I'm born in Nuoro (<span class="phonetic" title="Nùoro"> /ˈnu.oro/</span>), Sardinia, in <b>1989</b>. I
          grew up in
          Orosei and after graduating from high school I moved to Pisa and then to Cagliari, where I currently live and
          work. I am a curious person who likes to learn. I like to understand how things work around me. I love
          technology. As a child I alternated between living outdoors and gaming sessions with my Super Nintendo.
          My love for video games is what drove me to become a programmer when I grew up. I love writing code. Programming
          for me has always been an <b>art</b> to be used to create something that works and has
          a purpose. I love nature. My grandparents were farmers and ranchers and I grew up in a small town near the sea
          and
          surrounded by the countryside. I love music. I like to strum the guitar now and then (classical and acoustic)
          but I have to say I'm not very
          good at it.
        </p>

      </section>

      <section class="profile animate__animated animate__fadeInUp">
        <h2>
          <span class="icon">
            <IconBackpack />
          </span>
          profile & tech skills.
        </h2>
        <p>
          I am a passionate Web Developer, focused on building amazing things with Web Technologies. Here are some of the
          skills I have acquired and technologies I learned or used over the years.
        </p>
        <div class="skills">
          <div class="skills-row">
            <div class="skill big">
              Html
            </div>
            <div class="skill big">
              Css
            </div>
            <div class="skill big">
              Javascript
            </div>
          </div>
          <div class="skills-row">
            <div class="skill md">
              Sass
            </div>
            <div class="skill md">
              Typescript
            </div>
          </div>
          <div class="skills-row">
            <div class="skill sm">
              Angular
            </div>
            <div class="skill sm">
              Vuejs
            </div>
            <div class="skill sm">
              Stenciljs
            </div>
            <div class="skill sm">
              Ionic
            </div>
            <div class="skill sm">
              Nodejs
            </div>
          </div>
          <div class="skills-row">
            <div class="skill xs">
              Docker
            </div>
            <div class="skill xs">
              Wordpress
            </div>
            <div class="skill xs">
              Git
            </div>
            <div class="skill xs">
              Bash
            </div>
            <div class="skill xs">
              .
            </div>
          </div>
        </div>
      </section>

      <section class="experience animate__animated animate__fadeInUp">
        <h2>
          <span class="icon">
            <IconSuitcase />
          </span>
          experience.
        </h2>
        <ul>
          <li>
            <div class="exp">
              <header>
                <h4 class="date">08/2023 &bull; today</h4>
                <h3 class="name">StartupItalia</h3>
              </header>
              <p class="role">Full Stack Developer</p>
            </div>
          </li>
          <li>
            <div class="exp">
              <header>
                <h4 class="date">01/2016 &bull; 08/2023 - 7 years</h4>
                <h3 class="name">Vivocha</h3>
              </header>
              <p class="role">Frontend Developer</p>
            </div>
          </li>
          <li>
            <div class="exp">
              <header>
                <h4 class="date">03/2014 &bull; 01/2016 - 2 years</h4>
                <h3 class="name">Glaamy</h3>
              </header>
              <p class="role">Full Stack Developer</p>
            </div>
          </li>
        </ul>
        <p class="linkedin-button">
          <a href="https://www.linkedin.com/in/gianfranco-frau/" target="_blank">My Linkedin profile <IconBoxArrowUpRight /></a>
        </p>
      </section>

      <section class="info animate__animated animate__fadeInUp">
        <h2>
          <span class="icon">
            <IconHouseGear />
          </span>
          this website.
        </h2>
        <p>Lorem ipsum dolor sit amet</p>
      </section>

    </div>
  </div>
</template>

<style scoped>
section {
  font-size: 1.2rem;
  margin-bottom: 4rem;
}

section:last-child {
  padding-bottom: 2rem;
}

h2 {
  font-weight: 900;
  margin: 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
  display: flex;
  align-items: center;
}

h2 .icon {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

h2 .icon svg {
  width: 2rem;
  height: 2rem;
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

.skills {
  margin: 2.5rem 0;
}

.skills-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.skill {
  background-color: var(--clouds);
  flex: 1 auto;
  margin: 0.1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  text-align: center;
  text-transform: uppercase;
}

.skill.big {
  padding: 1.8rem;
  font-size: 1.8rem;
  font-weight: 900;
}

.skill.md {
  padding: 1.4rem;
  font-size: 1.6rem;
  font-weight: 700;
}

.skill.sm {
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
}

.skill.xs {
  padding: 0.6rem;
  font-size: 1rem;
}

.experience ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.experience ul li {
  display: flex;
  margin-bottom: 2rem;
}

.experience ul li:first-child {
  margin-top: 3rem;
}

.exp header .date {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-text-light);
}

.exp header .name {
  font-weight: 900;
}

.exp .role {
  font-size: 1rem;
}

.linkedin-button svg {
  margin-left: 0.5rem;
}

</style>
