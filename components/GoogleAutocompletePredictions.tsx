"use client";
import { ZooAutocompletePrediction } from "@/lib/types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { getPlacePredictions } from "../lib/utils";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useAppDispatch } from "@/store";
import { addZoo, setSelectedZoo } from "@/store/zoosSlice";

interface GoogleAutocompletePredictions {
  types: string[];
}

function GoogleAutocompletePredictions({ types }: any) {
  const containerRef = useOutsideClick(() => {
    setText("");
    setIsFocused(false);
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsStatus, setSuggestionsStatus] =
    useState<ZooAutocompletePrediction | null>(null);

  const dispatch = useAppDispatch();
  const doQuery = useCallback(async () => {
    const results: any = (await getPlacePredictions(text, types)) || [];

    setSuggestions(
      results.map(
        (
          result: google.maps.places.AutocompletePrediction
        ): ZooAutocompletePrediction => ({
          description: result.description,
          place_id: result.place_id,
        })
      )
    );

    setSuggestionsStatus(results.status);
  }, [text, types]);

  useDebounce(doQuery, text, 500);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      setIsFocused(true);
    };

    const inputElement = inputRef.current;

    inputElement?.addEventListener("focus", handleFocus);

    return () => {
      inputElement?.removeEventListener("focus", handleFocus);
    };
  }, [inputRef]);

  return (
    <div className="flex w-full flex-col">
      <p>{suggestionsStatus?.toString()}</p>
      <div className="relative w-full" ref={containerRef}>
        <input
          className="h-12 w-full border-2 border-gray-300 px-4 outline-none"
          type="text"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to search..."
        />
        {isFocused && suggestions.length > 0 && (
          <ul
            onClick={() => {
              setIsFocused(false);
              setText("");
            }}
            className="absolute max-h-[250px] divide-y overflow-y-auto rounded-lg border-2 bg-white p-4 shadow-lg"
          >
            {suggestions.map((item: ZooAutocompletePrediction) => (
              <li
                className="cursor-pointer py-2 hover:bg-slate-100"
                key={item.place_id}
                onClick={async () => {
                  const getCoords = await fetch(
                    `${window.location.origin}/api/getGeolocationByPlaceId/${item.place_id}`
                  );
                  const getCoordsJson = await getCoords.json();

                  const itemWithCoords = {
                    id: item.place_id,
                    name: item.description,
                    ...getCoordsJson,
                  };

                  dispatch(addZoo(itemWithCoords));
                  dispatch(setSelectedZoo(itemWithCoords));
                }}
              >
                {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default GoogleAutocompletePredictions;
