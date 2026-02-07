const STORAGE_KEY = "secure_test_logs";

export const saveLogsToStorage = (logs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
};

export const getLogsFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
