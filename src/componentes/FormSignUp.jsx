//import axios from "axios";
//import apiUrl from "../apiUrl";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import signin_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signup } = signin_actions
import '../css/formSignUp.css'

const FormSignUp = () => {
    const name = useRef()
    const lastName = useRef()
    const country = useRef()
    const photo = useRef()
    const mail = useRef()
    const password = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSignUp() {
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                country: country.current.value,
                photo: photo.current.value ? photo.current.value : "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
                mail: mail.current.value,
                password: password.current.value
            };
            dispatch(signup({ data }))
                .then(res => {
                    if (res.payload.success === true) {
                        Swal.fire({
                            icon: 'success',
                            title: 'created!',

                        })

                        navigate('/auth/signin')

                    } else if (res.payload.messages.length > 0) {
                        Swal.fire({
                            title: 'not created!',
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
        <form>
            <input ref={name} type="text" name="name" id="name" placeholder="Type Name" />
            <input ref={lastName} type="text" name="lastName" id="lastName" placeholder="Type Last Name" />
            <input ref={country} type="text" name="country" id="country" placeholder="Type Country" />
            <input ref={photo} type="text" name="photo" id="photo" placeholder="Type Photo" />
            <input ref={mail} type="text" name="mail" id="mail" placeholder="Type Mail" />
            <input ref={password} type="password" name="password" id="password" placeholder="Type Password" />
            <input type="button" value="Sign Up" onClick={handleSignUp} />
            <div className="sign">
                <img src="/google.png" alt="" />
                <p>Already have account? <Anchor className="in" to='/auth/signin'>Sign In</Anchor></p>
            </div>

        </form>




    );
}

export default FormSignUp;
