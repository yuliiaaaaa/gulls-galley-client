export const setLocalStorageItem = (key: string, val: any) => {
  const value = typeof val === 'object' ? JSON.stringify(val) : val;
  localStorage.setItem(key, value);
};

export const getObjectFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
