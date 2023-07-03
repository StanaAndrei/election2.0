import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

const _repo = (set, get) => ({
    token: null,
    logOut: () => set({ token: null }),
    logIn: token => set({ token })
})

const storageOpt = {
    name: 'token',
    storage: createJSONStorage(() => AsyncStorage)
}

const useAuthRepo = create(persist(_repo, storageOpt))

export default useAuthRepo;