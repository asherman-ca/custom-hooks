"use client";
import { FC, useRef, forwardRef } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import Container from "@/app/components/Container";

const InterComponent: FC = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex h-[500px] flex-col gap-10">
      Beans
      {props.children}
    </div>
  );
});

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [ref, entry] = useIntersectionObserver();

  console.log(entry);

  return (
    <Container>
      <InterComponent ref={ref}></InterComponent>
      <InterComponent />
      <InterComponent />
      <InterComponent />
      <InterComponent />
    </Container>
  );
};

export default page;
