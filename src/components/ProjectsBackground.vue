<script setup lang="ts">
import { StyleValue, computed, onBeforeUnmount, onMounted, ref } from "vue";
import * as THREE from "three";
import vertexShader from "./shaders/projects/vertex.glsl";
import fragmentShader from "./shaders/projects/fragment.glsl";

const bg = ref<HTMLDivElement | null>(null);

let canvas: HTMLCanvasElement;

const props = defineProps<{
  progress: number;
}>();

const isMobile = window.innerWidth < 500;

// ====================

const color = new THREE.Color("rgb(10, 10, 10)");

let caf: any = null;

function initialize(isUpdating?: boolean) {
  if (bg.value != null) {
    if (!isUpdating) {
      canvas = document.createElement("canvas");
      bg.value?.appendChild(canvas);
    }

    // console.log("Init,", color);

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // ====================

    const scene = new THREE.Scene();
    let aspectRatio = window.innerWidth / window.innerHeight;

    scene.background = color;

    // scene.background = new THREE.Color(0x00ff00);
    // const geometry = new THREE.BoxGeometry(2, 2, 2);
    const size = window.innerWidth < 500 ? 1.8 : 2.4;

    // Oh wow it kind of looks like with more.... yeah idk man, 20 was cool. 8 is cool. I liked 2 too.
    const geometry = new THREE.PlaneGeometry(size * aspectRatio, size, 50, 50);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uAspect: new THREE.Uniform(aspectRatio),
        uProgress: new THREE.Uniform(props.progress),
        uIsMobile: new THREE.Uniform(window.innerWidth < 500 ? 1 : 0),
      },
      transparent: true,
    });
    // This seems to look better in most cases:
    material.blending = THREE.AdditiveBlending;
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 1, 0);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new THREE.Clock();

    const tick = () => {
      // const elapsedTime = clock.getElapsedTime();
      // material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uProgress.value = props.progress;

      // Render
      renderer.render(scene, camera);

      if (isMobile) return;

      caf = window.requestAnimationFrame(tick);
    };

    tick();
  }
}

const bgStyle = computed<StyleValue>(() => {
  return {
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    // Omg the magic line for mobile
    overflowX: "hidden",
  };
});

function updateBG() {
  initialize(true);
  console.log("call updateBG");
}

onMounted(() => {
  initialize();
  window.addEventListener("resize", updateBG);
  // console.log("Mounted");
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateBG);

  if (caf) {
    window.cancelAnimationFrame(caf);
  }
});
</script>
<template>
  <div ref="bg" :style="bgStyle">
    <slot></slot>
  </div>
</template>
