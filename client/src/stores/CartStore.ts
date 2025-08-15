import { create } from "zustand";

interface Store {
    isOpen: boolean;
    toggleCart: () => void
}
const useCartStore = create<Store>((set, get) => ({
    isOpen: false,
    toggleCart: () => {
        const changedIsOpen = !get().isOpen;
        set({ isOpen: changedIsOpen })
    }
}))
export default useCartStore