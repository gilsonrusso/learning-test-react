import theme from '@/theme/theme'
import { ThemeProvider } from '@mui/material'
import type React from 'react'
import { AppProvider } from './AppContext'

export const SharedProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme} noSsr>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  )
}
