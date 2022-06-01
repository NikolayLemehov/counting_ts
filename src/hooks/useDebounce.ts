import {useState, useEffect} from 'react';

export const useDebounce = (value: number | string | Date, delay: number = 500): number | string | Date => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}