<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-start items-start pt-40 px-40 pb-32 overflow-scroll"
  >
    <div class="text-5xl uppercase font-bold">resume</div>

    <div class="flex flex-col mt-8 space-y-8">
      <hr />

      <h1>Experience</h1>
      <div class="flex flex-col space-y-3">
        <div>
          <h4>Front End Developer</h4>
          <h2>Screenfeed</h2>
          <h3>Oct. 2018 - Present</h3>
        </div>
        <div>
          <h4>Web Development Bootcamp TA</h4>
          <h2>University of Minnesota</h2>
          <h3>Feb. 2018 - Oct. 2018</h3>
        </div>
      </div>

      <hr />
      <h1 class="mt-4">Education</h1>
      <div class="flex flex-col space-y-3">
        <div>
          <h4>Full-stack Software Development Bootcamp</h4>

          <h2>Prime Digital Academy</h2>
          <h3>Aug. 2017 - Jan. 2018</h3>
        </div>
        <div>
          <h4>Bachelor of Arts, Mathematics & Philosophy</h4>

          <h2>Reed College</h2>
          <h3>Aug. 2012 - May 2015</h3>
        </div>
        <div>
          <h4>Cowboy College</h4>

          <h2>Deep Springs College</h2>
          <h3>Jul. 2010 - Jul. 2012</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply font-normal text-3xl uppercase;
}

h2 {
  @apply font-normal text-xl;
}

h3 {
  @apply italic pl-0;
}

h4 {
  @apply pl-0 uppercase italic text-xl;
}
</style>
