<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-[15vh] flex justify-between items-center px-16 z-[1000]"
  >
    <!-- Logo thing: -->
    <a
      href="#start"
      class="border border-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer opacity-80 hover:opacity-100"
    >
      ZS
    </a>

    <!-- Nav: -->
    <div class="flex justify-center items-center space-x-8 text-md uppercase">
      <div class="cursor-pointer opacity-80 hover:opacity-100">Blog</div>
      <div class="cursor-pointer opacity-80 hover:opacity-100">Projects</div>
      <div class="cursor-pointer opacity-80 hover:opacity-100">Resume</div>
      <div class="cursor-pointer opacity-80 hover:opacity-100">Photos</div>
      <!-- <div class="cursor-pointer opacity-80 hover:opacity-100">Contact</div> -->
    </div>
  </div>
</template>
