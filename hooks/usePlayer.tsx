import { create } from "zustand";

type PlayerStore = {
  song: any;
  cancelPlayback: () => void;
  setPlayback: (song: any) => void;
}

export const usePlayer = create<PlayerStore>((set) => ({
  song: null,
  cancelPlayback: () => set({ song: null }),
  setPlayback: (song) => set({ song: song }),
}));