import React, { useEffect, RefObject } from "react";

export const useOutsideClick = <T extends HTMLDivElement>(
  callback: () => void
): RefObject<T> => {
  const ref = React.useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);

  return ref;
};
