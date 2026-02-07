import { logEvent } from "../logger/eventLogger";

const handleVisibilityChange = () => {
  if (document.visibilityState === "hidden") {
    logEvent("tab_hidden");
  } else {
    logEvent("tab_visible");
  }
};

const handleWindowBlur = () => {
  logEvent("window_blur");
};

const handleWindowFocus = () => {
  logEvent("window_focus");
};

export const startActivityMonitoring = () => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("blur", handleWindowBlur);
  window.addEventListener("focus", handleWindowFocus);
};

export const stopActivityMonitoring = () => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  window.removeEventListener("blur", handleWindowBlur);
  window.removeEventListener("focus", handleWindowFocus);
};
