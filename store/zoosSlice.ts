import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Zoo, Zoos } from "@/lib/types";

const initialState: Zoos = {
  items: {
    ChIJx4sClojbQUcR8uxrnFLGB68: {
      id: "ChIJx4sClojbQUcR8uxrnFLGB68",
      lat: 47.5189977,
      lng: 19.0776433,
      name: "🛰️ International Space Station",
    },
  },
  selectedZoo: {
    id: "ChIJx4sClojbQUcR8uxrnFLGB68",
    lat: 47.5189977,
    lng: 19.0776433,
    name: "🛰️ International Space Station",
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
