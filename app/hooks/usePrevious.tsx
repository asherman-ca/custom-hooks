import { useEffect, useState } from "react";

export default function usePrevious(val: string | number) {
  const [prev, setPrev] = useState<string | number | null>(null);
  const [cur, setCur] = useState(val);

  if (val !== cur) {
    setPrev(cur);
    setCur(val);
  }

  return prev;
}
