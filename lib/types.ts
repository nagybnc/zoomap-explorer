export interface ZooAutocompletePrediction {
  description: string;
  place_id: string;
}

export interface Zoo {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Zoos {
  items: Record<string, Zoo>;
  selectedZoo: Zoo;
}
