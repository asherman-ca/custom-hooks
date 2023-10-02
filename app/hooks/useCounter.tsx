import * as React from "react";

export default function useCounter(startingValue = 0, options: any = {}) {
  const { min, max } = options;

  if (min && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`,
    );
  }

  if (max && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`,
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = () => {
    if (count === max) {
      return;
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === min) {
      return;
    }
    setCount(count - 1);
  };

  const set = (nextCount: number) => {
    if (nextCount < min || nextCount > max) {
      return;
    }
    setCount(nextCount);
  };

  const reset = () => {
    if (count === startingValue) {
      return;
    }
    setCount(startingValue);
  };

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
}
