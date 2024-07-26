<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="w-full h-full flex justify-start items-start p-40 overflow-scroll flex-col"
  >
    <div class="text-5xl uppercase font-bold">photos</div>

    <div class="py-12 flex flex-col space-y-8">
      <div class="img-container">
        <img src="../assets/faroe/1.jpeg" />
        <div class="desc">A puffin on Mykines.</div>
      </div>
      <div class="img-container">
        <img src="../assets/faroe/2.jpeg" />
        <div class="desc">A fae-tastic waterfall.</div>
      </div>
      <div class="img-container">
        <img src="../assets/faroe/3.jpeg" />
        <div class="desc">The sun sets on a horse.</div>
      </div>
      <div class="img-container">
        <img src="../assets/faroe/4.jpeg" />
        <div class="desc">A friend from the beach.</div>
      </div>
      <div class="img-container">
        <img src="../assets/faroe/5.jpeg" />
        <div class="desc">The most incredible cattle.</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.desc {
  @apply mt-2;
}

img {
  @apply rounded-sm;
}
</style>
