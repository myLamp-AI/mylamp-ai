// store.ts
import create from 'zustand';

interface Store {
  isOpen: boolean;
  toggleOpen: () => void;
  close: () => void;
}

const useStore = create<Store>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

export default useStore;
