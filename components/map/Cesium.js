// import { Cartesian3, Color } from "cesium";
// import { useSelector } from "react-redux";
// import { CameraLookAt, Viewer } from "resium";
// import { CesiumEntity } from "./CesiumEntity";

import { CzmlDataSource, Viewer } from "resium";
import issCZML from "./ISS";

export default function Cesium() {
  // const { items, selectedZoo } = useSelector((state) => state.zoos);
  // const camera = Cartesian3.fromDegrees(
  //   selectedZoo?.lng,
  //   selectedZoo?.lat,
  //   600
  // );
  return (
    <Viewer full>
      <CzmlDataSource data={issCZML} show />
      {/* <CameraLookAt target={camera} offset={new Cartesian3(0, 0, 1)} />
      {Object.values(items).map((item) => (
        <CesiumEntity key={item.name} item={item} />
      ))} */}
    </Viewer>
  );
}
