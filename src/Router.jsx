import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { HomeLayout } from "./layaouts/HomeLayout";
import NotFound from "./componentes/NotFound";
import Cities from "./componentes/Cities";
import City from "./componentes/City";
import Form from "./pages/Form";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: '/', element: <Home />},
            { path: '/index', element: <Home />},
            { path: '/home', element: <Home />},
            { path: '/cities', element: <Cities />},
            { path: '/city/:city_id', element: <City />},
            { path: '/:name/:last_name', element: <Form />},
            { path: '/*', element: <NotFound />},

        ]
    }
])

export default router;