<script setup lang="ts">
import {
  StyleValue,
  WatchStopHandle,
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import * as THREE from "three";
// Must update vite.config to use glsl imports
import vertexShader from "./shaders/journey/vertex.glsl";
import fragmentShader from "./shaders/journey/fragment.glsl";

const bg = ref<HTMLDivElement | null>(null);

let canvas: HTMLCanvasElement;

const props = defineProps<{
  progress: number;
}>();

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
    const size = 2.4;
    const geometry = new THREE.PlaneGeometry(
      size * aspectRatio,
      size,
      100,
      100
    );
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new THREE.Uniform(0),
        uAspect: new THREE.Uniform(aspectRatio),
        uProgress: new THREE.Uniform(props.progress),
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
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uProgress.value = props.progress;

      // Render
      renderer.render(scene, camera);

      //   if (store.options.animate) {
      //     // Call tick again on the next frame
      caf = window.requestAnimationFrame(tick);
      //   }
    };

    // some change?
    tick();
  }

  onBeforeUnmount(() => {
    if (caf) {
      window.cancelAnimationFrame(caf);
    }
  });
}

const bgStyle = computed<StyleValue>(() => {
  return {
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
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
  window.cancelAnimationFrame();
});
</script>
<template>
  <div ref="bg" :style="bgStyle">
    <slot></slot>
  </div>
</template>
