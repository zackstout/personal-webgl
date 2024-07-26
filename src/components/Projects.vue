<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="w-full h-full flex justify-start items-start p-40 flex-col space-y-4"
  >
    <div class="text-5xl uppercase font-bold mb-6">Projects</div>

    <p>
      I plan to update this page soon. But for now, please see my
      <a href="https://github.com/zackstout">Github</a> to find many of my
      projects.
    </p>

    <p>
      I typically build projects (for example, this one) with Vue.js,
      TailwindCSS and <a href="https://gsap.com/">GSAP</a>. I dabble in
      <a href="https://webglfundamentals.org/">WebGL</a>.
    </p>

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
