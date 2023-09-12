import Header from "../componentes/Header"
import "../css/homelayout.css"
import { Outlet } from "react-router-dom"
export const HomeLayout = ({ children }) => {
    let logo = "My Tinerary"
    let navbar1 = "Home"
    let navbar2 = "Cities"
    let navbar3 = "Log In"
    return (
        <div className="home">
            <Header logo={logo} navbar1={navbar1} navbar2={navbar2} navbar3={navbar3} />
            <Outlet />

        </div>

    )
}
