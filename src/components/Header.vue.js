/* __placeholder__ */
import { __assign } from "tslib";
import { eventBus } from "../eventbus";
import { ref } from "vue";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
function scrollTop() {
    // TODO: If we are in "journey"... then we scroll.
    // But otherwise we need to change page.
    // Yeah not quite working.... it doesn't seem to reload this component properly when we change views.... huh...
    // Yeah we need the manual listener, computed won't work for window location I guess.
    eventBus.emit("scrollTop", null);
}
// const isJourney = computed(() => {
//   console.log("is journey...", window.location.href);
//   const otherPages = ["blog", "resume", "projects", "photos"];
//   return !otherPages.some((p) => window.location.href.includes(p));
// });
var isJourney = ref(false);
var otherPages = ["blog", "resume", "projects", "photos"];
window.addEventListener("hashchange", function () {
    isJourney.value = !otherPages.some(function (p) { return window.location.href.includes(p); });
});
// [x] TODO: Want to make clicking "ZS" do a scroll. But we need reference to scroll wrapper or.... or no just emit event I guess
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed top-0 left-0 w-full h-[15vh] flex justify-between items-center px-16 z-[1000]") }));
    if (__VLS_ctx.isJourney) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.scrollTop) }, { class: ("border border-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer opacity-80 hover:opacity-100") }));
        // @ts-ignore
        [isJourney, scrollTop,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#start") }, { class: ("border border-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer opacity-80 hover:opacity-100") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-center items-center space-x-8 text-md uppercase") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#/blog") }, { class: ("cursor-pointer opacity-80 hover:opacity-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#/projects") }, { class: ("cursor-pointer opacity-80 hover:opacity-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#/resume") }, { class: ("cursor-pointer opacity-80 hover:opacity-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#/photos") }, { class: ("cursor-pointer opacity-80 hover:opacity-100") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['left-0'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-[15vh]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['px-16'];
        __VLS_styleScopedClasses['z-[1000]'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-12'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-12'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-x-8'];
        __VLS_styleScopedClasses['text-md'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-80'];
        __VLS_styleScopedClasses['hover:opacity-100'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                scrollTop: scrollTop,
                isJourney: isJourney,
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
//# sourceMappingURL=Header.vue.js.map