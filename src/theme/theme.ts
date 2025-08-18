import { createTheme, responsiveFontSizes } from '@mui/material'
import { darkPalette, lightPalette } from './colors'
import { typography } from './typography'

let theme = createTheme({
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  typography: {
    ...typography,
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'uppercase',
  //       },
  //     },
  //   },
  // },
})

theme = responsiveFontSizes(theme)

export default theme
