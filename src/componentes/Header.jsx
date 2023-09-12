import { useState } from "react";
import "../css/header.css";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import signin_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signOut } = signin_actions;

const Header = ({ logo, navbar1, navbar2, navbar3 }) => {
    let [show, setShow] = useState(false);
    // let token = useSelector((store) => store.user.token);
    let mail = useSelector((store) => store.user.user?.name);
    let user = useSelector((store) => store.user.user);
    console.log(mail);
    let dispatch = useDispatch();




    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign me out'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(signOut());
                Swal.fire('Signed Out', 'You have been signed out.', 'success');
            }
        });
    };

    return (
        <header className="header">
            <h2> {logo} </h2>

            {show ? (
                <nav className="nav-hamb">
                    <ul>
                        <Anchor to="/Home" className="anchor">
                            {navbar1}
                        </Anchor>
                        <Anchor to="/Cities" className="anchor">
                            {navbar2}
                        </Anchor>
                        {mail && (
                        <>
                            <p>Hola, {mail}!! </p>
                            <span className="log" onClick={handleSignOut}>
                                Sign Out
                            </span>
                        </>
                    )}

                    {!mail && (

                        <Anchor to="/auth/signin" className="anchor log">
                            {navbar3}
                        </Anchor>

                    )}
                    </ul>
                </nav>
            ) : null}

            <div className="menu-hamb">
                <img
                    src="/menu.png"
                    onClick={() => setShow(!show)}
                    alt="menu"
                />
            </div>

            <div className="navbar">
                <ul>
                    <Anchor to="/Home" className="anchor">
                        {navbar1}
                    </Anchor>
                    <Anchor to="/Cities" className="anchor">
                        {navbar2}
                    </Anchor>
                    {mail && (
                        <>
                            <p>Hola, {mail}!! </p>
                            <img className="user" src={user.photo} alt="" />
                            <span className="log" onClick={handleSignOut}>
                                Sign Out
                            </span>
                        </>
                    )}

                    {!mail && (

                        <Anchor to="/auth/signin" className="anchor log">
                            {navbar3}
                        </Anchor>

                    )}
                </ul>
            </div>
        </header>
    );
};
export default Header;
