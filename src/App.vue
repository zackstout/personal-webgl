<script setup lang="ts">
import { eventBus } from "./eventbus";
import { computed, onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import Journey from "./components/Journey.vue";
import Blog from "./components/Blog.vue";
import Resume from "./components/Resume.vue";
import Photos from "./components/Photos.vue";
import Projects from "./components/Projects.vue";
import NotFound from "./components/NotFound.vue";
import gsap from "gsap";

// const btnClick = (ev: any) => {
//   // eventBus.emit("scrollToTop");
//   console.log("scroll", ev.target.parentElement);
//   ev.target.parentElement.scrollTo(0, 0);
//   ev.target.parentElement.scrollTop = 0;
// };

const journeyParts = [
  "start",
  "stars",
  "mountains",
  "forests",
  "villages",
  "tidepools",
  "depths",
];

const routes: Record<string, any> = {
  "/": Journey,
  "/resume": Resume,
  "/blog": Blog,
  "/photos": Photos,
  "/projects": Projects,
};
const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
  // console.log("ash", window.location.hash, currentPath.value.slice(1));
});

const currentView = computed(() => {
  // Dumb hack
  // if (currentPath.value.includes("#")) {
  //   return Journey;
  // }

  // console.log("curr path...", currentPath.value);

  if (journeyParts.some((p) => currentPath.value.includes(p))) {
    return Journey;
  }
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});

/**
 *
 * ideas:
 *
 * - [ ] I think we want text to fade out as it gets toward top, and fade in as it rises from bottom
 * (and vice versa that goes other way)
 *
 * - Instead of the circular "logo", ...or filling it in... animate name "Zack Stout" up to just "ZS"... nice.
 * 
 - [ ] Oooh have a little icon for each one, on the left sidebar, click to scroll! 
 - Yeah click to go to is easy with link. I think GSAP has plugin for smooth scroll to? maybe window can do it..?
 - And probably have next and previous buttons? Maybe...? I guess that's overkill if you have icons honestly.
 - Some subtlety of how to scale them, on hover, depending on how already scaled based on view position...

 - [ ] Github links (for projects but also tide pools) -- Lorenz curves, shakespeare, python (?), competitive coding (aoc), flags, music theory.
 - [ ] But you will ABSOLUTELY want to have nice readmes with pictures.
 - Honestly for now projects page can just literally link to Github. But would be nice to have some write ups there.

 - [?] Fix performance issue -- I think very likely it is initializing multiple rafs.

 - Refactor paragraphs to just use v-for, probably same for sections

 - [x] Make the stars come in one at a time rather than all at once.
 - [x] Make some mountains!

 - [ ] Oh shit deepen that wavelet noise... maybe then the echoing patterns at different structures line makes sense... 

 - [x] Figure out header links, routing, whatever 
 - [x] "Contact" likely doesn't need to be there, use footer. Or it's in Resume. Yeah. 

 - [ ] Need some kind of state for icons.

 - [x] Omg... you don't nee dto make icons... use emojis!!! wow yes I love it

 - [ ] we should add the root font size change for rem

 - [ ] MOBILE...

 - [ ] if someone navigates to say "#tidepools" we should scroll there, (e.g. by going Back)

 - [ ] don't forgt about reflective pool we had for forest...just didn't quite fit there... really nice though

- [ ] clean up all the paragraphs, make them all opacity-80 and leading-tight with container div
 */

// onMounted(() => {
//   console.log("mounted", mainContent.value);
// });
</script>

<template>
  <!-- Header: -->

  <component :is="currentView" />
  <!-- <Journey /> -->
  <Header />
</template>

<style lang="postcss">
body {
  @apply text-white;
  transition-duration: 50ms;
  background: rgb(10, 10, 10);
}
</style>
