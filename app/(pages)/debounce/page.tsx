"use client";
import Container from "@/app/components/Container";
import useDebounce from "@/app/hooks/useDebounce";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [input, setInput] = useState<string | null>(null);
  const debouncedValue = useDebounce(input, 5000);

  return (
    <Container>
      <h1>Debounce</h1>
      <input
        className="border border-2 border-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{debouncedValue}</p>
    </Container>
  );
};

export default page;
