import { useState } from "react";

export default function useToggle(initialValue: boolean) {
  const [val, setVal] = useState<boolean>(!!initialValue);

  const handleToggle = (newVal?: any) => {
    if (typeof newVal === "boolean") {
      setVal(newVal);
    } else {
      setVal(!val);
    }
  };

  return [val, handleToggle] as [boolean, (arg: any) => void];
}
