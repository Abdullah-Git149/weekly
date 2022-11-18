import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Link,
    useNavigate
} from "react-router-dom";


import { signinUser } from "../store/slices/userSlice"
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            console.log("login" , email , password)
         
            await dispatch(signinUser({ email, password })).unwrap()
            navigate('/dashboard');
            try {
                // await dispatch(userProfile()).unwrap()
            } catch (rejectedValueOrSerializedError) {
                console.log(rejectedValueOrSerializedError)
            }
        } catch (rejectedValueOrSerializedError) {
            console.log(rejectedValueOrSerializedError)
        }
    }


    return (
        <div>
            <section className="initial-sec relClass xy-center">
                <div className="loginWrap">
                    <div className="userLogo text-center mb-4">
                        <img src="assets/images/logo.svg" alt="img" className="img-fluid w-100" />
                    </div>
                    <p className="text-center loginHeding pb-4">Login</p>
                    <div className="loginBtnsRow usersWrap">
                        <form onSubmit={handleSubmit} className="loginForm">
                            <div className="input-group relClass">
                                <input type="email" placeholder="robert.cruise@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input id="password-field" type="password" name="password" className="field" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-unlock" />
                                </span>
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                            </div>
                            <Link to="/sign-up" className="desc forgetPass btnDefault marginAuto xy-center pt-3 pb-4">Create Account</Link>
                            <Link to="/forget-password" className="desc forgetPass btnDefault marginAuto xy-center pt-3 pb-4">Forgot Password?</Link>
                            {/* <a href="#!" className=>Login</a> */}
                            <button type="submit" className="xy-center genBtn" >Log In</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login