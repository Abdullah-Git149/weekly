import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const EditGenerator = () => {
    return (
        <div>
            <section className="dashboardWrap">
                {/*?php include 'includes/side-menu.php';?*/}
                <SideMenu />
                <div className="mainContent">
                    {/*?php include 'includes/top-bar.php';?*/}
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Edit Generator</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Edit Generator</p>
                                    </div>
                                    {/* ADD NEW CUSTOMER FORM START*/}
                                    <form action className="addCustomerForm">
                                        <div className="form-group">
                                            <label>Name* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Name" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email* <span>:</span></label>
                                            <input type="email" className="inputItem" placeholder="Enter Email" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number* <span>:</span></label>
                                            <input type="email" className="inputItem" placeholder="Enter Mobile Phone" required />
                                        </div>
                                        {/*<div class="form-group">
								<label>Category <span>:</span></label>
								<select name="" id="" class="inputItem">
									<option value="" disabled selected>Enter Category</option>
									<option value="" >Active</option>
									<option value="" >Dective</option>
								</select>
							</div> */}
                                        {/* <div class="form-group">
								<label>Phone Password* <span>:</span></label>
								<input type="password" class="inputItem" placeholder="Enter Password" required>
							</div> */}
                                        <h2 className="subHeading">Generator Details:</h2>
                                        <div className="form-group">
                                            <label>Generator Name* <span>:</span></label>
                                            <input type="text" className="inputItem" placeholder="Enter Generator Name" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Generator Model Number* <span>:</span></label>
                                            <input type="Number" className="inputItem" placeholder="Enter Generator Model Number" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Model Number Image<span>:</span></label>
                                            <input type="file" className="inputTypeFile inputItem" />
                                        </div>
                                        <div className="form-group">
                                            <label>Generator Serial Number* <span>:</span></label>
                                            <input type="number" className="inputItem" placeholder="Enter Generator Serial Number" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Fuel Type* <span>:</span></label>
                                            <select name id className="inputItem" required>
                                                <option value disabled selected>Select</option>
                                                <option value>Natural Gas</option>
                                                <option value>Diesel</option>
                                                <option value>Petrol</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Select a Maintenance Package* <span>:</span></label>
                                            <div className="inputItem inputTypeFile d-flex">
                                                <div className="form-check me-5">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Every 6 Months
                                                    </label>
                                                </div>
                                                <div className="form-check me-5">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Every 12 Months
                                                    </label>
                                                </div>
                                            </div>
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
                                        <div className="form-group">
                                            <div className="btnWrap type-2 ">
                                                <a href="#!" className="ctBtn type-2 clr-2">Save</a>
                                                <a href="#!" className="ctBtn type-2 clr-1">Cancel</a>
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

export default EditGenerator