<script setup lang="ts">
import { eventBus } from "../eventbus";
import { computed, onMounted, ref } from "vue";

function scrollTop() {
  // TODO: If we are in "journey"... then we scroll.
  // But otherwise we need to change page.

  // Yeah not quite working.... it doesn't seem to reload this component properly when we change views.... huh...
  // Yeah we need the manual listener, computed won't work for window location I guess.
  eventBus.emit("scrollTop", null);
}

// const isJourney = computed(() => {
//   console.log("is journey...", window.location.href);
//   const otherPages = ["blog", "resume", "projects", "photos"];
//   return !otherPages.some((p) => window.location.href.includes(p));
// });

const isJourney = ref(false);
const view = ref(window.location.href);

const otherPages = ["blog", "resume", "projects", "photos"];

window.addEventListener("hashchange", () => {
  isJourney.value = !otherPages.some((p) => window.location.href.includes(p));
  view.value = window.location.href;
});

function activeClass(page: string) {
  return view.value.includes(page) ? "opacity-100" : "opacity-80";
}

// whoops this is broken now... because we are not using the hash anymore...
// [ ] TODO: Want to make clicking "ZS" do a scroll. But we need reference to scroll wrapper or.... or no just emit event I guess
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-[15vh] flex justify-between items-center px-16 z-[1000]"
  >
    <!-- Logo thing: -->
    <div
      @click="scrollTop"
      v-if="isJourney"
      class="border border-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer opacity-80 hover:opacity-100"
    >
      ZS
    </div>

    <a
      href="#start"
      v-else
      class="border border-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer opacity-80 hover:opacity-100"
      >ZS</a
    >

    <!-- Nav: -->
    <div class="flex justify-center items-center space-x-8 text-md uppercase">
      <a
        href="#/blog"
        class="cursor-pointer hover:opacity-100"
        :class="activeClass('blog')"
        >Blog</a
      >
      <a
        href="#/projects"
        class="cursor-pointer hover:opacity-100"
        :class="activeClass('projects')"
        >Projects</a
      >
      <a
        href="#/resume"
        class="cursor-pointer hover:opacity-100"
        :class="activeClass('resume')"
        >Resume</a
      >
      <a
        href="#/photos"
        class="cursor-pointer hover:opacity-100"
        :class="activeClass('photos')"
        >Photos</a
      >
      <!-- <div class="cursor-pointer opacity-80 hover:opacity-100">Contact</div> -->
    </div>
  </div>
</template>
