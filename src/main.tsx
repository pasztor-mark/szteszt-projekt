import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing/landing.tsx'

import Arak from './pages/Arak/Arak.tsx'
import {createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AdminPagev2 from './pages/AdminPagev2/AdminPagev2.tsx'
import About from './pages/AboutUs/about.tsx'
import Gallery from './pages/Gallery/Gallery.tsx'

const router = createHashRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/adminPage",
        element: <AdminPagev2/>
    },
    {
        path: "/arak",
        element: <Arak/>
    },
    {
        path: "/galeria",
        element: <Gallery/>
    },
    {
        path: "/about",
        element: <About/>
    }
    
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
