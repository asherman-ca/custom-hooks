"use client";
import useDefault from "@/app/hooks/useDefault";
import React from "react";

const Content = () => {
  const [value, setValue] = useDefault("beans", "beanser");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    setValue(name);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <button type="submit">update</button>
      </form>
      <button onClick={() => setValue(null)}>Set null</button>
      {value}
    </div>
  );
};

export default Content;
