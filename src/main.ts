import { createApp, App } from "vue";
import AppComponent from "./App.vue";

import "./style.css";

import { eventBus } from "./eventbus";

let app: App<Element>;

const renderVue = (): Promise<unknown> => {
  if (!app) {
    app = createApp(AppComponent);
    app.mount("#app");
  }

  return Promise.resolve();
};

// eventBus.on("render", renderVue);

renderVue();
