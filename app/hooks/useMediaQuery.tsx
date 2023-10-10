import * as React from "react";

export default function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (listener) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
