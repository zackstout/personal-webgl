<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
import Background from "./Background.vue";

const mainContent = ref(null);

const progress = ref(0);

// TODO: Pass into Background shader
function scrollListen(ev: Event) {
  // @ts-ignore
  // console.log(
  //   "scroll heard",
  //   ev.target?.scrollTop,
  //   ev.target.getBoundingClientRect().height,
  //   mainContent.value?.getBoundingClientRect().height
  // );
  const mainHeight = mainContent.value?.getBoundingClientRect().height;
  progress.value = (ev.target as any)?.scrollTop / mainHeight;
}
const myName = "Zack Stout".toUpperCase().split("");
</script>

<template>
  <Background :progress="progress"> </Background>

  <div
    class="w-full overflow-scroll absolute inset-0 z-10"
    @scroll="scrollListen"
  >
    <!-- Left icon sidebar: -->
    <div
      class="fixed left-0 top-0 h-full w-32 flex flex-col items-center justify-center space-y-4"
    >
      <!-- Oooh but not quite... we don't want it at top... I guess we could use same padding hack... or just go to GSAP and/or compute..?? -->
      <!-- Yes padding works! -->
      <!-- <a class="icon" href="#start">H</a> -->
      <a class="icon" href="#stars">S</a>
      <a class="icon" href="#mountains">M</a>
      <a class="icon" href="#forests">F</a>
      <a class="icon" href="#villages">V</a>
      <a class="icon" href="#tidepools">T</a>
      <a class="icon" href="#depths">D</a>
    </div>

    <!-- Main content: -->
    <div
      class="flex relative items-start justify-start flex-col w-1/2 ml-40 pb-[50vh]"
      ref="mainContent"
    >
      <!-- Intro section (put top padding here so we can jump here via link): -->
      <div id="start" class="section">
        <p class="text-5xl font-bold uppercase">
          <span v-for="c in myName">{{ c }}</span>
        </p>
        <p class="text-2xl opacity-90">Creative Developer</p>
        <p class="text-md leading-tight opacity-80">
          👋 Thanks for stopping by! I feel very lucky to have found the field
          of web development, where logical rigor runs alongside creative
          expression. I'm always looking for new ways to combine these two
          aspects of my personality.
        </p>

        <p class="text-md leading-tight opacity-80">
          I'm currently working as a front-end developer in Minneapolis. I love
          being with my dog, playing music, and exploring the outdoors.
        </p>

        <p>Scroll on to learn more about my journey in software.</p>
      </div>

      <!-- First section: -->
      <div id="stars" class="section">
        <p class="text-5xl font-bold uppercase">the stars</p>
        <p class="text-2xl font-normal">Beginnings</p>
        <!-- <p class="text-md leading-tight">
          ✨ The vastness of space and the smallness of our place in it has
          always calmed me. It astounds me how much we can know about the
          universe, being made of stardust ourselves. There is so much we have
          yet to learn.
        </p>
        <p class="text-md leading-tight">
          It astounds me that we can trace precise mathematical orbits through
          the heavens, and explain the motion through physical principles.
        </p> -->

        <div class="leading-tight opacity-80 flex flex-col space-y-3">
          <p>
            ✨ My educational journey began with philosophy and mathematics. In
            a way, both of these romances began with the stars.
          </p>

          <p>The night sky inspires wonder. It leads to mystery and myth.</p>

          <p>
            But it also invites analysis: we can chart the orbits of celestial
            bodies -- gorgeous conic sections -- with mathematical precision.
          </p>

          <p>
            The first time I wrote the code to make a circle move in a perfect
            parabolic path across the screen, I was choked with awe.
          </p>
        </div>
      </div>

      <!-- Second section: -->
      <div id="mountains" class="section">
        <p class="text-5xl font-bold uppercase">Mountains</p>
        <p class="text-2xl">A Rocky Ascent</p>
        <!-- <p class="text-md leading-tight">
          ⛰️ I love mountains, though I have a perilous fear of heights. I love
          the vistas they afford, and how earned they feel.
        </p>
        <p class="text-md leading-tight">
          From mountains, we watch the heavens, and we feel grounded and
          especially earthly.
        </p>
        <p class="text-md leading-tight">
          Learning is like climbing mountains. You never know the next paths
          that will open before you, until you ascend.
        </p> -->

        <p>
          ⛰️ Learning is a lot like climbing mountains. Fortunately not too
          alike, because I am mercilessly afraid of heights.
        </p>

        <p>
          You stumble and slide, but earn each new vista. And with each new
          vista, new pathways forward open up.
        </p>

        <p>
          I love learning, and learning to code (at boot camp, on my own, and
          then on the job) has been no different. I love to find new sights, and
          new ways of seeing.
        </p>
      </div>

      <!-- Third section: -->
      <!-- TODO: this one needs work... doesn't make sense... cut with grain? idk. -->
      <div id="forests" class="section">
        <p class="text-5xl font-bold uppercase">Forests</p>
        <p class="text-2xl">Growth and Finding Patterns</p>
        <p class="text-md leading-tight">
          🌳 I love the trees of nature -- reaching for the sky, rooted in the
          soil, branching in chaotic but ordered ways, spreading leaves and
          gulping sunlight.
        </p>

        <p>
          And I love mathematical trees -- fractals and data structures and
          decision paths. I love distilling a problem to its clearest and
          simplest representation, thinking it through slowly until it is time
          to pounce.
        </p>

        <p>
          Working in software has been a dream come true. We are rooted in human
          concerns, yet we stretch toward technical purity and the heights of
          imagination.
        </p>
      </div>

      <!-- Fourth section: -->
      <div id="villages" class="section">
        <p class="text-5xl font-bold uppercase">Villages</p>
        <p class="text-2xl">The need for community</p>
        <!-- <p class="text-md leading-tight">
          🫂 I love learning and thinking and working with others.
        </p> -->
        <p>
          🏙️ No one accomplishes anything alone. I am so grateful for my
          girlfriend Malika, our dog Apollo, our friends and family.
        </p>

        <p>
          I am grateful to work with dedicated and passionate people. I love
          solving problems and refining ideas with others.
        </p>
      </div>

      <!-- Fifth section: -->
      <div id="tidepools" class="section">
        <p class="text-5xl font-bold uppercase">Tide Pools</p>
        <p class="text-2xl">Microcosms, tiny worlds</p>
        <!-- <p class="text-md leading-tight">
          🌊 I love to explore the small worlds that exist in tide pools.
          Starfish and sea anemones, crabs and barnacles. Each creature has its
          own life and place. And they all interact with each other to create a
          harmonic whole.
        </p> -->

        <p>
          🔍 I love exploring microcosms, niches, small obsessions. Music theory
          and Shakespeare, Greek tragedy and geometric proofs, Renaissance
          painting history, seabird identification, gardening and hiking and
          <i>Sonnets to Orpheus</i>.
        </p>
        <p>
          Flags of the world, checkmating patterns, Lorenz curves, WebGL,
          tilings of the plane, competitive coding. I love to get lost in small
          worlds, making connections and building an understanding that I can
          inhabit.
        </p>

        <p>
          (I also love real tide pools! You never know what you'll find. Each
          community makes a harmonious whole.)
        </p>
      </div>

      <!-- Sixth section: -->
      <div id="depths" class="section">
        <p class="text-5xl font-bold uppercase">The Depths</p>
        <p class="text-2xl">Diving Below</p>
        <p class="text-md leading-tight">
          🤿 One of my greatest joys has been learning to scuba dive. It is
          incredible to be able to explore coral reefs. Corals exhibit
          incredible patterns, and fish are so fun to swim with. Underwater, I
          have learned to truly relax and perceive my surroundings.
        </p>

        <p>
          As we descend, what will we find? As with most journeys, we find
          ourselves back home where we started -- but deepened, enriched. The
          marrow we have deposited becomes loam in the next cycle. In our
          darkest moments, the light returns.
        </p>
      </div>

      <a class="absolute bottom-16" href="#start"> Return to Top </a>
    </div>
  </div>
</template>
