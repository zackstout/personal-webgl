<script setup lang="ts">
import { eventBus } from "../eventbus";
import { computed, onMounted, ref } from "vue";

function scrollTop() {
  // If we are in "journey"... then we scroll.
  // But otherwise we need to change page.

  // Yeah not quite working.... it doesn't seem to reload this component properly when we change views.... huh...
  // Yeah we need the manual listener, computed won't work for window location I guess.
  eventBus.emit("scrollTop", null);
}

const otherPages = ["blog", "resume", "projects", "photos"];

const isJourney = ref(
  !otherPages.some((p) => window.location.href.includes(p))
);
const view = ref(window.location.href);

window.addEventListener("hashchange", () => {
  isJourney.value = !otherPages.some((p) => window.location.href.includes(p));
  view.value = window.location.href;
});

function activeClass(page: string) {
  return view.value.includes(page) ? "opacity-100" : "opacity-60";
}
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-[15vh] flex justify-between items-center z-[1000] container"
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
    <div class="nav">
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
      <!-- <a
        href="#/photos"
        class="cursor-pointer hover:opacity-100"
        :class="activeClass('photos')"
        >Photos</a
      > -->
    </div>
  </div>
</template>

<style scoped lang="postcss">
.nav {
  @apply flex justify-center items-center space-x-8 uppercase;
}
.container {
  @apply px-16;
}
@media (max-width: 500px) {
  .nav {
    display: none;
  }
  .container {
    @apply px-4;
  }
}
</style>
