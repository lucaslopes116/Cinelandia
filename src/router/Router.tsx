import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../screens/Home/Home";
import { Teste } from "../screens/Teste/Teste";
import { Casa } from "../screens/Casa/Casa";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: 'teste',
    element: <Teste/>
  },
  {
    path: 'casa',
    element: <Casa/>
  }
])

export function Router() {
  return (
    <RouterProvider router={router}/>
  )
}