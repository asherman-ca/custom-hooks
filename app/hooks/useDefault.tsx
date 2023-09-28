import { useState } from "react";

const useDefault = (initialValue: string, defaultValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  return [value ?? defaultValue, setValue] as [
    string,
    (arg: string | null | undefined) => void,
  ];
};

export default useDefault;
