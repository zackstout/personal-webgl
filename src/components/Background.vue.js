/* __placeholder__ */
import { __assign } from "tslib";
import { computed, onBeforeUnmount, onMounted, ref, } from "vue";
import * as THREE from "three";
// Must update vite.config to use glsl imports
import vertexShader from "./shaders/journey/vertex.glsl";
import fragmentShader from "./shaders/journey/fragment.glsl";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var bg = ref(null);
var canvas;
var __VLS_typeProps;
var props = defineProps();
// ====================
var color = new THREE.Color("rgb(10, 10, 10)");
var caf = null;
function initialize(isUpdating) {
    var _a;
    if (bg.value != null) {
        if (!isUpdating) {
            canvas = document.createElement("canvas");
            (_a = bg.value) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
        }
        // console.log("Init,", color);
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = "".concat(window.innerWidth, "px");
        canvas.style.height = "".concat(window.innerHeight, "px");
        // ====================
        var scene_1 = new THREE.Scene();
        var aspectRatio = window.innerWidth / window.innerHeight;
        scene_1.background = color;
        // scene.background = new THREE.Color(0x00ff00);
        // const geometry = new THREE.BoxGeometry(2, 2, 2);
        var size = 2.4;
        var geometry = new THREE.PlaneGeometry(size * aspectRatio, size, 100, 100);
        var material_1 = new THREE.ShaderMaterial({
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
        material_1.blending = THREE.AdditiveBlending;
        var plane = new THREE.Mesh(geometry, material_1);
        plane.rotation.x = -Math.PI / 2;
        scene_1.add(plane);
        var sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        var camera_1 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera_1.position.set(0, 1, 0);
        camera_1.lookAt(0, 0, 0);
        scene_1.add(camera_1);
        var renderer_1 = new THREE.WebGLRenderer({
            canvas: canvas,
        });
        renderer_1.setSize(sizes.width, sizes.height);
        renderer_1.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        var clock_1 = new THREE.Clock();
        var tick_1 = function () {
            var elapsedTime = clock_1.getElapsedTime();
            material_1.uniforms.uTime.value = elapsedTime;
            material_1.uniforms.uProgress.value = props.progress;
            // Render
            renderer_1.render(scene_1, camera_1);
            //   if (store.options.animate) {
            //     // Call tick again on the next frame
            caf = window.requestAnimationFrame(tick_1);
            //   }
        };
        // some change?
        tick_1();
    }
}
var bgStyle = computed(function () {
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
onMounted(function () {
    initialize();
    window.addEventListener("resize", updateBG);
    // console.log("Mounted");
});
onBeforeUnmount(function () {
    window.removeEventListener("resize", updateBG);
    if (caf) {
        window.cancelAnimationFrame(caf);
    }
});
var __VLS_fnComponent = (await import('vue')).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: ("bg") }, { style: ((__VLS_ctx.bgStyle)) }));
    // @ts-ignore
    (__VLS_ctx.bg);
    var __VLS_0 = {};
    // @ts-ignore
    [bgStyle, bg,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                bg: bg,
                bgStyle: bgStyle,
            };
        },
        props: {},
    });
}
var __VLS_component = (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    props: {},
});
export default {};
;
//# sourceMappingURL=Background.vue.js.map