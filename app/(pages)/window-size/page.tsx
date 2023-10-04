"use client";
import Container from "@/app/components/Container";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const size = useWindowSize();
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <p>{size.height}</p>
        <p>{size.width}</p>
      </div>
    </Container>
  );
};

export default page;
