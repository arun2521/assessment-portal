import { useEffect, useState } from "react";
import {
  requestFullscreen,
  startFullscreenMonitoring,
  stopFullscreenMonitoring,
} from "../core/fullscreen/fullscreenManager";

import {
  startActivityMonitoring,
  stopActivityMonitoring,
} from "../core/activity/activityMonitor";

import {
  startCopyPasteMonitoring,
  stopCopyPasteMonitoring,
} from "../core/activity/copyPasteMonitor";

import {
  startLogSync,
  stopLogSync,
  markTestSubmitted,
} from "../core/sync/logSync";
import { logEvent } from "../core/logger/eventLogger";

export const useSecureTest = () => {
  const [isStarted, setIsStarted] = useState(false);

  const startTest = async () => {
    logEvent("test_started");

    await requestFullscreen();

    startFullscreenMonitoring();
    startActivityMonitoring();
    startCopyPasteMonitoring();
    startLogSync();

    setIsStarted(true);
  };

  const submitTest = () => {
    markTestSubmitted();
    setIsStarted(false);
  };

  useEffect(() => {
    return () => {
      stopFullscreenMonitoring();
      stopActivityMonitoring();
      stopCopyPasteMonitoring();
      stopLogSync();
    };
  }, []);

  return {
    isStarted,
    startTest,
    submitTest,
  };
};
