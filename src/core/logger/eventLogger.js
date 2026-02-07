import { saveLogsToStorage } from "../storage/logStorage";

let eventQueue = [];

const attemptId = "ATTEMPT_" + Date.now();

const getCommonMetadata = () => ({
  userAgent: navigator.userAgent,
  visibilityState: document.visibilityState,
  online: navigator.onLine,
});

export const logEvent = (eventType, extraMetadata = {}, questionId = null) => {
  const event = {
    eventType,
    timestamp: new Date().toISOString(),
    attemptId,
    questionId,
    metadata: {
      ...getCommonMetadata(),
      ...extraMetadata,
    },
  };

  eventQueue.push(event);

  saveLogsToStorage(eventQueue);

  console.log("EVENT LOGGED:", event);
};

export const getEventQueue = () => eventQueue;

export const clearEventQueue = () => {
  eventQueue = [];
  saveLogsToStorage(eventQueue);
};
