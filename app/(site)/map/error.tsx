"use client"; // Error components must be Client components

import Globe from "@/components/Globe";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mr-80 flex flex-1 flex-col items-center justify-center">
      <h2 className="text-3xl">
        Something went wrong!
        <button className="font-bold" onClick={() => reset()}>
          Try again
        </button>
      </h2>
      <Globe />
    </div>
  );
}
