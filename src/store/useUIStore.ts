import { create } from "zustand";

interface UIState {
  isMenuOpen: boolean;
  isAssistantOpen: boolean;
  toggleMenu: () => void;
  toggleAssistant: () => void;
  closeAll: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  isAssistantOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleAssistant: () => set((state) => ({ isAssistantOpen: !state.isAssistantOpen })),
  closeAll: () => set({ isMenuOpen: false, isAssistantOpen: false }),
}));
