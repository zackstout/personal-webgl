/* __placeholder__ */
import { __assign, __spreadArray } from "tslib";
import { ref } from "vue";
// import require from "require";
import gsap from "gsap";
// @ts-ignore
import ScrollToPlugin from "../utils/ScrollToPlugin.js";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
gsap.registerPlugin(ScrollToPlugin);
// TODO: Could make a lot of sense to have sidebar of icons like in Journey...
// Yeah I guess it's really begging to be done by flag.
// Keep with the emoji icon theme.
// But I think 8 is really the max you can fit there.
// TODO: think about sizing... they are too big right now.
// TODO: consider the optics too..
// yeah how do you make it not feel tasteless.... try to write about each trip? idk.
// maybe no dates? lol
var photosDict = [
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
var flagIcons = __spreadArray([], new Set(photosDict.map(function (d) { return d.flag; })), true);
var flagDict = {
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
var scrollWrapper = ref(null);
// Just have to account for the fact there are multiple in say Mexico
function getImageSrc(prefix, num) {
    // var images = require.context('../assets/', false, /\.png$/)
    // console.log(`../assets/${prefix}/${num}.jpeg`);
    var suffix = prefix === "france" && num !== 5 ? "jpg" : "jpeg";
    // Omg yes thank you!!! https://github.com/nuxt/nuxt/issues/12797
    return new URL("../assets/".concat(prefix, "/").concat(num, ".").concat(suffix), import.meta.url).href;
}
function clickFlag(placeName) {
    gsap.to(scrollWrapper.value, { scrollTo: "#".concat(placeName) });
}
var __VLS_fnComponent = (await import('vue')).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var _a;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-full h-full flex justify-start items-start p-40 overflow-scroll flex-col relative") }, { ref: ("scrollWrapper") }));
    // @ts-ignore
    (__VLS_ctx.scrollWrapper);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-5xl uppercase font-bold mb-8") }));
    // @ts-ignore
    [scrollWrapper,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col space-y-3 w-full items-start mb-8") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    for (var _i = 0, _b = __VLS_getVForSourceType((__VLS_ctx.photosDict)); _i < _b.length; _i++) {
        var photoset = _b[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: ((photoset.prefix)) }, { class: ("w-full") }), { id: (((_a = photoset.id) !== null && _a !== void 0 ? _a : photoset.prefix)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("py-8 flex flex-col space-y-8 items-start w-full") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("pl-4") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (photoset.title);
        // @ts-ignore
        [photosDict,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
        (photoset.flag);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-wrap justify-around w-full") }));
        for (var _c = 0, _d = __VLS_getVForSourceType((photoset.descriptions)); _c < _d.length; _c++) {
            var _e = _d[_c], desc = _e[0], idx = _e[1];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("img-container justify-center m-6") }, { key: ((desc)) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.getImageSrc(photoset.prefix, idx + 1))), });
            // @ts-ignore
            [getImageSrc,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("desc") }));
            (desc);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed top-0 left-0 bottom-0 w-24 flex flex-col items-center justify-center space-y-4") }));
    var _loop_1 = function (flag) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.clickFlag(__VLS_ctx.flagDict[flag]);
                // @ts-ignore
                [flagIcons, clickFlag, flagDict,];
            } }, { key: ((flag)) }), { class: ("w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 hover:scale-[1.05]") }));
        (flag);
    };
    for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.flagIcons)); _f < _g.length; _f++) {
        var flag = _g[_f][0];
        _loop_1(flag);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['p-40'];
        __VLS_styleScopedClasses['overflow-scroll'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['py-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['space-y-8'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['pl-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['justify-around'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['img-container'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['m-6'];
        __VLS_styleScopedClasses['desc'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['left-0'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['w-24'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['w-8'];
        __VLS_styleScopedClasses['h-8'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['opacity-90'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['hover:scale-[1.05]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                photosDict: photosDict,
                flagIcons: flagIcons,
                flagDict: flagDict,
                scrollWrapper: scrollWrapper,
                getImageSrc: getImageSrc,
                clickFlag: clickFlag,
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
//# sourceMappingURL=Photos.vue.js.map