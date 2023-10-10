"use client";
import Container from "@/app/components/Container";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  return <Container>{isSmallDevice ? "small" : "big"}</Container>;
};

export default page;
