"use client";
import Container from "@/app/components/Container";
import useVisibilityChange from "@/app/hooks/useVisibilityChange";
import { FC, useEffect, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const documentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = useState(0);

  useEffect(() => {
    if (documentVisible === false) {
      setTabAwayCount((c) => c + 1);
    }
  }, [documentVisible]);

  console.log("documentVisible", documentVisible);

  return (
    <Container>
      <h1>Visibility Change</h1>
      <div>Tab Away Count: {tabAwayCount}</div>
    </Container>
  );
};

export default page;
