<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-start items-start pt-40 px-40 pb-12 overflow-scroll"
  >
    <div class="text-5xl uppercase font-bold">resume</div>

    <div class="flex flex-col mt-12 space-y-4">
      <h1>Experience</h1>
      <div class="flex flex-col space-y-1">
        <div>
          <h2>Screenfeed</h2>
          <h4>Front End Developer</h4>
          <h3>Oct. 2018 - Present</h3>
        </div>
        <h2>University of Minnesota</h2>
        <h4>Web Development Bootcamp TA</h4>
        <h3>Feb. 2018 - Oct. 2018</h3>
      </div>

      <h1>Education</h1>
      <div class="flex flex-col space-y-1">
        <h2>Prime Digital Academy</h2>
        <h4>Full-stack Software Development Bootcamp</h4>
        <h3>Aug. 2017 - Jan. 2018</h3>
        <h2>Reed College</h2>
        <h4>Mathematics & Philosophy</h4>
        <h3>Aug. 2012 - May 2015</h3>
        <h2>Deep Springs College</h2>
        <h4>Cowboy College</h4>
        <h3>Jul. 2010 - Jul. 2012</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply font-bold text-3xl;
}

h2 {
  @apply font-normal text-xl;
}

h3 {
  @apply italic pl-8;
}

h4 {
  @apply pl-8;
}
</style>
