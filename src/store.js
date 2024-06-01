import { create } from "zustand";

export const useStore = create((set, get) => {
  return {
    manPower: {},
    updateManPower: (next) =>
      set((state) => {
        return { manPower: { ...state.manPower, ...next } };
      }),
  };
});
