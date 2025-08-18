import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SharedProvider } from './context'
import './index.css'
import { router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SharedProvider>
      <RouterProvider router={router} />
    </SharedProvider>
  </StrictMode>,
)
