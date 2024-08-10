<script setup lang="ts">
import { eventBus } from "./eventbus";
import { computed, onMounted, ref } from "vue";
//@ts-ignore
import Header from "./components/Header.vue";
//@ts-ignore
import Journey from "./components/Journey.vue";
//@ts-ignore
import Blog from "./components/Blog.vue";
//@ts-ignore
import Resume from "./components/Resume.vue";
//@ts-ignore
import Photos from "./components/Photos.vue";
//@ts-ignore
import Projects from "./components/Projects.vue";
//@ts-ignore
import NotFound from "./components/NotFound.vue";
import gsap from "gsap";

// const btnClick = (ev: any) => {
//   // eventBus.emit("scrollToTop");
//   console.log("scroll", ev.target.parentElement);
//   ev.target.parentElement.scrollTo(0, 0);
//   ev.target.parentElement.scrollTop = 0;
// };

//

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

 *
 * - Instead of the circular "logo", ...or filling it in... animate name "Zack Stout" up to just "ZS"... nice.
 * 
 - [x] Oooh have a little icon for each one, on the left sidebar, click to scroll! 
 - Yeah click to go to is easy with link. I think GSAP has plugin for smooth scroll to? maybe window can do it..?
 - And probably have next and previous buttons? Maybe...? I guess that's overkill if you have icons honestly.
 - Some subtlety of how to scale them, on hover, depending on how already scaled based on view position...

 - [x] Github links (for projects but also tide pools) -- Lorenz curves, shakespeare, python (?), competitive coding (aoc), flags, music theory.
 - [ ] But you will ABSOLUTELY want to have nice readmes with pictures.
 - Honestly for now projects page can just literally link to Github. But would be nice to have some write ups there.

 - [x!!!] Fix performance issue -- I think very likely it is initializing multiple rafs.

 - Refactor paragraphs to just use v-for, probably same for sections

 - [x] Make the stars come in one at a time rather than all at once.
 - [x] Make some mountains!

 - [ ] Oh shit deepen that wavelet noise... maybe then the echoing patterns at different structures line makes sense... 

 - [x] Figure out header links, routing, whatever 
 - [x] "Contact" likely doesn't need to be there, use footer. Or it's in Resume. Yeah. 


 - [x] Omg... you don't nee dto make icons... use emojis!!! wow yes I love it

 - [x] fix performance issue so it's smooth as butter what!!!
// ==========================================================================================================
// WHATEVER
- [ ] make the "Scroll on" bold text a button... should every view have one...? eh
- [ ] projects page, I think will come naturally when you do READMEs
  * - [ ] I think we want text to fade out as it gets toward top, and fade in as it rises from bottom
 * (and vice versa that goes other way)
- [ ] Makes crolling at the bottom rotate the stars or something


// EASY
- [x] add contact to resume, and some tagline i guess about freelance openness
- [ ] add bullets to resume where you clarify what you do/have done at SF
  - [x] header tab should be highlighted when active. 
  - [ ] so i guess we should do same thing with left hand sidebar too..
 - [ ] we should add the root font size change for rem
 - [ ] it kind of does just feel like prev/next buttons would be nice
- [ ] clean up all the paragraphs, make them all opacity-80 and leading-tight with container div


- [ ] figure out why the header won't work


 // CREATIVE
   - [ ] update tree/forest and reef text. come on lol.
 - [ ] paring down photos to like 3 per trip and writing something about each would be best.


 // SCROLL BUGS
- [x] ZS button not scrolling anymore. (was always hacky..)
 - [ ] if someone navigates to say "#tidepools" we should scroll there, (e.g. by going Back) 
 - [ ] -- and make scrolling still go there, to the html section, in the url.


- [ ] absolutely should have background of some kind in other views, now that performance is OK
(honestly a diff background/interaction on each one would go insane...)
- [ ] blog
- [ ] resume
- [ ] photos
- [ ] projects

- [ ] first blog post, just go for it


// SHADER UPGRADES
 - [x] replace tree with something better
  -- ooh we can go back to wavy hills idea. Although we are now doing with reef...
  -- at least can use sky. maybe clouds too.
  - But man I still love this abstract ring/lumber cut.
  - It could be like a background for the text? Leaving other side open, kind of opposite of Tide pools..
  - maybe brown edges around the edge, narrow borders, really hammer it home.
  - That feels nice. Then a tree grows up in the empty space?
 - [x] enrich the reef
 - [ ] don't forgt about reflective pool we had for forest...just didn't quite fit there... really nice though.. Ah well.
 - Actually yeah update the pools maybe, but already super nice.


// AHH!!
 - [ ] MOBILE...


 */

// onMounted(() => {
//   console.log("mounted", mainContent.value);
// });

// Note wrapper does nothing... trying to make header stretch to full width...
</script>

<template>
  <div class="w-full h-full relative">
    <component :is="currentView" />
    <!-- <Journey /> -->

    <!-- Header: -->

    <Header />
  </div>
</template>

<style lang="postcss">
body {
  @apply text-white;
  transition-duration: 50ms;
  background: rgb(10, 10, 10);
}

.top-padding {
  @apply pt-40;
}

@media (max-width: 500px) {
  .top-padding {
    @apply pt-32;
  }
}
</style>
