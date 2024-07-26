<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
// import require from "require";
import gsap from "gsap";
// @ts-ignore
import ScrollToPlugin from "../utils/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

// TODO: Could make a lot of sense to have sidebar of icons like in Journey...
// Yeah I guess it's really begging to be done by flag.
// Keep with the emoji icon theme.
// But I think 8 is really the max you can fit there.

// TODO: think about sizing... they are too big right now.

// TODO: consider the optics too..
// yeah how do you make it not feel tasteless.... try to write about each trip? idk.
// maybe no dates? lol

const photosDict = [
  {
    title: "faroe islands",
    time: "July 2024",
    flag: "🇫🇴",
    prefix: "faroe",
    descriptions: [
      "A puffin on Mykines.",
      "A fae-tastic waterfall.",
      "The sun sets on a horse.",
      "A friend from the beach.",
      "The most incredible cattle.",
    ],
  },
  {
    prefix: "puerto-rico",
    title: "Puerto Rico",
    time: "June 2024",
    flag: "🇵🇷",
  },
  {
    prefix: "roatan-3",
    title: "Roatán, Honduras",
    id: "roatan",
    flag: "🇭🇳",
    time: "April 2024",
    descriptions: [
      "something",
      "something",
      "something",
      "something",
      "something",
      "something",
      "something",
      "something",
      "something",
      "something",
    ],
  },
  // {
  //   prefix: "hawaii",
  //   flag: "🌺",
  // },
  {
    title: "Cozumel??",
    time: "??",
    id: "mexico", // Want this to apply to FIRST mexico set we show, because this is where we'll scroll to
    prefix: "cozumel-2", // ????
    flag: "🇲🇽",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om", "om", "om"],
  },
  {
    prefix: "porto",
    time: "August 2023",
    title: "Porto, Portugal",
    flag: "🇵🇹",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om"],
  },
  {
    title: "Saint-Raphaël, France",
    prefix: "france",
    time: "August 2023",
    flag: "🇫🇷",
    descriptions: ["om", "om", "om", "om", "om", "om", "om"],
  },
  {
    title: "Italia (Rome)",
    time: "October 2022",
    prefix: "rome",
    id: "italia",
    flag: "🇮🇹",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om"],
  },
  {
    title: "Italia (Florence)",
    time: "October 2022",
    prefix: "florence",
    // id: "italia",
    flag: "🇮🇹",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om"],
  },
  {
    title: "California",
    time: "??",
    id: "usa",
    prefix: "cali", // ???
    flag: "🇺🇸",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om", "om"],
  },
  {
    title: "Black Hills",
    time: "??",
    // id: "usa",
    prefix: "black-hills", // ???
    flag: "🇺🇸",
    descriptions: ["om", "om", "om", "om", "om", "om", "om", "om", "om", "om"],
  },
];

// @ts-ignore
const flagIcons = [...new Set(photosDict.map((d) => d.flag))];

const flagDict: Record<string, string> = {
  "🇺🇸": "usa",
  "🇮🇹": "italia",
  "🇫🇷": "france",
  "🇵🇹": "porto",
  "🇲🇽": "mexico",
  "🇭🇳": "roatan",
  "🇵🇷": "puerto-rico",
  "🇫🇴": "faroe",
};

// Left out right now:
// Cali
// Black hills
// Hawaii
// and then yeah we're lumping a lot of Honduras and Mexico together, that's fine

const scrollWrapper = ref(null);

// Just have to account for the fact there are multiple in say Mexico

function getImageSrc(prefix: string, num: number) {
  // var images = require.context('../assets/', false, /\.png$/)

  // console.log(`../assets/${prefix}/${num}.jpeg`);

  const suffix = prefix === "france" && num !== 5 ? "jpg" : "jpeg";
  // Omg yes thank you!!! https://github.com/nuxt/nuxt/issues/12797
  return new URL(`../assets/${prefix}/${num}.${suffix}`, import.meta.url).href;
}

function clickFlag(placeName: string) {
  gsap.to(scrollWrapper.value, { scrollTo: `#${placeName}` });
}
</script>

<template>
  <div
    class="w-full h-full flex justify-start items-start p-40 overflow-scroll flex-col relative"
    ref="scrollWrapper"
  >
    <div class="text-5xl uppercase font-bold mb-8">photos</div>

    <div class="flex flex-col space-y-3 w-full items-start mb-8">
      <p>
        I have been so lucky to be able to see so many incredible places and
        things with people I love.
      </p>

      <p>Here are some pictures I've taken over the past few years.</p>
    </div>

    <hr />

    <div
      v-for="photoset in photosDict"
      :key="photoset.prefix"
      class="w-full"
      :id="photoset.id ?? photoset.prefix"
    >
      <div class="py-8 flex flex-col space-y-8 items-start w-full">
        <div class="pl-4">
          <h2>{{ photoset.title }}</h2>
          <h4>{{ photoset.flag }}</h4>
          <!-- <h3>{{ photoset.time }}</h3> -->
        </div>

        <div class="flex flex-wrap justify-around w-full">
          <div
            class="img-container justify-center m-6"
            v-for="(desc, idx) in photoset.descriptions"
            :key="desc"
          >
            <img :src="getImageSrc(photoset.prefix, idx + 1)" />
            <div class="desc">{{ desc }}</div>
          </div>
        </div>
      </div>

      <hr />
    </div>

    <!-- sidebar: -->
    <div
      class="fixed top-0 left-0 bottom-0 w-24 flex flex-col items-center justify-center space-y-4"
    >
      <div
        v-for="flag in flagIcons"
        :key="flag"
        @click="clickFlag(flagDict[flag])"
        class="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 hover:scale-[1.05]"
      >
        {{ flag }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.desc {
  @apply mt-2;
}

/* Ahh sure this won't work with descriptions really unless we letterbox...  */
/* Oh wow just using cover on squares is the way to go for sure... */
/* And def go to 2 per row at sufficient width */
img {
  @apply rounded-sm object-cover bg-gray-900;
  width: 60vh;
  height: 60vh;
}

h2 {
  @apply text-3xl uppercase font-bold mb-2;
}
h3 {
  @apply text-xl uppercase;
}

h4 {
  @apply text-3xl;
}

hr {
  @apply w-full;
}

@media (max-width: 1250px) {
  /* .desc {
    background: blue;
  } */
  img {
    width: 90vh;
    height: 90vh;
  }

  /* TODO: some kind of "thumbnail" mode, looks good too, hide descriptions */
  /* img {
    width: 32vh;
    height: 20vh;
  } */
}

/* img {
  max-height: 80vh;
} */
</style>
