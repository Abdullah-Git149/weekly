import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const AddRequest = () => {
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">

                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Add Request</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Add Request</p>
                                        <div className="btnWrap type-2">
                                            <a href="add-new.php" className="ctBtn type-2 clr-1" download>Sample CSV</a>
                                            <label className="ctBtn type-2 clr-2"> Upload CSV
                                                <input type="file" size={80} className="inputFile" />
                                            </label>
                                        </div>
                                    </div>
                                    {/* ADD NEW CUSTOMER FORM START*/}
                                    <form action className="addCustomerForm">

                                        <div className="form-group">
                                            <label>Name* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Name" required />
                                            {/* <span className="xy-center"><i className="fa-solid fa-magnifying-glass" /></span> */}
                                        </div>
                                        <div className="form-group">
                                            <label>Email* <span>:</span></label>
                                            <input type="email" className="inputItem" placeholder="Enter Email" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number* <span>:</span></label>
                                            <input type="number" className="inputItem" placeholder="Enter Mobile Phone" required />
                                        </div>

                                        <h2 className="subHeading">Request Details:</h2>

                                        <div className="form-group">
                                            <label>Request Type* <span>:</span></label>
                                            <select name id className="inputItem">
                                                <option value disabled selected>Enter Type</option>
                                                <option value>Maintenance</option>
                                                <option value>Service</option>
                                                <option value>Emergency</option>
                                                <option value>Estimate</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Generator Status* <span>:</span></label>
                                            <input type="number" className="inputItem" placeholder="Enter Mobile Phone" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Description* <span>:</span></label>
                                            <textarea name="" className="inputItem" rows="10" cols="80">
                                            </textarea>
                                        </div>
                                        <h2 className="subHeading">Address Details:</h2>
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

                                        <h2 className="subHeading">Choose Slot:</h2>

                                        <div className="form-group">
                                            <label>Select Slot Type*  <span>:</span></label>
                                            <div className="inputItem inputTypeFile d-flex">
                                                <div className="form-check me-5">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Date Wise
                                                    </label>
                                                </div>
                                                <div className="form-check me-5">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Time Wise
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Select Date* <span>:</span></label>
                                            <input type="date" className="inputItem" placeholder="Enter Generator Name" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Available slots*<span>:</span></label>
                                            <textarea name="" className="inputItem" rows="10" cols="80">
                                                No Slots Available
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Technician*<span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Search" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Technician Priority<span>:</span></label>
                                            <span>N/A</span>
                                            {/* <input type="text" className="inputItem" placeholder="Search" required /> */}
                                        </div>
                                        <div className="form-group">
                                            <label>Technician Email*<span>:</span></label>
                                            <span>N/A</span>
                                            {/* <input type="text" className="inputItem" placeholder="Search" required /> */}
                                        </div>
                                        <div className="form-group">
                                            <label>Technician Phone*<span>:</span></label>
                                            <span>N/A</span>
                                            {/* <input type="text" className="inputItem" placeholder="Search" required /> */}
                                        </div>

                                        <div className="form-group">
                                            <div className="btnWrap type-2 ">
                                                <a href="#!" className="ctBtn type-2 clr-2">Save</a>
                                                <a href="#!" className="ctBtn type-2 clr-1">Cancel</a>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddRequest