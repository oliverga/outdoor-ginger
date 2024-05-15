import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item._id === product._id);
        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }
    }),
    removeFromCart: (cartItemId) => set((state) => {
        const existingProduct = state.cart.find(item => item._id === cartItemId);
        if (existingProduct.quantity > 1) {
            return {
                cart: state.cart.map(item =>
                    item._id === cartItemId ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        } else {
            return { cart: state.cart.filter(item => item._id !== cartItemId) };
        }
    }),
    removeAllFromCart: (cartItemId) => set((state) => ({
        cart: state.cart.filter(item => item._id !== cartItemId),
    })),
}));

export default useCartStore;
