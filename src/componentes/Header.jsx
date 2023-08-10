import { useState } from "react"
import "../css/header.css"
import { Link as Anchor } from "react-router-dom"


const Header = ({ logo, navbar1, navbar2, navbar3 }) => {
    let [show, setShow] = useState(false)

    return (
        <header className="header">
            <h2> {logo} </h2>

            {show ? (<nav className="nav-hamb">
                <ul>
                    <Anchor to='/Home' className="anchor" > {navbar1} </Anchor>
                    <Anchor to='/Cities' className="anchor" > {navbar2} </Anchor>
                    <Anchor  className="anchor" > {navbar3} </Anchor>
                </ul>
            </nav>) : (null)}

            <div className="menu-hamb">
                <img src="/menu.png" onClick={() => setShow(!show)} alt="menu" />
            </div>

            <div className="navbar">
                <ul>
                    <Anchor to='/Home' className="anchor" >  {navbar1} </Anchor>
                    <Anchor to='/Cities' className="anchor" > {navbar2} </Anchor>
                    <Anchor className="anchor" > {navbar3} </Anchor>
                </ul>

            </div>


        </header>
    )
}
export default Header