/* __placeholder__ */
import { __assign, __spreadArray } from "tslib";
import { eventBus } from "../eventbus";
import { onMounted, ref } from "vue";
// @ts-ignore
import Background from "./Background.vue";
import gsap from "gsap";
// TODO: "make "scroll on to ..." a button to go next"
// @ts-ignore
import ScrollToPlugin from "../utils/ScrollToPlugin.js";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
gsap.registerPlugin(ScrollToPlugin);
var mainContent = ref(null);
var scrollWrapper = ref(null);
var progress = ref(0);
// TODO: Pass into Background shader
function scrollListen(ev) {
    var _a, _b;
    // @ts-ignore
    var mainHeight = (_a = mainContent.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
    progress.value = ((_b = ev.target) === null || _b === void 0 ? void 0 : _b.scrollTop) / mainHeight;
}
var myName = "Zack Stout".toUpperCase().split("");
function clickIcon(id) {
    gsap.to(scrollWrapper.value, { scrollTo: "#".concat(id) });
}
onMounted(function () {
    eventBus.on("scrollTop", function () {
        clickIcon("start");
    });
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
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [Background, Background,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(Background, new Background({ progress: ((__VLS_ctx.progress)), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ progress: ((__VLS_ctx.progress)), }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    ({}({ progress: ((__VLS_ctx.progress)), }));
    var __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Background, __VLS_1));
    // @ts-ignore
    [progress,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onScroll: (__VLS_ctx.scrollListen) }, { class: ("w-full overflow-scroll absolute inset-0 z-10") }), { ref: ("scrollWrapper") }));
    // @ts-ignore
    (__VLS_ctx.scrollWrapper);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed left-0 top-0 h-full w-24 flex flex-col items-center justify-center space-y-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('stars');
            // @ts-ignore
            [scrollListen, scrollWrapper, clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('mountains');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('forests');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('villages');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('tidepools');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('depths');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex relative items-start justify-start flex-col w-1/2 ml-40 pb-[50vh]") }, { ref: ("mainContent") }));
    // @ts-ignore
    (__VLS_ctx.mainContent);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("start") }, { class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    (__VLS_ctx.myName.join(""));
    // @ts-ignore
    [mainContent, myName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl opacity-90") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("leading-tight opacity-80 flex flex-col space-y-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("stars") }, { class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl font-normal") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("leading-tight opacity-80 flex flex-col space-y-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("mountains") }, { class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("forests") }, { class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-md leading-tight") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("villages") }, { class: ("section relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("tidepools") }, { class: ("section") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("p-link") }, { href: ("https://github.com/zackstout/Music-Theory-Guitar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("p-link") }, { href: ("https://github.com/zackstout/bard") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("p-link") }, { href: ("https://github.com/zackstout/learn-flags") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("p-link") }, { href: ("https://github.com/zackstout/three-shaders") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("p-link") }, { href: ("https://github.com/zackstout/aoc-2023") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("depths") }, { class: ("section mb-40") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-5xl font-bold uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-2xl") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-md leading-tight") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.clickIcon('start');
            // @ts-ignore
            [clickIcon,];
        } }, { class: ("absolute bottom-16 rounded-md border border-white px-3 py-1 opacity-80 hover:opacity-100 cursor-pointer") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['overflow-scroll'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['left-0'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-24'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['ml-40'];
        __VLS_styleScopedClasses['pb-[50vh]'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['opacity-90'];
        __VLS_styleScopedClasses['leading-tight'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-normal'];
        __VLS_styleScopedClasses['leading-tight'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-md'];
        __VLS_styleScopedClasses['leading-tight'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['p-link'];
        __VLS_styleScopedClasses['p-link'];
        __VLS_styleScopedClasses['p-link'];
        __VLS_styleScopedClasses['p-link'];
        __VLS_styleScopedClasses['p-link'];
        __VLS_styleScopedClasses['section'];
        __VLS_styleScopedClasses['mb-40'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-md'];
        __VLS_styleScopedClasses['leading-tight'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-16'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['cursor-pointer'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                Background: Background,
                mainContent: mainContent,
                scrollWrapper: scrollWrapper,
                progress: progress,
                scrollListen: scrollListen,
                myName: myName,
                clickIcon: clickIcon,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
//# sourceMappingURL=Journey.vue.js.map