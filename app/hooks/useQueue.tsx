// "use client";
import { useState } from "react";

export function useQueue(initialValue: number[] = []) {
  const [queue, setQueue] = useState<number[]>(initialValue);

  const add = (number: number) => {
    setQueue((q) => [...q, number]);
  };

  const remove = () => {
    let removedElement;

    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  };

  const clear = () => {
    setQueue([]);
  };

  return {
    queue: queue,
    size: queue.length,
    last: queue[queue.length - 1],
    first: queue[0],
    add,
    remove,
    clear,
  };
}
