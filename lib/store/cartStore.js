import { create } from "zustand";
import { useEffect } from "react";

// Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem("cart");
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (e) {
        console.error("Could not load cart from localStorage", e);
        return [];
    }
};

// Function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem("cart", serializedCart);
    } catch (e) {
        console.error("Could not save cart to localStorage", e);
    }
};

// Create a Zustand store for managing the cart state
const useCartStore = create((set) => ({
    cart: [], // Initialize cart as an empty array

    // Function to add a product to the cart
    addToCart: (product) => set((state) => {
        // Check if the product already exists in the cart
        const cart = state.cart.map(item =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        const newCart = state.cart.some(item => item._id === product._id)
            ? cart
            : [...cart, { ...product, quantity: 1 }];

        // Save the updated cart to localStorage
        saveCartToLocalStorage(newCart);

        return { cart: newCart };
    }),

    // Function to remove a product from the cart
    removeFromCart: (cartItemId) => set((state) => {
        const newCart = state.cart.reduce((acc, item) => {
            if (item._id === cartItemId) {
                if (item.quantity > 1) {
                    acc.push({ ...item, quantity: item.quantity - 1 });
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);

        // Save the updated cart to localStorage
        saveCartToLocalStorage(newCart);

        return { cart: newCart };
    }),

    // Function to remove all instances of a product from the cart
    removeAllFromCart: (cartItemId) => set((state) => {
        const newCart = state.cart.filter(item => item._id !== cartItemId);

        // Save the updated cart to localStorage
        saveCartToLocalStorage(newCart);

        return { cart: newCart };
    }),

    loadCart: () => set(() => {
        const cart = loadCartFromLocalStorage();
        return { cart };
    }),

    removeAllItems: () => set(() => {
        const newCart = [];
        saveCartToLocalStorage(newCart);
        return { cart: newCart };
    }),
}));

// Export the cart store hook for use in components
export default useCartStore;

