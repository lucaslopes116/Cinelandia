import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from '../screens/Dashboard/Dashboard'
import { Teste } from '../screens/Teste/Teste'
import { Casa } from '../screens/Casa/Casa'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'teste',
    element: <Teste />,
  },
  {
    path: 'casa',
    element: <Casa />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
