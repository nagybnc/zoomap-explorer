"use client";
import dynamic from "next/dynamic";

const Cesium = dynamic(() => import("../../../components/map/Cesium"), {
  ssr: false,
});

function Map() {
  return (
    <div className="relative flex-1 lg:mr-80">
      <Cesium />
    </div>
  );
}

export default Map;
