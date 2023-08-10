import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import Hero from "./componentes/Hero";
import { Children } from "react";
import { HomeLayout } from "./layaouts/HomeLayout";
import NotFound from "./componentes/NotFound";
import Cities from "./componentes/Cities";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/index', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/*', element: <NotFound /> },
            { path: '/cities', element: <Cities /> },

        ]
    }
])

export default router;