import theme from '@/theme/theme'
import { ThemeProvider } from '@mui/material'
import type React from 'react'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme} noSsr>
      {children}
    </ThemeProvider>
  )
}
