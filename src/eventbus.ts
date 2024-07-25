import mitt from "mitt";

type Events = {
  render: string;
  fadeIn: null;
  preloadAsset: null;
  startPlayback: null;
};

export const eventBus = mitt<Events>();
