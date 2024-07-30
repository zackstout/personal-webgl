<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
// @ts-ignore
import ResumeBackground from "./ResumeBackground.vue";

const progress = ref(0);
const mainContent = ref(null);

function scrollListen(ev: Event) {
  // @ts-ignore
  const mainHeight = mainContent.value?.getBoundingClientRect().height;
  progress.value = (ev.target as any)?.scrollTop / mainHeight;
}

const isMobile = window.innerWidth < 500;
</script>

<template>
  <div class="w-full h-full relative">
    <ResumeBackground :progress="progress" />

    <div
      ref="mainContent"
      class="w-full h-full flex flex-col justify-start items-start pt-40 pb-24 overflow-scroll absolute inset-0 z-[5] main"
      @scroll="scrollListen"
    >
      <div class="text-5xl uppercase font-bold">resume</div>

      <div class="flex flex-col mt-8 space-y-8">
        <hr />

        <h1>Experience</h1>
        <div class="flex flex-col space-y-6 pl-8">
          <div>
            <h4>Front End Developer</h4>
            <h2>Screenfeed</h2>
            <h3>Oct. 2018 - Present</h3>
            <ul>
              <li>
                Developed and maintained web applications for digital signage
              </li>
              <ul class="pl-12">
                <li>
                  Built visually engaging infotainment applications with Vue.js,
                  TypeScript, and Tailwind CSS
                </li>
                <li>
                  Created bespoke animations for weather icons and more with
                  GSAP
                </li>
                <li>
                  Worked with designers to hone ideas and craft beautiful
                  results
                </li>
              </ul>
              <li>
                Developed a drag-and-drop digital signage content builder that
                supports dynamic content from a variety of data sources
                (Screenfeed Connect)
              </li>
              <ul class="pl-12">
                <li>
                  Developed core functionality for enabling the creation of
                  dynamic content
                </li>
                <li>
                  Participated in and sometimes led design decisions on key
                  aspects of the user interface for building content and wiring
                  up dynamic data
                </li>
                <li>
                  Worked closely with backend developers to craft the app's
                  architecture
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <h4>Web Dev Bootcamp Teaching Assistant</h4>
            <h2>University of Minnesota</h2>
            <h3>Feb. 2018 - Oct. 2018</h3>
            <ul>
              <li>
                Helped students understand the core concepts of programming and
                web development
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <h1 class="mt-4">Education</h1>
        <div class="flex flex-col space-y-6 pl-8">
          <div>
            <h4>Full-stack Software Development Bootcamp</h4>

            <h2>Prime Digital Academy</h2>
            <h3>Aug. 2017 - Jan. 2018</h3>
            <ul>
              <li>Opened my eyes to the wonderful world of web development</li>
              <li>
                Focused on JavaScript, AngularJS, Node.js, Express and
                PostgreSQL
              </li>
            </ul>
          </div>
          <div>
            <h4>Bachelor of Arts, Mathematics & Philosophy</h4>

            <h2>Reed College</h2>
            <h3>Aug. 2012 - May 2015</h3>
            <ul>
              <li>
                Completed my four-year degree, focused on ways to lose arguments
                and miscount things
              </li>
              <li>Worked as a math tutor for calculus and analysis students</li>
            </ul>
          </div>
          <div>
            <h4>Cowboy CERTIFIED</h4>

            <h2>Deep Springs College</h2>
            <h3>Jul. 2010 - Jul. 2012</h3>
            <ul>
              <li>
                Completed two year college centered around labor, academics and
                self-governance in the high desert of California
              </li>
              <li>
                Served as the president of the student body for the spring term
                of 2012, and as the secretary for 3 terms which is longer than
                anyone I know, and while we're at it, a dishwasher for 3 terms,
                with 2 terms in the dairy; too many roles to detail
              </li>
              <li>
                Learned a lot about communication, empathy and working with
                others -- much of which didn't sink in until much later
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <p>
          Please feel free to contact me. I am open to freelance opportunities
          in the realm of creative web development.
        </p>

        <p>
          My email address is my first name followed by my last name at gmail
          dot com.
        </p>

        <p>
          Here I am on
          <a href="https://www.linkedin.com/in/zack-stout-01/">LinkedIn.</a>
        </p>
      </div>
    </div>
  </div>

  <!-- I want h4 (job title) to be 2xl, from xl.. but then it competes too much with
  h1, "experience"....which was 3xl. just bump to 4xl? -->
</template>

<style scoped lang="postcss">
h1 {
  @apply font-normal text-4xl uppercase;
}

h2 {
  @apply font-normal text-xl;
}

h3 {
  @apply italic pl-0;
}

h4 {
  @apply pl-0 uppercase italic text-2xl;
}

a {
  @apply text-blue-400 underline;
}

li {
  @apply list-disc pl-2 ml-12 my-2;
}

ul {
  @apply my-3;
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
