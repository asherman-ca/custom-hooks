import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver(options = {}) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;
  const ref = useRef(null);
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    if (!node || typeof IntersectionObserver !== "function") {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { threshold, root, rootMargin },
    );

    observer.observe(node);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, entry];
}
