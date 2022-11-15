import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import { MDBDataTableV5 } from "mdbreact";
import { MDBBtn } from 'mdb-react-ui-kit';
const RequestManagment = () => {

    const [tablebody, setTableBody] = useState([]);

    const [reqList, setReqlist] = useState([
        {
            reqType: 'Tiger Nixon',
            genCount: 'System Architect',
            quickSelect: 'Edinburgh',
            slotTime: '61',
            customerEmail: '2011/04/25',
            zipCode: '$320',
            status: 'Completed',
            isActive: "Active"

        },
        {
            reqType: 'Garrett Winters',
            genCount: 'Accountant',
            quickSelect: 'Tokyo',
            slotTime: '63',
            customerEmail: '2011/07/25',
            zipCode: '$170',
            status: 'Completed',
            isActive: "Active"
        },
        {
            reqType: 'Ashton Cox',
            genCount: 'Junior Technical Author',
            quickSelect: 'San Francisco',
            slotTime: '66',
            customerEmail: '2009/01/12',
            zipCode: '$86',
            status: 'Completed',
            isActive: "Active"
        },
        {
            reqType: 'Cedric Kelly',
            genCount: 'Senior Javascript Developer',
            quickSelect: 'Edinburgh',
            slotTime: '22',
            customerEmail: '2012/03/29',
            zipCode: '$433',
            status: 'Completed',
            isActive: "Active"
        },

        {
            reqType: 'Airi Satou',
            genCount: 'Accountant',
            quickSelect: 'Tokyo',
            slotTime: '33',
            customerEmail: '2008/11/28',
            zipCode: '$162',
            status: 'Completed',
            isActive: "Active"
        },
        {
            reqType: 'Brielle Williamson',
            genCount: 'Integration Specialist',
            quickSelect: 'New York',
            slotTime: '61',
            customerEmail: '2012/12/02',
            zipCode: '$372',
            status: 'Completed',
            isActive: "Active"
        },
        {
            reqType: 'Brielle Williamson',
            genCount: 'Integration Specialist',
            quickSelect: 'New York',
            slotTime: '61',
            customerEmail: '2012/12/02',
            zipCode: '$372',
            status: 'Completed',
            isActive: "Active"
        },
        {
            reqType: 'Brielle Williamson',
            genCount: 'Integration Specialist',
            quickSelect: 'New York',
            slotTime: '61',
            customerEmail: '2012/12/02',
            zipCode: '$372',
            status: 'Completed',
            isActive: "Active"
        },
    ])

    useEffect(() => {
        if (!reqList) {
            return <></>;
        } else if (reqList) {
            const userDataFiltered = reqList?.map((x) => {
                //Getting user image

                let jsx = (
                    <>
                        {/* <Link to={`user-details/${x._id}`}> */}
                        <button
                            type="button"
                            className="btn btn-sm btn-default"
                            title="View Details"
                            data-for="send"
                            data-tip="true"
                            currentitem="false"
                        // onClick={() => navigate("/user-details", { state: x?._id })}
                        >
                            {/* <AiFillEye /> */}
                            Edit
                            {/* <i className="icon-eye"></i> */}
                        </button>
                        {/* </Link> */}

                        {/* button condition */}

                        <button
                            //  to={'*'}
                            // onClick={(e) => BlockUser(x._id, e)}
                            className="btn btn-sm mr-1 ml-1"
                            title=""
                            style={{ backgroundColor: "#FF7F00", color: "white" }}
                        >
                            Delete
                        </button>

                    </>
                );

                x.action = jsx;
                return x;
            });

            setTableBody({
                columns: [
                    {
                        label: "Request Type",
                        field: "reqType",
                        sort: "asc",
                        width: 50,
                    },
                    {
                        label: "Generator Count",
                        field: "genCount",
                        width: 50,
                    },
                    {
                        label: "Quick Selects",
                        field: "quickSelect",
                        width: 50,
                    },
                    {
                        label: "Slot Time",
                        field: "slotTime",
                        width: 50,
                    },
                    // {
                    //   label: "Gender",
                    //   field: "user_gender",
                    //   width: 50,
                    // },
                    {
                        label: "Customer Email",
                        field: "customerEmail",
                        width: 50,
                    },
                    {
                        label: "Zip Code  ",
                        field: "zipCode",
                        width: 50,
                    },
                    {
                        label: "Status",
                        field: "status",
                        width: 50,
                    },
                    {
                        label: "IsActive",
                        field: "isActive",
                        width: 50,
                    },
                    {
                        label: "Action",
                        field: "action",
                        width: 50,
                    },
                ],

                rows: userDataFiltered ? userDataFiltered : [],
            });
        }
    }, [reqList]);
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Request Management</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="btnWrap">
                                    <Link to="/calender-view"><MDBBtn className='me-1'> Open Calender</MDBBtn></Link>
                                    <Link to="/add-request"  > <MDBBtn className='me-1' color='success'> Add New Request </MDBBtn></Link>
                                    <Link to="/"  > <MDBBtn className='me-1' color='danger'> Delete Request </MDBBtn></Link>
                                    <Link to="/"  > <MDBBtn className='mx-2' color='dark'> Restore Request </MDBBtn></Link>

                               
                                </div>
                                <div className="genBox type-2">


                                    <MDBDataTableV5
                                        noBottomColumns
                                        className="table table-hover js-basic-example dataTable table-custom spacing5"
                                        entriesOptions={[5, 10, 20, 25]}
                                        entries={5}
                                        paging
                                        pagesAmount={15}
                                        data={tablebody}

                                    // searchTop
                                    // sortRows={['user_name']}
                                    //searchBottom={true}
                                    // onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
                                    />

                                    {/* <table id="myTable" className="display">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <form action>
                                                        <input type="checkbox" className="checkAll" />
                                                    </form>
                                                </th>
                                                <th>Request Type</th>
                                                <th>Generator Count</th>
                                                <th>Quick Selects</th>
                                                <th>Slot Time</th>
                                                <th>Customer Email</th>
                                                <th>Zip Code</th>
                                                <th>Status</th>
                                                <th>IsActive</th>
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
                                                <td>Maintenance</td>
                                                <td>1</td>
                                                <td></td>

                                                <td>10/3/2022 5:00 PM - 6:30 PM</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Completed</td>
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
                                                <td>Emergency</td>
                                                <td>2</td>
                                                <td>Generator is running but I do not have power.</td>
                                                <td>10/3/2022 5:00 PM - 6:30 PM</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Completed</td>
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
                                                <td>Emergency</td>
                                                <td>2</td>
                                                <td>Generator is running but I do not have power.</td>
                                                <td>10/3/2022 5:00 PM - 6:30 PM</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Completed</td>
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
                                                <td>Maintenance</td>
                                                <td>1</td>
                                                <td></td>

                                                <td>10/3/2022 5:00 PM - 6:30 PM</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Completed</td>
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
                                                <td>Maintenance</td>
                                                <td>1</td>
                                                <td></td>

                                                <td>10/3/2022 5:00 PM - 6:30 PM</td>
                                                <td>delsteindunn@gmail.com</td>
                                                <td>43055</td>
                                                <td>Completed</td>
                                                <td>Active</td>


                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <Link to="/edit-generator" className="actionbtn"><i className="fa-solid fa-pen" /></Link>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ADDRESS MODAL */}
            <div className="modal fade detailModal" id="genModal-1" tabIndex={-1} aria-labelledby="genModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="genBox modalBox">
                            <div className="topText xy-between pb-2 mb-3 borT pt-3">
                                <p className="title">Addresses</p>
                                <span className="actionBtnRow xy-center">
                                    <a href="edit-address.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                    <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                </span>
                            </div>
                            <div className="modalDetail">
                                <h3 className="heading pb-2">Home</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Status</p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Active</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">State </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Ohio</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">City </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Newark</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Description </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> -</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Address </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> 7000 Chatham Road|</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Zip Code </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc">43055</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btnWrap type-2 pt-3 justify-content-end">
                                    <Link to="/edit-address" className="ctBtn type-2 clr-1">Add Address</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ADDRESS MODAL */}

            {/* GENERATORS MODAL */}
            <div className="modal fade detailModal" id="genModal-2" tabIndex={-1} aria-labelledby="genModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="genBox modalBox">
                            <div className="topText xy-between pb-2 mb-3 borT pt-3">
                                <p className="title">Generators</p>
                                <span className="actionBtnRow xy-center">
                                    <a href="edit-generator.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                    <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                </span>
                            </div>
                            <div className="modalDetail">
                                <h3 className="heading pb-2">Home</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="generatorWrap d-flex">
                                            <div className="imgBox me-2">
                                                <img src="assets/images/sample-img.png" alt="img" className="generatorImg" />
                                            </div>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Status</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> Active</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Modal No </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> 7177</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Serial No </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> 3005585392</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Manufacturer</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">Generac</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Generator Type</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">Air Cooled</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*<div class="col-6">
							<ul class="list-unstyled">
								<li>	
									<div class="infoItem d-flex pb-2">
										<p class="title">Description </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc"> -</p>
									</div>
								</li>
								<li>
									<div class="infoItem d-flex pb-2">
										<p class="title">Address </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc"> 7000 Chatham Road|</p>
									</div>
								</li>
								<li>
									<div class="infoItem d-flex pb-2">
										<p class="title">Zip Code </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc">43055</p>
									</div>
								</li>
							</ul>
						</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestManagment