import type { Metadata } from "next";
import Content from "./components/Content";

export const metadata: Metadata = {
  title: "use default hook",
};

export default function Home() {
  return (
    <div>
      <Content />
      beans
    </div>
  );
}
