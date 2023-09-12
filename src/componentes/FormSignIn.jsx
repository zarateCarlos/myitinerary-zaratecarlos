//import axios from "axios";
//import apiUrl from "../apiUrl";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import signin_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = signin_actions
import '../css/formSignUp.css'

const FormSignIn = () => {
    const mail = useRef()
    const password = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSignIn() {
        try {
            let data = {
                mail: mail.current.value,
                password: password.current.value
            };
            dispatch(signin({ data }))
                // await axios.post(apiUrl+'users',data)
                .then(res => {
                    console.log(res);
                    if (res.payload.token) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Logged In',

                        })
                        navigate('/')
                    } else if (res.payload.messages.length > 0) {
                        Swal.fire({
                            title: 'Somethig went wrong!',
                            icon: 'error',
                            html: res.payload.messages.map(item => `<p>${item}</p>`).join('')

                        })

                    }

                })
                .catch(error => console.log(error))

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="formulario">

            <form>
                <input ref={mail} type="text" name="mail" id="mail" placeholder="Type Mail" />
                <input ref={password} type="password" name="password" id="password" placeholder="Type Password" />
                <input type="button" value="Sign In" onClick={handleSignIn} />

                <div className="sign">
                    <img src="/google.png" alt="" />
                    <p>Don't you have an account? <Anchor className="in" to='/auth/signup'>Sign Up</Anchor></p>
                </div>

            </form>

        </div>




    );
}

export default FormSignIn;
