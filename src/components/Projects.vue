<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
// @ts-ignore
import ProjectsBackground from "./ProjectsBackground.vue";

const progress = ref(0);
const mainContent = ref(null);

function scrollListen(ev: Event) {
  // @ts-ignore
  const mainHeight = mainContent.value?.getBoundingClientRect().height;
  progress.value = (ev.target as any)?.scrollTop / mainHeight;
}
</script>

<template>
  <div class="w-full h-full relative">
    <ProjectsBackground :progress="progress" />
    <div
      class="w-full h-full flex justify-start items-start pt-40 pb-24 flex-col space-y-4 overflow-scroll absolute inset-0 z-[5] main"
      ref="mainContent"
      @scroll="scrollListen"
    >
      <div class="text-5xl uppercase font-bold mb-6">Projects</div>

      <hr class="w-full" />
      <br />

      <p>
        I plan to update this page soon. But for now, please see my
        <a href="https://github.com/zackstout">Github</a> to find some of my
        projects.
      </p>

      <ul>
        <li>
          I typically build projects (for example, this one) with Vue.js and
          <a href="https://tailwindcss.com/">Tailwind</a>.
        </li>
        <li>
          I love to work with <a href="https://gsap.com/">GSAP</a> to create
          animations.
        </li>
        <li>
          I like TypeScript a lot. But I still build a lot of quick things with
          good old JavaScript.
        </li>
        <li>
          I enjoy working with <code>svg</code> and the HTML
          <code>canvas</code> element.
        </li>
        <li>
          I have been bewitched by
          <a href="https://webglfundamentals.org/">WebGL</a>. It seems to live
          right at the crossroads of math and art. It's what I used to create
          the backgrounds for each page on this site.
        </li>
      </ul>

      <p>
        I love crafting beautiful and engaging animations and experiences. I
        like to simulate natural processes with programs, and more generally
        create art with code.
      </p>

      <br />
      <hr class="w-full" />
      <!-- <p>
      I am passionate about crafting beautiful and engaging animations. I love
      representing and manipulating data.
    </p> -->
    </div>
  </div>
</template>

<style scoped lang="postcss">
a {
  @apply text-blue-400 underline;
}

li {
  list-style-type: circle;
  @apply pl-2 ml-8 mt-3;
}

.main {
  @apply px-40;
}

@media (max-width: 500px) {
  .main {
    @apply px-8;
  }
}
</style>
