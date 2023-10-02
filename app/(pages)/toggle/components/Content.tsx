"use client";
import React from "react";
import useToggle from "@/app/hooks/useToggle";
import { Truculenta } from "next/font/google";

const Content = () => {
  const [on, setOn] = useToggle(true);

  return (
    <div className="flex flex-col items-center">
      <button onClick={setOn}>toggle with nothing</button>
      <button onClick={() => setOn("beans")}>toggle with string</button>
      <button onClick={() => setOn(false)}>toggle with false boolean</button>
      {on && "beans"}
    </div>
  );
};

export default Content;
