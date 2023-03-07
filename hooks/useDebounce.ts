import { useEffect } from "react";

export default function useDebounce(
  callback: () => void,
  text: string,
  delay: number
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (text) {
        callback();
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text, delay, callback]);
}
