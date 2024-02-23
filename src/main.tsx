import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing/landing.tsx'
import {createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AdminPage from './pages/AdminPage/adminpage.tsx'

const router = createHashRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/adminPage",
        element: <AdminPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
