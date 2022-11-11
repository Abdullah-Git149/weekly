import React from 'react'

const ForgetPassword = () => {
    return (
        <div>
            <section className="initial-sec relClass xy-center">
                <div className="loginWrap">
                    <div className="userLogo text-center mb-5">
                        <img src="assets/images/logo.svg" alt="img" className="img-fluid w-100" />
                    </div>
                    <p className="text-center loginHeding pb-4">Forgot Password</p>
                    <div className="loginBtnsRow usersWrap">
                        <form action className="loginForm">
                            <div className="input-group relClass">
                                <input type="email" placeholder="robert.cruise@domain.com" />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <a href="#!" className="xy-center genBtn">Reset</a>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgetPassword