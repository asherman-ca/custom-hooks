"use client";
import useDocumentTitle from "@/app/hooks/useDocumentTitle";
import React from "react";

const Content = () => {
  const title = useDocumentTitle("beanser");

  return <div>title</div>;
};

export default Content;
