<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div class="w-full h-full flex flex-col justify-start items-start p-40">
    <div class="text-5xl uppercase font-bold mb-8">blog</div>

    <div class="flex flex-col space-y-4">
      <p>I had a blog, once.</p>

      <p>
        It turned into kind of an unmaintainable mess, but I plan to port it
        over.
      </p>

      <p>
        Soon I will write a post about making a moon shadow in 2d with
        projections!
      </p>
    </div>
  </div>
</template>
