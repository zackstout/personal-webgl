<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
// @ts-ignore
import Background from "./Background.vue";
import gsap from "gsap";

// TODO: "make "scroll on to ..." a button to go next"

// @ts-ignore
import ScrollToPlugin from "../utils/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

const mainContent = ref(null);

const scrollWrapper = ref(null);

const progress = ref(0);

// TODO: Pass into Background shader
function scrollListen(ev: Event) {
  // @ts-ignore
  const mainHeight = mainContent.value?.getBoundingClientRect().height;
  progress.value = (ev.target as any)?.scrollTop / mainHeight;
}
const myName = "Zack Stout".toUpperCase().split("");

function clickIcon(id: string) {
  gsap.to(scrollWrapper.value, { scrollTo: `#${id}` });
}

onMounted(() => {
  eventBus.on("scrollTop", () => {
    clickIcon("start");
  });
});
</script>

<template>
  <Background :progress="progress"> </Background>

  <div
    class="w-full overflow-scroll absolute inset-0 z-10"
    ref="scrollWrapper"
    @scroll="scrollListen"
  >
    <!-- Left icon sidebar: -->
    <div
      class="fixed left-0 top-0 h-full w-24 flex flex-col items-center justify-center space-y-4"
    >
      <!-- Oooh but not quite... we don't want it at top... I guess we could use same padding hack... or just go to GSAP and/or compute..?? -->
      <!-- Yes padding works! -->
      <!-- <a class="icon" href="#start">H</a> -->

      <!-- note/todo: these don't go to sections anymore, like in html -->

      <!-- Huh not working... -->
      <div class="icon" @click="clickIcon('stars')">✨</div>
      <div class="icon" @click="clickIcon('mountains')">⛰️</div>
      <div class="icon" @click="clickIcon('forests')">🌳</div>
      <div class="icon" @click="clickIcon('villages')">🏛️</div>
      <div class="icon" @click="clickIcon('tidepools')">🔍</div>
      <div class="icon" @click="clickIcon('depths')">🤿</div>
      <!-- <a class="icon" href="#stars">✨</a> -->
      <!-- <a class="icon" href="#mountains">⛰️</a>
      <a class="icon" href="#forests">🌳</a>
      <a class="icon" href="#villages">🏙️</a>
      <a class="icon" href="#tidepools">🔍</a>
      <a class="icon" href="#depths">🤿</a> -->
    </div>

    <!-- Main content: -->
    <div
      class="flex relative items-start justify-start flex-col w-1/2 ml-40 pb-[50vh]"
      ref="mainContent"
    >
      <!-- Intro section (put top padding here so we can jump here via link): -->
      <div id="start" class="section">
        <p class="text-5xl font-bold uppercase">
          <!-- <span v-for="c in myName" :key="c">{{ c }}</span> -->
          {{ myName.join("") }}
        </p>
        <p class="text-2xl opacity-90">Creative Developer</p>
        <div class="leading-tight opacity-80 flex flex-col space-y-3">
          <p>👋 Thanks for stopping by!</p>
          <p>
            I feel very lucky to have found the field of web development, where
            logical rigor flows alongside creative expression.
            <!-- I'm always looking for new ways to combine these two
          aspects of my personality. -->
          </p>

          <p>
            I'm currently working as a front-end developer in Minneapolis. I
            love being with my dog, playing music, and exploring the outdoors.
          </p>

          <p>Scroll on to learn more about my journey in software...</p>
        </div>
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
        <p class="text-2xl">A rocky ascent</p>
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
          alike, because I am terrified of heights.
        </p>

        <p>
          You stumble and slide, but you earn each new vista. As you ascend, new
          pathways open up.
        </p>

        <p>
          I love to learn, and learning to code (at boot camp, on my own, and
          then on the job) has been no exception. I thrill at drinking in new
          sights, and new ways of seeing.
        </p>
      </div>

      <!-- Third section: -->
      <!-- TODO: this one needs work... doesn't make sense... cut with grain? idk. -->
      <div id="forests" class="section">
        <p class="text-5xl font-bold uppercase">Forests</p>
        <p class="text-2xl">Growth, and finding patterns</p>
        <p class="text-md leading-tight">
          🌳 I love trees: earth-rooted, but reaching toward the sky, gulping
          sunlight and radiating leaves. And I love forests -- systems of
          interconnected components, each part playing its role in harmony with
          the others.
        </p>

        <!-- <p>
          And I love forests: systems of interconnected components, each part
          playing its role in harmony with the others.
        </p> -->

        <p>
          Software development is kind of like what I imagine managing a forest
          to be like. You encourage growth here, burn dead areas away there,
          discourage littering.
        </p>

        <p>
          But in software we don't have to choose between lumber and the forest.
          The functional experience can be infused with beauty.
        </p>
        <p>Let the tendrils of our imaginations guide us.</p>
        <!-- <p>
          Software is like a forest, rooted in the soil of human concerns. Like
          sunlight, technical rigor brings clarity, which allows us to solve
          problems and serve our communities.
        </p> -->
        <!-- <p>We are guided by the gentle tendrils of our imaginations.</p> -->

        <!-- <p>
          And I love mathematical trees -- fractals and data structures and
          decision paths. I love distilling a problem to its clearest and
          simplest representation, thinking it through slowly until it is time
          to pounce.
        </p> -->

        <!-- <p>
          Working in software has been a dream come true. We are rooted in
          <b>human concerns</b>, yet we stretch toward
          <b>technical purity</b> and the <b>heights of imagination</b>.
        </p>

        <p>
          I love that in software, we don't have to choose between the forest
          and the lumber. Beauty infuses and complements the functional
          experience.
        </p> -->

        <!-- <p>
          And it's cheap to build things: you don't run out of paints or
          linoleum. You are free to plant a hundred trees.
        </p> -->
        <!-- 
        <p>
          In software we build forests: systems of interconnected components,
          each part playing its role in harmony with the others.
        </p> -->
      </div>

      <!-- Fourth section: -->
      <div id="villages" class="section relative">
        <!-- <div style="filter: blur(5px)" class="absolute inset-0"></div> -->
        <p class="text-5xl font-bold uppercase">Villages</p>
        <p class="text-2xl">The need for community</p>
        <!-- <p class="text-md leading-tight">
          🫂 I love learning and thinking and working with others.
        </p> -->
        <p>
          🏛️ No one accomplishes anything alone. I am so grateful for my
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
          🔍 I love exploring microcosms, niches, small obsessions. I love
          <a
            class="p-link"
            href="https://github.com/zackstout/Music-Theory-Guitar"
            >music theory</a
          >
          and
          <a class="p-link" href="https://github.com/zackstout/bard"
            >Shakespeare</a
          >, Greek tragedy and geometric proofs, Renaissance painting history,
          seabird identification, gardening and hiking and
          <i>Sonnets to Orpheus</i>.
        </p>
        <p>
          <a class="p-link" href="https://github.com/zackstout/learn-flags"
            >Flags of the world</a
          >, checkmating patterns,
          <a class="p-link" href="https://github.com/zackstout/three-shaders"
            >WebGL and shaders</a
          >, tilings of the plane,
          <a class="p-link" href="https://github.com/zackstout/aoc-2023"
            >competitive coding</a
          >. I love to get lost in small worlds, making connections and building
          an understanding that I can inhabit.
        </p>

        <p>
          (I also love real tide pools! You never know what you'll find. Each
          community makes a harmonious whole.)
        </p>
      </div>

      <!-- Sixth section: -->
      <div id="depths" class="section mb-40">
        <p class="text-5xl font-bold uppercase">The Depths</p>
        <p class="text-2xl">Diving below</p>
        <p class="text-md leading-tight">
          🤿 One of my greatest joys has been learning to scuba dive. It is
          incredible to explore coral reefs. Corals exhibit amazing patterns,
          and fish are so fun to swim with. Underwater, I have learned to truly
          relax and perceive my surroundings.
        </p>

        <p>
          As we descend, what will we find? Usually, we find ourselves back home
          where we started -- but deepened, enriched. The marrow we have
          deposited becomes loam in the next cycle.
        </p>

        <p>In our darkest moments, the light returns.</p>
      </div>

      <div
        class="absolute bottom-16 rounded-md border border-white px-3 py-1 opacity-80 hover:opacity-100 cursor-pointer"
        @click="clickIcon('start')"
      >
        Return to Top
      </div>
    </div>
  </div>
  <!-- // Use 900 here instead of 400 to increase contrast with water background: -->
</template>

<style lang="postcss">
.icon {
  @apply w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer opacity-90 hover:opacity-100 hover:scale-[1.05] transition-all;
}

.section {
  @apply flex flex-col space-y-3 py-[27vh];
}

.p-link {
  @apply text-blue-900 underline;
}
</style>
