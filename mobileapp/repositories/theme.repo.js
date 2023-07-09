import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

const _repo = (set, get) => ({
    theme: { bg: 'wormGrey.50' },
    setTheme: theme => set({ theme }),
})

const storageOpt = {
    name: 'theme',
    storage: createJSONStorage(() => AsyncStorage)
}

const useThemeRepo = create(persist(_repo, storageOpt))

export default useThemeRepo;
export const getTheme = () => useThemeRepo.getState().theme
