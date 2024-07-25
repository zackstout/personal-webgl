<script setup lang="ts">
import { eventBus } from "./eventbus";
import Background from "./components/Background.vue";
</script>

<template>
  <Background> </Background>

  <div
    class="h-full w-full text-center overflow-hidden text-white absolute inset-0 z-10"
  >
    <!-- Header: -->
    <div
      class="absolute top-0 left-0 w-full h-[15vh] flex justify-between items-center px-8"
    >
      <!-- Logo thing: -->
      <div class="bg-blue-200 w-24 h-24 rounded-full"></div>

      <!-- Nav: -->
      <div
        class="flex justify-center items-center space-x-20 text-3xl uppercase"
      >
        <div class="cursor-pointer">Blog</div>
        <div class="cursor-pointer">Projects</div>
        <div class="cursor-pointer">Resume</div>
      </div>
    </div>

    <!-- Main content: -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      WHAT UP!
    </div>
  </div>
</template>
