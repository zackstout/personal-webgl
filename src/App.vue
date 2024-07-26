<script setup lang="ts">
import { eventBus } from "./eventbus";
import { onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import Journey from "./components/Journey.vue";
import gsap from "gsap";

// const btnClick = (ev: any) => {
//   // eventBus.emit("scrollToTop");
//   console.log("scroll", ev.target.parentElement);
//   ev.target.parentElement.scrollTo(0, 0);
//   ev.target.parentElement.scrollTop = 0;
// };

/**
 *
 * ideas:
 *
 * - I think we want text to fade out as it gets toward top, and fade in as it rises from bottom
 * (and vice versa that goes other way)
 *
 * - Instead of the circular "logo", ...or filling it in... animate name "Zack Stout" up to just "ZS"... nice.
 * 
 - Oooh have a little icon for each one, on the left sidebar, click to scroll! 
 - Yeah click to go to is easy with link. I think GSAP has plugin for smooth scroll to? maybe window can do it..?
 - And probably have next and previous buttons? Maybe...? I guess that's overkill if you have icons honestly.
 - Some subtlety of how to scale them, on hover, depending on how already scaled based on view position...

 - Github links (for projects but also tide pools) -- Lorenz curves, shakespeare, python (?), competitive coding (aoc), flags, music theory.
 - But you will ABSOLUTELY want to have nice readmes with pictures.
 - Honestly for now projects page can just literally link to Github. But would be nice to have some write ups there.

 - [?] Fix performance issue -- I think very likely it is initializing multiple rafs.

 - Refactor paragraphs to just use v-for, probably same for sections

 - [x] Make the stars come in one at a time rather than all at once.
 - [x] Make some mountains!

 - Oh shit deepen that wavelet noise... maybe then the echoing patterns at different structures line makes sense... 

 - Figure out header links, routing, whatever 
 -- "Contact" likely doesn't need to be there, use footer. Or it's in Resume. Yeah. 

 - Need some kind of state for icons.
 */

// onMounted(() => {
//   console.log("mounted", mainContent.value);
// });
</script>

<template>
  <!-- Header: -->

  <Journey />
  <Header />
</template>

<style lang="postcss">
body {
  @apply text-white;
  transition-duration: 50ms;
}
.icon {
  @apply w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer opacity-80 hover:opacity-100 hover:scale-[1.1] transition-all;
}

.section {
  @apply flex flex-col space-y-3 py-[27vh];
}
</style>
