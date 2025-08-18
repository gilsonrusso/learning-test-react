import { useColorScheme } from '@mui/material'
import { createContext, useContext, useState } from 'react'

type TAppContext = {
  isDarkMode: string
  setDarkMode: () => void
}

const AppContext = createContext<TAppContext | null>(null)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { setMode } = useColorScheme()
  const [isDarkMode, setIsDarkMode] = useState<'light' | 'dark'>('dark')

  const setDarkMode = (): void => {
    setMode(isDarkMode === 'dark' ? 'light' : 'dark')
    setIsDarkMode(isDarkMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppContext.Provider value={{ isDarkMode: isDarkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider')
  }
  return context
}
