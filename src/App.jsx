import "./css/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import users_actions from "./store/actions/users"
const { signin_token } = users_actions;




const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            dispatch(signin_token());
        }

    }, []);

    return (
        <RouterProvider router={router} />
    )
}
export default App