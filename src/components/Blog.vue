<script setup lang="ts">
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";

// TODO: Use actual svg/html to render the final output, not an image!
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-start items-start p-40 overflow-scroll"
  >
    <div class="text-5xl uppercase font-bold mb-8">blog</div>

    <!-- <div class="flex flex-col space-y-4">
      <p>I had a blog, once.</p>

      <p>
        It turned into kind of an unmaintainable mess, but I plan to port it
        over.
      </p>

      <p>
        Soon I will write a post about making a moon shadow in 2d with
        projections!
      </p>
    </div> -->

    <hr class="w-full mb-8" />

    <div class="post">
      <h1>Lunar Phases: Let's Draw the Moon</h1>
      <h2>July 26, 2024</h2>

      <div class="flex flex-col space-y-4 mb-8">
        <p>
          I found a hoodie recently with the phases of the moon depicted on the
          front. I love it. I wanted to recreate the design myself.
        </p>

        <img src="../assets/blog/moon/1.jpg" />

        <p>
          I know that in real life, this effect is caused by differences in the
          moon's position in relation to the sun and the earth resulting from
          its orbit. So we could solve the problem in 3d and project the
          solution into 2d.
        </p>

        <p>
          But, looking at this problem, it seems like we can pretend that
          everything is just happening on a plane. The moon is just a circle.
          And the shadow cut occurs along some other circle that intersects with
          the moon at its exact top and bottom.
        </p>

        <p>
          We can imagine the entire family of these circles, all of their
          centers lying along some line through the center of the "moon".
        </p>

        <img src="../assets/blog/moon/5.jpeg" />

        <p>
          (In the extreme case, we can imagine the center of the second circle
          wandering off further and further to the left, all the way to
          infinity, at which point we get a perfect diameter cutting the moon.)
        </p>

        <p>
          Our strategy will be to (a) find some way to parameterize the
          progression of the shadow. (Imagine the second circle moving toward or
          away from the "moon".) It doesn't really matter if we think of this
          parameter as time, or whatever. It's just the variable whose value we
          are going to "snapshot" at 28 (or however many) different points, to
          generate our final output.
        </p>

        <p>
          And once we know how far away to draw the circle, we want to (b) know
          how large to draw second circle, given its distance away from the
          moon. Let's start with (b). Call the radius of moon R<sub>2</sub> and
          the radius that we are seeking R<sub>1</sub>. Call the distance
          between the circle's centers D.
        </p>

        <img src="../assets/blog/moon/6.jpeg" />

        <p>
          A little trigonometry reveals the crucial relationship between the
          second circle's radius (R<sub>1</sub>) and its distance from the
          "moon" (D). We have a right triangle with hypotenuse R<sub>1</sub> and
          legs D and R<sub>2</sub> (the moon's radius). (We know the triangle is
          right because we chose the intersection point of R<sub>1</sub> and
          R<sub>2</sub> to be the top/bottom of the moon.)
        </p>

        <p>
          So we have
          <code
            >R<sub>1</sub><sup>2</sup> = R<sub>2</sub><sup>2</sup> + D<sup
              >2</sup
            ></code
          >. We can take the square root of the right-hand side, that that will
          be an expression for R<sub>1</sub> in terms of D. Part (b) solved!
        </p>

        <p>
          Part (a) is a bit more hand-wavey. We can imagine that at the start of
          the cycle, the two circles are perfectly aligned. As time (our
          parameter) goes on, the second circle moves away from the moon.
          Eventually, it goes all the way out to infinity, wraps around to the
          other side, and comes back from the other direction.
        </p>

        <p>
          Is there a function that behaves that way in the ambit of
          trigonometry? That follows such a wild path, shooting out to infinity
          and then, as if by magic, blasting back from the other side?
          Fortunately there is! It is the tangent function!
        </p>

        <img
          src="https://mathbooks.unl.edu/PreCalculus/images/imagesChap13/tangentgraph.png"
        />

        <p>
          So I took a guess that we want to let D vary with the tangent of the
          parameterized variable.
        </p>
        <!-- <p>
          Since trigonometric functions tend to complete a full cycle between 0
          and 2π, this is the range we vary through.
        </p> -->

        <p>
          The final part of the problem is to handle SVG masking to let us
          render the circles with the "shadow" regions cut out. In my approach,
          we start with either a black or white circle (more on that in a
          second). Then we draw a second circle over the top of it, filled with
          the inverted color. But this second circle must be "masked" so that we
          only show the part of it that overlaps with the original circle.
        </p>
        <p>
          The final wrinkle was that we need to swap between using a black or
          white circle as the "base" circle, halfway through the cycle. (We swap
          at the first and last quarters of the moon.)
        </p>

        <p>
          Anyway, this is the result we ended up with. Not perfect, but close
          enough for now.
        </p>

        <img src="../assets/blog/moon/4.png" />
      </div>
    </div>

    <hr class="w-full mb-4" />
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply text-3xl font-bold;
}
h2 {
  @apply text-lg font-bold mb-4;
}

img {
  max-width: 30vw;
  @apply py-6;
}
</style>
