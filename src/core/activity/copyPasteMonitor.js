import { logEvent } from "../logger/eventLogger";

const handleCopy = () => {
  logEvent("copy_attempt");
};

const handlePaste = () => {
  logEvent("paste_attempt");
};

const handleCut = () => {
  logEvent("cut_attempt");
};

const handleContextMenu = () => {
  logEvent("right_click_attempt");
};

const handleKeyDown = (e) => {
  if (e.ctrlKey || e.metaKey) {
    logEvent("suspicious_key_combo", {
      key: e.key,
    });
  }
};

export const startCopyPasteMonitoring = () => {
  document.addEventListener("copy", handleCopy);
  document.addEventListener("paste", handlePaste);
  document.addEventListener("cut", handleCut);
  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);
};

export const stopCopyPasteMonitoring = () => {
  document.removeEventListener("copy", handleCopy);
  document.removeEventListener("paste", handlePaste);
  document.removeEventListener("cut", handleCut);
  document.removeEventListener("contextmenu", handleContextMenu);
  document.removeEventListener("keydown", handleKeyDown);
};
