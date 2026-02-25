import { useState, useEffect } from "react";

export default function useDebounce(value, time) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, time]);

  return debouncedValue;
}
