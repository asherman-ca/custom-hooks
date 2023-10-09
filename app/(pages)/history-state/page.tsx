"use client";
import Container from "@/app/components/Container";
import useHistoryState from "@/app/hooks/useHistoryState";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { state, canUndo, canRedo, set, undo, redo, clear } = useHistoryState();

  return <Container>History State</Container>;
};

export default page;
