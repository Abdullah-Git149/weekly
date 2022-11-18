import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../store/slices/userSlice';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [userRole, setUserRole] = useState("")
    const [option, setOption] = useState(1)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            console.log(userRole)

            await dispatch(signUpUser({ email, name, password, phone, countryCode, userRole, option })).unwrap()
            // navigate('/dashboard');
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
                    <p className="text-center loginHeding pb-4">Sign Up</p>
                    <div className="loginBtnsRow usersWrap">
                        <form onSubmit={handleSubmit} className="loginForm">
                            <div className="input-group relClass">
                                <input type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input type="email" placeholder="john.doe@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input type="number" placeholder="+1 650 513 0514" onChange={(e) => setPhone(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa fa-phone" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input type="number" placeholder="Country Code" onChange={(e) => setCountryCode(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa fa-mobile" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <select name id className="inputItem" required onChange={(e) => setUserRole(e.target.value)}>
                                    <option value="" disabled selected>Select Role</option>
                                    <option value="User">Technician</option>
                                    <option value="Technician">Manager</option>
                                    <option value="Estimator">Estimator</option>
                                    <option value="Others">Others</option>
                                </select>
                                <span className="iconX">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input id="password-field" type="password" name="password" className="field" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                <span className="iconX">
                                    <i className="fa-solid fa-unlock" />
                                </span>
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                            </div>
                            <Link to="/login" className="desc forgetPass btnDefault marginAuto xy-center pt-3 pb-4">Already Have An Account</Link>
                            {/* <a href="#!" className=>Login</a> */}
                            <button type="submit" className="xy-center genBtn" >Create An Account</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp