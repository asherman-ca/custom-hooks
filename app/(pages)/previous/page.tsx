"use client";
import React, { useState } from "react";
import usePrevious from "../../hooks/usePrevious";

const page = () => {
  const [count, setCount] = useState(0);
  const val = usePrevious(count);

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setCount(count + 1)}>add one</button>
      <div>{count}</div>
      <div>{val}</div>
    </div>
  );
};

export default page;
