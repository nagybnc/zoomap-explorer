import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Zoo, Zoos } from "@/lib/types";

const initialState: Zoos = {
  items: {
    ChIJx4sClojbQUcR8uxrnFLGB68: {
      id: "ChIJx4sClojbQUcR8uxrnFLGB68",
      lat: 47.5189977,
      lng: 19.0776433,
      name: "Budapest, Budapesti Állatkert, Állatkerti körút, Magyarország",
    },
    ChIJRXJwAEPfQUcRJ4SACywFM3c: {
      id: "ChIJRXJwAEPfQUcRJ4SACywFM3c",
      lat: 47.52552829999999,
      lng: 18.926058,
      name: "Budakeszi, Budakeszi Vadaspark, Hrsz, Magyarország",
    },
    ChIJ5bz2I1qfOEcRWXwecvYbZEY: {
      id: "ChIJ5bz2I1qfOEcRWXwecvYbZEY",
      lat: 48.0017933,
      lng: 21.7237689,
      name: "Nyíregyháza, Nyíregyházi Állatpark, Sóstói út, Magyarország",
    },
  },
  selectedZoo: {
    id: "ChIJx4sClojbQUcR8uxrnFLGB68",
    lat: 47.5189977,
    lng: 19.0776433,
    name: "Budapest, Budapesti Állatkert, Állatkerti körút, Magyarország",
  },
};

export const counterSlice = createSlice({
  name: "zoos",
  initialState,
  reducers: {
    addZoo: (state, action: PayloadAction<Zoo>) => {
      state.items[action.payload.id] = action.payload;
    },
    deleteZoo: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    setSelectedZoo: (state, action: PayloadAction<Zoo>) => {
      state.selectedZoo = action.payload;
    },
  },
});

export const { addZoo, deleteZoo, setSelectedZoo } = counterSlice.actions;

export default counterSlice.reducer;
