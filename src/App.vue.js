/* __placeholder__ */
import { __spreadArray } from "tslib";
import { computed, ref } from "vue";
import Header from "./components/Header.vue";
import Journey from "./components/Journey.vue";
import Blog from "./components/Blog.vue";
import Resume from "./components/Resume.vue";
import Photos from "./components/Photos.vue";
import Projects from "./components/Projects.vue";
import NotFound from "./components/NotFound.vue";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
// const btnClick = (ev: any) => {
//   // eventBus.emit("scrollToTop");
//   console.log("scroll", ev.target.parentElement);
//   ev.target.parentElement.scrollTo(0, 0);
//   ev.target.parentElement.scrollTop = 0;
// };
var journeyParts = [
    "start",
    "stars",
    "mountains",
    "forests",
    "villages",
    "tidepools",
    "depths",
];
var routes = {
    "/": Journey,
    "/resume": Resume,
    "/blog": Blog,
    "/photos": Photos,
    "/projects": Projects,
};
var currentPath = ref(window.location.hash);
window.addEventListener("hashchange", function () {
    currentPath.value = window.location.hash;
    // console.log("ash", window.location.hash, currentPath.value.slice(1));
});
var currentView = computed(function () {
    // Dumb hack
    // if (currentPath.value.includes("#")) {
    //   return Journey;
    // }
    // console.log("curr path...", currentPath.value);
    if (journeyParts.some(function (p) { return currentPath.value.includes(p); })) {
        return Journey;
    }
    return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
/**
 *
 * ideas:
 *
 * - [ ] I think we want text to fade out as it gets toward top, and fade in as it rises from bottom
 * (and vice versa that goes other way)
 *
 * - Instead of the circular "logo", ...or filling it in... animate name "Zack Stout" up to just "ZS"... nice.
 *
 - [ ] Oooh have a little icon for each one, on the left sidebar, click to scroll!
 - Yeah click to go to is easy with link. I think GSAP has plugin for smooth scroll to? maybe window can do it..?
 - And probably have next and previous buttons? Maybe...? I guess that's overkill if you have icons honestly.
 - Some subtlety of how to scale them, on hover, depending on how already scaled based on view position...

 - [ ] Github links (for projects but also tide pools) -- Lorenz curves, shakespeare, python (?), competitive coding (aoc), flags, music theory.
 - [ ] But you will ABSOLUTELY want to have nice readmes with pictures.
 - Honestly for now projects page can just literally link to Github. But would be nice to have some write ups there.

 - [?] Fix performance issue -- I think very likely it is initializing multiple rafs.

 - Refactor paragraphs to just use v-for, probably same for sections

 - [x] Make the stars come in one at a time rather than all at once.
 - [x] Make some mountains!

 - [ ] Oh shit deepen that wavelet noise... maybe then the echoing patterns at different structures line makes sense...

 - [x] Figure out header links, routing, whatever
 - [x] "Contact" likely doesn't need to be there, use footer. Or it's in Resume. Yeah.

 - [ ] Need some kind of state for icons.

 - [x] Omg... you don't nee dto make icons... use emojis!!! wow yes I love it

 - [ ] we should add the root font size change for rem

 - [ ] MOBILE...

 - [ ] if someone navigates to say "#tidepools" we should scroll there, (e.g. by going Back)

 - [ ] don't forgt about reflective pool we had for forest...just didn't quite fit there... really nice though

- [ ] clean up all the paragraphs, make them all opacity-80 and leading-tight with container div
 */
// onMounted(() => {
//   console.log("mounted", mainContent.value);
// });
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
    var __VLS_0 = (__VLS_ctx.currentView);
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}({}));
    var __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [currentView,];
    // @ts-ignore
    [Header,];
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(Header, new Header({}));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
    ({}({}));
    var __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Header, __VLS_7));
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
                Header: Header,
                currentView: currentView,
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

//# sourceMappingURL=App.vue.js.map