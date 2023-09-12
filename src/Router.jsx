import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';
import { HomeLayout } from "./layaouts/HomeLayout";
import NotFound from "./componentes/NotFound";
import Cities from "./componentes/Cities";
import City from "./componentes/City";
import FormSignUp from "./componentes/FormSignUp";
import FormSignIn from "./componentes/FormSignIn";
import Activity from "./componentes/Activity";

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
           // { path: '/activities/:itinerary_id', element: <Activity />},
            { path: '/auth/signup', element: <FormSignUp />},
            { path: '/auth/signin', element: <FormSignIn />},
            { path: '/*', element: <NotFound />},

        ]
    }
])

export default router;