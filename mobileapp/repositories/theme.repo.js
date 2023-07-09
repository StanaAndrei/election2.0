import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME_DARK, THEME_LIGHT } from '../constants';

const storageOpt = {
    name: 'theme',
    storage: createJSONStorage(() => AsyncStorage)
}

const useThemeRepo = create(persist((set, get) => ({
    theme: THEME_LIGHT,
    toggleTheme: () => set({theme: get().theme == THEME_LIGHT ? THEME_DARK : THEME_LIGHT}),
}), storageOpt))

export default useThemeRepo;
export const getTheme = () => useThemeRepo.getState().theme
