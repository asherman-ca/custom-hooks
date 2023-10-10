"use client";
import Container from "@/app/components/Container";
import useRandomInterval from "@/app/hooks/useRandomInterval";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const clear = useRandomInterval(
    () => {
      alert("beans");
    },
    { minDelay: 5000, maxDelay: 10000 },
  );

  return (
    <Container>
      <button onClick={clear}>Clear</button>
    </Container>
  );
};

export default page;
