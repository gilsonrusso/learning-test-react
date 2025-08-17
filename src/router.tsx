import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loading from './components/Loading'
import AppLayout from './layouts/AppLayout'

const HomePage = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
])
