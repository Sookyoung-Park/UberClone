import {create} from "zustand"
import { ItemData_Soo } from "@/types/types"

interface WishlistState{
    wishlist: ItemData_Soo[];
    addToWishList: (course: ItemData_Soo) => void;
    removeFromWishList: (coursetitle: string)=> void;
    isInWishList:(coursetitle: string)=>boolean;
}

export const useWislistStore = create<WishlistState>((set,get) => ({
    wishlist:[],
    addToWishList: (course) =>
        set((state) => ({wishlist: [...state.wishlist, course]})),
    removeFromWishList: (coursetitle) =>
        set((state) => ({
            wishlist: state.wishlist.filter((c) => c.title !== coursetitle),
        })),
        isInWishList: (coursetitle) =>
        get().wishlist.some((c) => c.title === coursetitle),

}));