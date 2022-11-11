import React from 'react'

const Login = () => {
    return (
        <div>
            <section className="initial-sec relClass xy-center">
                <div className="loginWrap">
                    <div className="userLogo text-center mb-4">
                        <img src="assets/images/logo.svg" alt="img" className="img-fluid w-100" />
                    </div>
                    <p className="text-center loginHeding pb-4">Login</p>
                    <div className="loginBtnsRow usersWrap">
                        <form action className="loginForm">
                            <div className="input-group relClass">
                                <input type="email" placeholder="robert.cruise@domain.com" />
                                <span className="iconX">
                                    <i className="fa-solid fa-envelope" />
                                </span>
                            </div>
                            <div className="input-group relClass">
                                <input id="password-field" type="password" name="password" className="field" placeholder="Password" required />
                                <span className="iconX">
                                    <i className="fa-solid fa-unlock" />
                                </span>
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                            </div>
                            <a href="forgot-password.php" className="desc forgetPass btnDefault marginAuto xy-center pt-3 pb-4">Forgot Password?</a>
                            <a href="#!" className="xy-center genBtn">Login</a>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login