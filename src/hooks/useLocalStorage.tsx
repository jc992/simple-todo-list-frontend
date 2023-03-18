import { useState } from 'react';

export function useLocalStorage(key: string, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      return value;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      if (value == null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
      setStoredValue(value);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
