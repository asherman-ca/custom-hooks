"use client";
import { useEffect } from "react";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function useRandomInterval(cb, { minDelay, maxDelay }) {
  let id;
  useEffect(() => {
    id = window.setInterval(
      () => {
        cb();
      },
      getRandomNumber(minDelay, maxDelay),
    );

    return () => {
      window.clearInterval(id);
    };
  }, []);

  return () => window.clearInterval(id);
}
