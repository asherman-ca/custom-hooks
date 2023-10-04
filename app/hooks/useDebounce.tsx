import * as React from "react";

export default function useDebounce(val, delay) {
  const [debouncedVal, setDebouncedVal] = React.useState(val);
  const lastRef = React.useRef(null);

  React.useEffect(() => {
    if (lastRef) window.clearTimeout(lastRef.current);

    lastRef.current = window.setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => {
      window.clearTimeout(lastRef.current);
    };
  }, [val, delay]);

  return debouncedVal;
}
