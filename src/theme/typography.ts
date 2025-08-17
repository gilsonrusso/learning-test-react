import type { TypographyVariantsOptions } from '@mui/material'

// Objeto de tipografia com configurações personalizadas
export const typography: TypographyVariantsOptions = {
  fontFamily: ['"Roboto"', 'sans-serif'].join(','),

  h1: {
    fontSize: '3rem',
    fontWeight: 700,
    '@media (max-width:600px)': {
      fontSize: '2rem',
    },
  },

  h2: {
    fontSize: '2.5rem',
    fontWeight: 600,
  },

  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },

  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
  hero: {
    fontSize: '4.5rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
}
