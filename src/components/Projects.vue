<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="w-full h-full flex justify-start items-start p-40 flex-col space-y-4"
  >
    <div class="text-5xl uppercase font-bold mb-6">Projects</div>

    <hr class="w-full" />
    <br />

    <p>
      I plan to update this page soon. But for now, please see my
      <a href="https://github.com/zackstout">Github</a> to find some of my
      projects.
    </p>

    <p>
      I typically build projects (for example, this one) with Vue.js,
      <a href="https://tailwindcss.com/">Tailwind</a> and
      <a href="https://gsap.com/">GSAP</a>. I like TypeScript a lot. But I still
      build a lot of quick things with good old JavaScript. I enjoy working with
      <code>svg</code> and the HTML <code>canvas</code> element.
    </p>

    <p>
      I love crafting beautiful and engaging animations and experiences. I like
      to simulate natural processes with programs, and more generally create art
      with code.
    </p>
    <p>
      I have fallen in love with
      <a href="https://webglfundamentals.org/">WebGL</a>.
    </p>

    <br />
    <hr class="w-full" />
    <!-- <p>
      I am passionate about crafting beautiful and engaging animations. I love
      representing and manipulating data.
    </p> -->
  </div>
</template>

<style scoped lang="postcss">
a {
  @apply text-blue-400 underline;
}
</style>
