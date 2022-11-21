import React from 'react'
import { useSelector } from 'react-redux';
import { getUserProfile } from "../store/slices/userSlice"
const TopBar = () => {

    const profile = useSelector(getUserProfile)

    console.log("===>", profile)

    return (
        <div>
            <div className="topBar xy-between">
                <form className="form-group relClass">
                    <input type="search" placeholder="Search..." />
                    <span className="xy-center"><i className="fa-solid fa-magnifying-glass" /></span>
                </form>

                <div className="profileImg">
                    <span>{profile?.name} </span>
                    <img src="assets/images/profile-img.png" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default TopBar