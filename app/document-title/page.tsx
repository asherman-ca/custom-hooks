import type { Metadata } from "next";
import Content from "./components/Content";

export const metadata: Metadata = {
  title: "Second Page",
};

export default function Home() {
  return (
    <div>
      <Content />
      beans
    </div>
  );
}
