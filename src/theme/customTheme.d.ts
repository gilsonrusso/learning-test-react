import { PaletteColor, PaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    hero?: React.CSSProperties
  }
  // Permite a variante 'hero' no createTheme
  interface TypographyVariantsOptions {
    hero?: React.CSSProperties
  }

  interface Palette {
    customGrid?: PaletteColor
  }
  interface PaletteOptions {
    customGrid?: PaletteColorOptions
  }
}

// Permite o uso da variante 'hero' no componente Typography
// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     hero: true
//   }
// }
