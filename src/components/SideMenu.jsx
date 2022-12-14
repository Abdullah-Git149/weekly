import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { userLogout } from "../store/slices/userSlice"
const SideMenu = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {

        localStorage.removeItem("user")
        localStorage.removeItem("profile")


    }

    return (
        <div>
            <aside className="sideMenu relClass">
                <a href="index.php" className="asideLogo xy-center">
                    <img src="assets/images/logo.svg" alt="img" className="img-fluid w-100" />
                </a>
                <ul className="list-unstyled navLinks">
                    <li>
                        <Link to="dashboard" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-house" /></span>
                            <p className="title pt-2">Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/customer-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-screwdriver-wrench" /></span>
                            <p className="title pt-2">Customer Management</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/generator-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-stethoscope" /></span>
                            <p className="title pt-2">Generator Management</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/request-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-address-card" /></span>
                            <p className="title pt-2">Request Management</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/technician-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-toolbox" /></span>
                            <p className="title pt-2">Technician Management</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/content-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-bars-staggered" /></span>
                            <p className="title pt-2">Content Management</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/misc-setting-managment" className="navItem">
                            <span className="navIcon xy-center"><i className="fa-solid fa-gear" /></span>
                            <p className="title pt-2">Misc Settings</p>
                        </Link>
                    </li>
                    <li>
                        <a href="" className="navItem" onClick={() => handleLogout()}>
                            <span className="navIcon xy-center"><i className="fa-solid fa-power-off" /></span>
                            <p className="title pt-2">Logout</p>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default SideMenu