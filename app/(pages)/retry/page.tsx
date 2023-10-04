"use client";
import Container from "@/app/components/Container";
import useContuousRetry from "@/app/hooks/useContinuousRetry";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const hasResolved = useContuousRetry(
    () => {
      return 1;
    },
    1000,
    { maxRetries: 5 },
  );
  return <Container>{hasResolved ? "resolved" : "not resolved"}</Container>;
};

export default page;
