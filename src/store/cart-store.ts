"use client";

import { Medicine } from "@/features/medicine/types";
import { create } from "zustand";

type CartStore = {
  items: Medicine[];
  addItem: (item: Medicine) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    const existingItem = get().items.find((item) => item.id === item.id);

    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }));
    } else {
      set((state) => ({ items: [...state.items, item] }));
    }
  },
  clearCart: () => set({ items: [] }),
  totalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
