"use client";
import Container from "@/app/components/Container";
import { useQueue } from "@/app/hooks/useQueue";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  const { queue, size, add, remove, clear, last } = useQueue([1, 2, 3]);

  return (
    <Container>
      <h1 className="text-2xl font-bold">Queue</h1>
      <div className="flex gap-4">
        <button onClick={clear}>Clear</button>
        <button onClick={() => add(last + 1)}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>
      <div className="flex gap-2">
        [
        {queue.map((item) => (
          <div>{item}</div>
        ))}
        ]
      </div>
      {size}
    </Container>
  );
};

export default page;
