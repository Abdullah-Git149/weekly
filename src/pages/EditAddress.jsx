import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const EditAddress = () => {
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    {/*?php include 'includes/top-bar.php';?*/}
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Edit Address</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Edit Address</p>
                                    </div>
                                    {/* ADD NEW CUSTOMER FORM START*/}
                                    <form action className="addCustomerForm">
                                        <h2 className="subHeading">Address Details</h2>
                                        <div className="form-group">
                                            <label>Type* <span>:</span></label>
                                            <select name id className="inputItem" required>
                                                <option value disabled selected>Select</option>
                                                <option value>Home</option>
                                                <option value>Business</option>
                                                <option value>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Address Line 1* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Address" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Address Line 2* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Address" required />
                                        </div>
                                        <div className="form-group">
                                            <label>City* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter City" required />
                                        </div>
                                        <div className="form-group">
                                            <label>State* <span>:</span></label>
                                            <select name id className="inputItem" required>
                                                <option value disabled selected>Select</option>
                                                <option value>State-1</option>
                                                <option value>State-2</option>
                                                <option value>State-3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Zip Code* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Zip Code" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Description <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Description" required />
                                        </div>
                                        <div className="form-group">
                                            <div className="btnWrap type-2 justify-content-end">
                                                <a href="#!" className="ctBtn type-2 clr-2">Save</a>
                                            </div>
                                        </div>
                                    </form>
                                    {/* ADD NEW CUSTOMER FORM START*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditAddress