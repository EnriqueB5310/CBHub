import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home.tsx';
import './app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Releases from './routes/Releases.tsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "releases",
    element: <Releases />

  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
