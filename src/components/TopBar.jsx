import React from 'react'

const TopBar = () => {
    return (
        <div>
            <div className="topBar xy-between">
                <form className="form-group relClass">
                    <input type="search" placeholder="Search..." />
                    <span className="xy-center"><i className="fa-solid fa-magnifying-glass" /></span>
                </form>
                <div className="profileImg">
                    <img src="assets/images/profile-img.png" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default TopBar