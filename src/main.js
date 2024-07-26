import { createApp } from "vue";
import AppComponent from "./App.vue";
import "./style.css";
var app;
var renderVue = function () {
    if (!app) {
        app = createApp(AppComponent);
        app.mount("#app");
    }
    return Promise.resolve();
};
// eventBus.on("render", renderVue);
renderVue();
//# sourceMappingURL=main.js.map