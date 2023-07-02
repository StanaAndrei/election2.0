import { create } from 'zustand'

const useAuthRepo = create((set) => ({
    token: null,
    logOut: () => set({ token: null }),
    logIn: async () => {
        
    }
}))