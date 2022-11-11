import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const AddNewTechnician = () => {
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">

                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Add New Technician</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Add New Customer</p>
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
                                        </div>
                                        <div className="form-group">
                                            <label>Email* <span>:</span></label>
                                            <input type="email" className="inputItem" placeholder="Enter Email" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number* <span>:</span></label>
                                            <input type="email" className="inputItem" placeholder="Enter Mobile Phone" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Image<span>:</span></label>
                                            <input type="file" className="inputTypeFile inputItem" />
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


                                        <h2 className="subHeading">Service Details:</h2>

                                        <div className="form-group">
                                            <label>Service Zone* <span>:</span></label>
                                            <select name id className="inputItem" required>
                                                <option value disabled selected>Select</option>
                                                <option value>State-1</option>
                                                <option value>State-2</option>
                                                <option value>State-3</option>
                                            </select>
                                        </div>

                                        
                                        <div className="form-group">
                                            <label>Phone Password* <span>:</span></label>
                                            <input type="password" className="inputItem" placeholder="Enter Password" required />
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

export default AddNewTechnician