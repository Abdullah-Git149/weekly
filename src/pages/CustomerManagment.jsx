import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import { Link } from "react-router-dom"
import { MDBDataTableV5 } from "mdbreact";
import { useState, useEffect } from 'react';
import { AiFillEye } from "react-icons/ai"
const CustomerManagment = () => {
    const [tablebody, setTableBody] = useState([]);

    const [userList, setUserlist] = useState([
        {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320',
            action: <div> <button> Abcdf</button>  <button>asd</button></div>
        },
        {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170',
        },
        {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86',
        },
        {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433',
        },
        {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162',
        },
        {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
        {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
        {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
    ])

    useEffect(() => {
        if (!userList) {
            return <></>;
        } else if (userList) {
            const userDataFiltered = userList?.map((x) => {
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
                        label: "name",
                        field: "name",
                        sort: "asc",
                        width: 50,
                    },
                    {
                        label: "position",
                        field: "position",
                        width: 50,
                    },
                    {
                        label: "office",
                        field: "office",
                        width: 50,
                    },
                    {
                        label: "age",
                        field: "age",
                        width: 50,
                    },
                    // {
                    //   label: "Gender",
                    //   field: "user_gender",
                    //   width: 50,
                    // },
                    {
                        label: "date",
                        field: "date",
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
    }, [userList]);

    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Customer Management</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="btnWrap">
                                    <Link to="/add-new-customer" className="ctBtn">Add New Customer</Link>
                                    <a href="#!" className="ctBtn clr-1">Delete Customers</a>
                                    <a href="#!" className="ctBtn clr-2">Restore Customer</a>
                                </div>
                                <div className="genBox type-2">

                                    {/* <table id="myTable" className="display">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <form action>
                                                        <input type="checkbox" className="checkAll" />
                                                    </form>
                                                </th>
                                                <th>Name</th>
                                                <th>Email Id</th>
                                                <th>Phone Number</th>
                                                <th>Status</th>
                                                <th>Category</th>
                                                <th />
                                                <th />
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="active1">Active</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn" data-bs-toggle="modal" data-bs-target="#genModal-1">Address</button></td>
                                                <td><button className="editModalBtn" data-bs-toggle="modal" data-bs-target="#genModal-2">Generator</button></td>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="dActive">Dective</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="active1">Active</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="dActive">Dective</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="active1">Active</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="dActive">Dective</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="active1">Active</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
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
                                                <td>John Will</td>
                                                <td>johnwill@example.com</td>
                                                <td>+000 000 0000</td>
                                                <td className="dActive">Dective</td>
                                                <td>Category 01</td>
                                                <td><button className="editModalBtn">Address</button></td>
                                                <td><button className="editModalBtn">Generator</button></td>
                                                <td>
                                                    <span className="actionBtnRow xy-center">
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                                        <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                    {/* <MDBTable align='middle'>
                                        <MDBTableHead>
                                            <tr>
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
                                    </MDBTable> */}


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

export default CustomerManagment