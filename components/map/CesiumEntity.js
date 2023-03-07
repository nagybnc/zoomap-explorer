import { Cartesian3, Color } from "cesium";
import { EntityDescription, Entity } from "resium";

export function CesiumEntity({ item }) {
  const position = Cartesian3.fromDegrees(item.lng, item.lat, 0);
  return (
    <Entity
      position={position}
      point={{ pixelSize: 50, color: Color.ROYALBLUE }}
    >
      <EntityDescription>
        <h1>{item.name}</h1>
      </EntityDescription>
    </Entity>
  );
}
