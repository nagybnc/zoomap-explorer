"use client";
import { Zoo } from "@/lib/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function Map() {
  const { items, selectedZoo } = useSelector((state: RootState) => state.zoos);

  return (
    <div className="flex flex-1 flex-col items-center justify-center border-4 border-dashed border-black p-4 lg:mr-80">
      <>
        <h1 className="text-xl font-bold">MAP LOCATION</h1>
        <strong>Places:</strong>
        {Object.values(items).map((zoo: Zoo) => {
          return <p key={zoo.id}>{zoo.name}</p>;
        })}
        <strong>SelectedPlace:</strong>
        {selectedZoo && selectedZoo?.name}
      </>
    </div>
  );
}

export default Map;
