import { create } from 'zustand'

interface UIState {
  isMobileMenuOpen: boolean
  theme: 'light' | 'dark'
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  theme: 'light',
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
}))
