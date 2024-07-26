<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div class="w-full h-full flex justify-start items-start p-40 flex-col">
    <div class="text-5xl uppercase font-bold">Projects</div>

    <p class="mt-8">
      I plan to update this page soon. But for now, please see my
      <a href="https://github.com/zackstout">Github</a> to find many of my
      projects.
    </p>
  </div>
</template>

<style scoped lang="postcss">
a {
  @apply text-blue-400 underline;
}
</style>
