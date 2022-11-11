import React from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const GeneratorManagment = () => {
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Generator Management</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="btnWrap">
                                    <a className="ctBtn" data-bs-toggle="modal" data-bs-target="#genModal-3">Manage Estimated Generators</a>
                                    <Link to="/add-new-generator" className="ctBtn clr-1" >Add New Generators</Link>

                                    <a className="ctBtn clr-2">Delete Generators</a>

                                    <a href="#!" className="ctBtn clr-2">Restore Generators</a>
                                </div>
                                <div className="genBox type-2">

                                    <table id="myTable" className="display">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <form action>
                                                        <input type="checkbox" className="checkAll" />
                                                    </form>
                                                </th>
                                                <th>Generator Manufacturer</th>
                                                <th>Generator Model Number</th>
                                                <th>Generator Serial Number</th>
                                                <th>Customer Name</th>
                                                <th>Customer Email</th>
                                                <th>Customer's Zip Code</th>
                                                <th>Customer's City</th>
                                                <th>Customer's State</th>
                                                <th>Status</th>

                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-generator" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <form action>
                                                        <input type="checkbox" className="list-sort" />
                                                    </form>
                                                </td>
                                                <td>Generac</td>
                                                <td>7177</td>
                                                <td>3005585392</td>
                                                <td>Danyelle Dunn</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Newark</td>
                                                <td>Ohio</td>
                                                <td>Active</td>

                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-customer" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>












            
       
            {/* MANAGE ESTIMATED GENERATORS MODAL */}
        


            <div className="modal fade detailModal type-2" id="genModal-3" tabIndex={-1} aria-labelledby="genModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="genBox modalBox">
                            <div className="topText xy-between pb-2 mb-3 borT pt-3">
                                <p className="title">Generators</p>
                            </div>
                            <div className="modalDetail">
                                <form className="form-group relClass">
                                    <input type="search" placeholder="Search..." />
                                    <span className="xy-center"><i className="fa-solid fa-magnifying-glass" /></span>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="generatorWrap d-flex pt-2 pb-2">
                                            <span className="actionBtnRow xy-center">
                                                <a href="edit-generator.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                                <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                            </span>
                                            <div className="imgBox me-2">
                                                <img src="assets/images/sample-img.png" alt="img" className="generatorImg" />
                                            </div>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h3 className="heading pb-2">Essential Home</h3>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Manufacturer </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> Generac</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Generator Size </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">10-14</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Description </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> This option is for a fully automatic air-cooled Generac generator from 10kW to 14kW. This will power essential circuits only. You would select this option to power 16-24 120v circuits for your most necessary emergency items.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="generatorWrap d-flex pt-2 pb-2">
                                            <span className="actionBtnRow xy-center">
                                                <a href="edit-generator.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                                <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                            </span>
                                            <div className="imgBox me-2">
                                                <img src="assets/images/sample-img-1.png" alt="img" className="generatorImg" />
                                            </div>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h3 className="heading pb-2">Partial Home</h3>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Manufacturer </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> Generac</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Generator Size </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">10-14</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Description </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> This option is for a fully automatic air-cooled Generac generator from 10kW to 14kW. This will power essential circuits only. You would select this option to power 16-24 120v circuits for your most necessary emergency items.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="btnWrap type-2 pt-3 justify-content-end">
                                    <a href="#!" className="ctBtn type-3 clr-1">Add Estimated Generator</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GeneratorManagment