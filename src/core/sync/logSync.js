import { logEvent } from "../logger/eventLogger";
import { getLogsFromStorage } from "../storage/logStorage";

let syncInterval = null;
let isSubmitted = false;

const SEND_INTERVAL = 5000;

const sendLogsToServer = async (logs) => {
  return new Promise((resolve) => {
    console.log("SYNCING TO SERVER:", logs);
    setTimeout(resolve, 500);
  });
};

export const startLogSync = () => {
  if (syncInterval) return;

  syncInterval = setInterval(async () => {
    if (isSubmitted) return;

    const logs = getLogsFromStorage();
    if (!logs.length) return;

    try {
      await sendLogsToServer(logs);
      logEvent("logs_synced", { count: logs.length });
    } catch (err) {
      logEvent("log_sync_failed");
    }
  }, SEND_INTERVAL);
};

export const stopLogSync = () => {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
  }
};

export const markTestSubmitted = () => {
  isSubmitted = true;
  stopLogSync();
  logEvent("test_submitted");
};
