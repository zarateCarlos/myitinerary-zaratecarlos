import { Home } from "./pages/Home";
import { HomeLayout } from "./layaouts/HomeLayout";
import "./css/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";



const App = () => {
    return (
    

        <RouterProvider router={router} />

    )
}
export default App