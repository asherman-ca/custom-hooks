import { useEffect, useLayoutEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handler = (newSize) => {
      setSize(newSize);
    };

    window.addEventListener("resize", (e) => {
      handler({
        height: e.target.innerHeight,
        width: e.target.innerWidth,
      });
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return size;
}
