"use client";
import Container from "@/app/components/Container";
import useObjectState from "@/app/hooks/useObjectState";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [state, setState] = useObjectState({ name: "john", age: 30 });

  return <Container>Object State</Container>;
};

export default page;
