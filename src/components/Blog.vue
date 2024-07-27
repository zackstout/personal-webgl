<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div class="w-full h-full flex flex-col justify-start items-start p-40">
    <div class="text-5xl uppercase font-bold mb-8">blog</div>

    <!-- <div class="flex flex-col space-y-4">
      <p>I had a blog, once.</p>

      <p>
        It turned into kind of an unmaintainable mess, but I plan to port it
        over.
      </p>

      <p>
        Soon I will write a post about making a moon shadow in 2d with
        projections!
      </p>
    </div> -->

    <hr class="w-full mb-8" />

    <div class="post">
      <h1>Lunar Phases Math</h1>
      <h2>July 26, 2024</h2>

      <div class="flex flex-col space-y-4 mb-8">
        <p>
          I found a hoodie recently with the phases of the moon depicted on the
          front. I love it. I wanted to recreate the design myself.
        </p>

        <p>
          I know that in real life, this effect is caused by differences in the
          moon's position in relation to the sun and the earth resulting from
          its orbit. This is a bit tricky to get my head around.
        </p>

        <p>
          Looking at this problem, it seems like we can pretend that everything
          is just happening on a plane. The moon is just a circle. And the
          shadow cut occurs along some other circle that intersects with the
          moon at its exact top and bottom.
        </p>
      </div>
    </div>

    <hr class="w-full mb-4" />
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply text-3xl font-bold;
}
h2 {
  @apply text-lg font-bold mb-4;
}
</style>
