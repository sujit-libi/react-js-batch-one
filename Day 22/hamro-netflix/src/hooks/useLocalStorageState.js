import { useEffect, useState } from 'react';

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedMovie = localStorage.getItem(key);
    return JSON.parse(storedMovie);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
