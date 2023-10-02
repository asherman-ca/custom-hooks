import { clear } from "console";
import { useEffect, useRef } from "react";

export function useTimeout(cb: () => void, ms: number) {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      cb();
    }, ms);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [ms]);
  return () => {
    clearTimeout(timeoutRef.current);
  };
}
