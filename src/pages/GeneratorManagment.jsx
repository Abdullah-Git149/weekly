import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBDataTableV5 } from "mdbreact";
const GeneratorManagment = () => {

    const [tablebody, setTableBody] = useState([]);

    const [genList, setGenlist] = useState([
        {
            genName: 'Tiger Nixon',
            genModNum: 'System Architect',
            genSerNum: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320',

        },
        {
            genName: 'Garrett Winters',
            genModNum: 'Accountant',
            genSerNum: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170',
        },
        {
            genName: 'Ashton Cox',
            genModNum: 'Junior Technical Author',
            genSerNum: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86',
        },
        {
            genName: 'Cedric Kelly',
            genModNum: 'Senior Javascript Developer',
            genSerNum: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433',
        },
        {
            genName: 'Airi Satou',
            genModNum: 'Accountant',
            genSerNum: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162',
        },
        {
            genName: 'Brielle Williamson',
            genModNum: 'Integration Specialist',
            genSerNum: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
        {
            genName: 'Brielle Williamson',
            genModNum: 'Integration Specialist',
            genSerNum: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
        {
            genName: 'Brielle Williamson',
            genModNum: 'Integration Specialist',
            genSerNum: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
        },
    ])

    useEffect(() => {
        if (!genList) {
            return <></>;
        } else if (genList) {
            const userDataFiltered = genList?.map((x) => {
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
                        label: "Generator Manufacturer",
                        field: "genName",
                        sort: "asc",
                        width: 50,
                    },
                    {
                        label: "Generator Model Number",
                        field: "genModNum",
                        width: 50,
                    },
                    {
                        label: "Generator Serial Number",
                        field: "genSerNum",
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
    }, [genList]);
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
                                    {/* <a className="ctBtn" data-bs-toggle="modal" data-bs-target="#genModal-3">Manage Estimated Generators</a>
                                    <Link to="/add-new-generator" className="ctBtn clr-1" >Add New Generators</Link>

                                    <a className="ctBtn clr-2">Delete Generators</a>

                                    <a href="#!" className="ctBtn clr-2">Restore Generators</a> */}


                                    <Link to="/calender-view"><MDBBtn className='me-1'>Manage Estimated Generators</MDBBtn></Link>
                                    <Link to="/add-new-generator" > <MDBBtn className='me-1' color='success'> Add New Generators</MDBBtn></Link>
                                    <Link to="/"  > <MDBBtn className='me-1' color='danger'> Delete Generators</MDBBtn></Link>
                                    <Link to="/"  > <MDBBtn className='mx-2' color='dark'>Restore Generators </MDBBtn></Link>

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
                                    </table> */}
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