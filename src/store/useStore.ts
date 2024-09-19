import {create} from "zustand";

interface User {
  name: string;
  avatar: string;
}

interface Store {
  user: User | null;
  setState: (partial: Partial<Store>) => void;
  menuItem: MenuItems
}

export const useStore = create<Store>((set) => ({
  user: null,
  setState: (partial) => set((state) => ({ ...state, ...partial })),
  menuItem: "My info",
}));