import React from 'react'
import { useState } from 'react';
import { forgetPass } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [option, setOption] = useState(1)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {



            await dispatch(forgetPass({ email , option})).unwrap()
            // navigate('/login');
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
                    <div className="userLogo text-center mb-5">
                        <img src="assets/images/logo.svg" alt="img" className="img-fluid w-100" />
                    </div>
                    <p className="text-center loginHeding pb-4">Forgot Password</p>
                    <div className="loginBtnsRow usersWrap">
                        <form action className="loginForm" onSubmit={handleSubmit}>
                            <div className="input-group relClass">
                                <input type="email" placeholder="robert.cruise@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <button type="submit" className="xy-center genBtn" >Reset</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgetPassword