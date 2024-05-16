import { create } from "zustand";

export const usePostStore = create((set) => ({
    post: null,
    setPost: (newPost) => set({ post: newPost }),
    // Add other globe functions here
}));