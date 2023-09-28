"use client";
import useDocumentTitle from "./hooks/useDocumentTitle";

export default function Home() {
  const title = useDocumentTitle("beanser");

  console.log(title);

  return <main>beans</main>;
}
