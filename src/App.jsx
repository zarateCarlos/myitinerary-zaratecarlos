import "./css/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Provider } from "react-redux";
import store from "./store/store";



const App = () => {
    return (

        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>


    )
}
export default App