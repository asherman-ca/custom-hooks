"use client";
import Container from "@/app/components/Container";
import { useTimeout } from "@/app/hooks/useTimeout";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [state, setState] = useState<undefined | boolean>(undefined);

  const timeout = useTimeout(() => {
    setState(false);
    alert("The beans win again! 🫘");
  }, 2000);

  return (
    <Container>
      <button
        className="rounded-lg border border-black p-2"
        onClick={() => {
          timeout();
          if (state === undefined) {
            setState(true);
            alert("you stopped the beans! 🎉");
          }
        }}
      >
        Stop the beans! 🫘
      </button>
      {state === false && <div>☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️</div>}
      {state === true && <div>🎉🎉🎉🎉🎉🎉🎉🎉</div>}
    </Container>
  );
};

export default page;
