import { logEvent } from "../logger/eventLogger";

let exitCount = 0;
let tolerance = 2;

export const setExitTolerance = (value) => {
  tolerance = value;
};

export const isFullscreen = () => {
  return !!document.fullscreenElement;
};

export const requestFullscreen = async () => {
  try {
    logEvent("fullscreen_requested");
    await document.documentElement.requestFullscreen();
  } catch (err) {
    console.error("Fullscreen request failed", err);
  }
};

const handleFullscreenChange = () => {
  if (isFullscreen()) {
    logEvent("fullscreen_entered");

    if (exitCount > 0) {
      logEvent("fullscreen_reentered", { exitCount });
    }
  } else {
    exitCount += 1;
    logEvent("fullscreen_exited", { exitCount });

    if (exitCount > tolerance) {
      logEvent("fullscreen_violation_limit_reached");
    }
  }
};

export const startFullscreenMonitoring = () => {
  document.addEventListener("fullscreenchange", handleFullscreenChange);
};

export const stopFullscreenMonitoring = () => {
  document.removeEventListener("fullscreenchange", handleFullscreenChange);
};
