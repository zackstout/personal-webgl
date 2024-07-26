import mitt from "mitt";

type Events = {
  scrollTop: null;
};

export const eventBus = mitt<Events>();
