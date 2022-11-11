import React from 'react'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Home = () => {
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Dashboard</h1>
                        <div className="row pt-2">
                            <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                                <div className="genBox">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Upcoming Requests</p>
                                        <p className="count xy-center">0</p>
                                    </div>
                                    <div className="rqstCol">
                                        <p className="noRqstText">No requests found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                                <div className="genBox">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Pending  Requests</p>
                                        <p className="count xy-center">0</p>
                                    </div>
                                    <div className="rqstCol">
                                        <p className="noRqstText">No requests found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                                <div className="genBox">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">In-Progress Requests</p>
                                        <p className="count xy-center">0</p>
                                    </div>
                                    <div className="rqstCol">
                                        <div className="requestRow xy-between">
                                            <div className="leftContent xy-between">
                                                <img src="assets/images/review-img-2.png" alt="img" className="rqstImg" />
                                                <p className="name">Michael Klien</p>
                                            </div>
                                            <div className="rightContent xy-between">
                                                <button className="btnDefault rqstBtn">Accept</button>
                                                <button className="btnDefault rqstBtn declinebtn">Decline</button>
                                            </div>
                                        </div>
                                        <div className="requestRow xy-between">
                                            <div className="leftContent xy-between">
                                                <img src="assets/images/review-img-3.png" alt="img" className="rqstImg" />
                                                <p className="name">Kimberly Paul</p>
                                            </div>
                                            <div className="rightContent xy-between">
                                                <button className="btnDefault rqstBtn">Accept</button>
                                                <button className="btnDefault rqstBtn declinebtn">Decline</button>
                                            </div>
                                        </div>
                                        <div className="requestRow xy-between">
                                            <div className="leftContent xy-between">
                                                <img src="assets/images/review-img-4.png" alt="img" className="rqstImg" />
                                                <p className="name">David William</p>
                                            </div>
                                            <div className="rightContent xy-between">
                                                <button className="btnDefault rqstBtn">Accept</button>
                                                <button className="btnDefault rqstBtn declinebtn">Decline</button>
                                            </div>
                                        </div>
                                        <div className="requestRow xy-between">
                                            <div className="leftContent xy-between">
                                                <img src="assets/images/review-img-5.png" alt="img" className="rqstImg" />
                                                <p className="name">John Doe</p>
                                            </div>
                                            <div className="rightContent xy-between">
                                                <button className="btnDefault rqstBtn">Accept</button>
                                                <button className="btnDefault rqstBtn declinebtn">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Total Requests Attended by Technicians</p>
                                    </div>
                                    <MDBTable align='middle'>
                                        <MDBTableHead>
                                            <tr>
                                                <th>
                                                    <form action="">
                                                        <input type="checkbox" class="list-sort" disabled />
                                                    </form>
                                                </th>
                                                <th scope='col'>Technician Name</th>
                                                <th scope='col'>Technician Email</th>
                                                <th scope='col'>Technician Phone No</th>
                                                <th scope='col'>Technician Zip-Code</th>
                                                <th scope='col'>Technician City</th>
                                                <th scope='col'>Technician State</th>
                                                <th scope='col'>Priority</th>
                                                <th scope='col'>Status</th>
                                                <th scope='col'>Action</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>
                                                    <form action="">
                                                        <input type="checkbox" class="list-sort" />
                                                    </form>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>Curt Bragg</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>curt.bragg@weekleyelectric.com</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>+17404044489</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>43056</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Newark</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Ohio</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>3</p>

                                                </td>
                                                <td>
                                                    <MDBBadge color='success' pill>
                                                        Active
                                                    </MDBBadge>
                                                </td>

                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Delete
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>Curt Bragg</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>curt.bragg@weekleyelectric.com</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>+17404044489</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>43056</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Newark</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Ohio</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>3</p>

                                                </td>
                                                <td>
                                                    <MDBBadge color='success' pill>
                                                        Active
                                                    </MDBBadge>
                                                </td>

                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Delete
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='ms-3'>
                                                            <p className='fw-bold mb-1'>Curt Bragg</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>curt.bragg@weekleyelectric.com</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>+17404044489</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>43056</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Newark</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>Ohio</p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>3</p>

                                                </td>
                                                <td>
                                                    <MDBBadge color='success' pill>
                                                        Active
                                                    </MDBBadge>
                                                </td>

                                                <td>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Edit
                                                    </MDBBtn>
                                                    <MDBBtn color='link' rounded size='sm'>
                                                        Delete
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home