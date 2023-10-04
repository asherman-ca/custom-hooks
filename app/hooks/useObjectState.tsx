import * as React from "react";

export default function useObjectState(initialValue) {
  const [state, setState] = React.useState(initialValue);

  const updateState = (newVal) => {
    if (typeof newVal === "function") {
      setState((prev) => {
        return { ...prev, ...newVal(prev) };
      });
    } else {
      setState((prev) => {
        return { ...prev, ...newVal };
      });
    }
  };

  return [{}, () => {}];
}
