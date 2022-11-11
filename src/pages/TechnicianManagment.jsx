import React from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import { MDBDataTableV5 } from 'mdbreact';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
const TechnicianManagment = () => {
    const [search, setSearch] = useState('')

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Position',
                field: 'position',
                width: 270,
            },
            {
                label: 'Office',
                field: 'office',
                width: 200,
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'disabled',
                width: 100,
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows: [
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
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                office: 'San Francisco',
                age: '59',
                date: '2012/08/06',
                salary: '$137',
            },
            {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2010/10/14',
                salary: '$327',
            },
            {
                name: 'Colleen Hurst',
                position: 'Javascript Developer',
                office: 'San Francisco',
                age: '39',
                date: '2009/09/15',
                salary: '$205',
            },
            {
                name: 'Sonya Frost',
                position: 'Software Engineer',
                office: 'Edinburgh',
                age: '23',
                date: '2008/12/13',
                salary: '$103',
            },
            {
                name: 'Jena Gaines',
                position: 'Office Manager',
                office: 'London',
                age: '30',
                date: '2008/12/19',
                salary: '$90',
            },
            {
                name: 'Quinn Flynn',
                position: 'Support Lead',
                office: 'Edinburgh',
                age: '22',
                date: '2013/03/03',
                salary: '$342',
            },
            {
                name: 'Charde Marshall',
                position: 'Regional Director',
                office: 'San Francisco',
                age: '36',
                date: '2008/10/16',
                salary: '$470',
            },
            {
                name: 'Haley Kennedy',
                position: 'Senior Marketing Designer',
                office: 'London',
                age: '43',
                date: '2012/12/18',
                salary: '$313',
            },
            {
                name: 'Tatyana Fitzpatrick',
                position: 'Regional Director',
                office: 'London',
                age: '19',
                date: '2010/03/17',
                salary: '$385',
            },
            {
                name: 'Michael Silva',
                position: 'Marketing Designer',
                office: 'London',
                age: '66',
                date: '2012/11/27',
                salary: '$198',
            },
            {
                name: 'Paul Byrd',
                position: 'Chief Financial Officer (CFO)',
                office: 'New York',
                age: '64',
                date: '2010/06/09',
                salary: '$725',
            },
            {
                name: 'Gloria Little',
                position: 'Systems Administrator',
                office: 'New York',
                age: '59',
                date: '2009/04/10',
                salary: '$237',
            },
            {
                name: 'Bradley Greer',
                position: 'Software Engineer',
                office: 'London',
                age: '41',
                date: '2012/10/13',
                salary: '$132',
            },
            {
                name: 'Dai Rios',
                position: 'Personnel Lead',
                office: 'Edinburgh',
                age: '35',
                date: '2012/09/26',
                salary: '$217',
            },
            {
                name: 'Jenette Caldwell',
                position: 'Development Lead',
                office: 'New York',
                age: '30',
                date: '2011/09/03',
                salary: '$345',
            },
            {
                name: 'Yuri Berry',
                position: 'Chief Marketing Officer (CMO)',
                office: 'New York',
                age: '40',
                date: '2009/06/25',
                salary: '$675',
            },
            {
                name: 'Caesar Vance',
                position: 'Pre-Sales Support',
                office: 'New York',
                age: '21',
                date: '2011/12/12',
                salary: '$106',
            },
            {
                name: 'Doris Wilder',
                position: 'Sales Assistant',
                office: 'Sidney',
                age: '23',
                date: '2010/09/20',
                salary: '$85',
            },
            {
                name: 'Angelica Ramos',
                position: 'Chief Executive Officer (CEO)',
                office: 'London',
                age: '47',
                date: '2009/10/09',
                salary: '$1',
            },
            {
                name: 'Gavin Joyce',
                position: 'Developer',
                office: 'Edinburgh',
                age: '42',
                date: '2010/12/22',
                salary: '$92',
            },
            {
                name: 'Jennifer Chang',
                position: 'Regional Director',
                office: 'Singapore',
                age: '28',
                date: '2010/11/14',
                salary: '$357',
            },
            {
                name: 'Brenden Wagner',
                position: 'Software Engineer',
                office: 'San Francisco',
                age: '28',
                date: '2011/06/07',
                salary: '$206',
            },
            {
                name: 'Fiona Green',
                position: 'Chief Operating Officer (COO)',
                office: 'San Francisco',
                age: '48',
                date: '2010/03/11',
                salary: '$850',
            },
            {
                name: 'Shou Itou',
                position: 'Regional Marketing',
                office: 'Tokyo',
                age: '20',
                date: '2011/08/14',
                salary: '$163',
            },
            {
                name: 'Michelle House',
                position: 'Integration Specialist',
                office: 'Sidney',
                age: '37',
                date: '2011/06/02',
                salary: '$95',
            },
            {
                name: 'Suki Burks',
                position: 'Developer',
                office: 'London',
                age: '53',
                date: '2009/10/22',
                salary: '$114',
            },
            {
                name: 'Prescott Bartlett',
                position: 'Technical Author',
                office: 'London',
                age: '27',
                date: '2011/05/07',
                salary: '$145',
            },
            {
                name: 'Gavin Cortez',
                position: 'Team Leader',
                office: 'San Francisco',
                age: '22',
                date: '2008/10/26',
                salary: '$235',
            },
            {
                name: 'Martena Mccray',
                position: 'Post-Sales support',
                office: 'Edinburgh',
                age: '46',
                date: '2011/03/09',
                salary: '$324',
            },
            {
                name: 'Unity Butler',
                position: 'Marketing Designer',
                office: 'San Francisco',
                age: '47',
                date: '2009/12/09',
                salary: '$85',
            },
            {
                name: 'Howard Hatfield',
                position: 'Office Manager',
                office: 'San Francisco',
                age: '51',
                date: '2008/12/16',
                salary: '$164',
            },
            {
                name: 'Hope Fuentes',
                position: 'Secretary',
                office: 'San Francisco',
                age: '41',
                date: '2010/02/12',
                salary: '$109',
            },
            {
                name: 'Vivian Harrell',
                position: 'Financial Controller',
                office: 'San Francisco',
                age: '62',
                date: '2009/02/14',
                salary: '$452',
            },
            {
                name: 'Timothy Mooney',
                position: 'Office Manager',
                office: 'London',
                age: '37',
                date: '2008/12/11',
                salary: '$136',
            },
            {
                name: 'Jackson Bradshaw',
                position: 'Director',
                office: 'New York',
                age: '65',
                date: '2008/09/26',
                salary: '$645',
            },
            {
                name: 'Olivia Liang',
                position: 'Support Engineer',
                office: 'Singapore',
                age: '64',
                date: '2011/02/03',
                salary: '$234',
            },
            {
                name: 'Bruno Nash',
                position: 'Software Engineer',
                office: 'London',
                age: '38',
                date: '2011/05/03',
                salary: '$163',
            },
            {
                name: 'Sakura Yamamoto',
                position: 'Support Engineer',
                office: 'Tokyo',
                age: '37',
                date: '2009/08/19',
                salary: '$139',
            },
            {
                name: 'Thor Walton',
                position: 'Developer',
                office: 'New York',
                age: '61',
                date: '2013/08/11',
                salary: '$98',
            },
            {
                name: 'Finn Camacho',
                position: 'Support Engineer',
                office: 'San Francisco',
                age: '47',
                date: '2009/07/07',
                salary: '$87',
            },
            {
                name: 'Serge Baldwin',
                position: 'Data Coordinator',
                office: 'Singapore',
                age: '64',
                date: '2012/04/09',
                salary: '$138',
            },
            {
                name: 'Zenaida Frank',
                position: 'Software Engineer',
                office: 'New York',
                age: '63',
                date: '2010/01/04',
                salary: '$125',
            },
            {
                name: 'Zorita Serrano',
                position: 'Software Engineer',
                office: 'San Francisco',
                age: '56',
                date: '2012/06/01',
                salary: '$115',
            },
            {
                name: 'Jennifer Acosta',
                position: 'Junior Javascript Developer',
                office: 'Edinburgh',
                age: '43',
                date: '2013/02/01',
                salary: '$75',
            },
            {
                name: 'Cara Stevens',
                position: 'Sales Assistant',
                office: 'New York',
                age: '46',
                date: '2011/12/06',
                salary: '$145',
            },
            {
                name: 'Hermione Butler',
                position: 'Regional Director',
                office: 'London',
                age: '47',
                date: '2011/03/21',
                salary: '$356',
            },
            {
                name: 'Lael Greer',
                position: 'Systems Administrator',
                office: 'London',
                age: '21',
                date: '2009/02/27',
                salary: '$103',
            },
            {
                name: 'Jonas Alexander',
                position: 'Developer',
                office: 'San Francisco',
                age: '30',
                date: '2010/07/14',
                salary: '$86',
            },
            {
                name: 'Shad Decker',
                position: 'Regional Director',
                office: 'Edinburgh',
                age: '51',
                date: '2008/11/13',
                salary: '$183',
            },
            {
                name: 'Michael Bruce',
                position: 'Javascript Developer',
                office: 'Singapore',
                age: '29',
                date: '2011/06/27',
                salary: '$183',
            },
            {
                name: 'Donna Snider',
                position: 'Customer Support',
                office: 'New York',
                age: '27',
                date: '2011/01/25',
                salary: '$112',
            },
        ],
    });

    console.log(datatable.rows)



    const allbusiness = datatable.rows?.filter((e) => {
        if (search === '') {
            return e;
        }
        else {
            return e?.name?.toLowerCase()?.includes(search)
        }
    })
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Technician Management</h1>

                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="btnWrap">
                                    <Link to="/daily-schedule" className="ctBtn">Daily Schedule View</Link>
                                    {/* <MDBBtn color="primary">Primary</MDBBtn> */}
                                    <Link to="/add-new-technician" className="ctBtn clr-1">Add New Technician</Link>
                                    <a href="#!" className="ctBtn clr-2">Delete Technician</a>
                                    <a href="#!" className="ctBtn clr-2">Restore Technician</a>
                                </div>
                                <div className="genBox type-2">
                                    <input type="text" placeholder="Search.." onChange={(e) => setSearch(e?.target?.value.toLowerCase())} />

                                    {/* <MDBDataTableV5 hover bordered striped entriesOptions={[10, 20, 25, 50]} entries={10} pagesAmount={4} data={datatable} fullPagination /> */}
                                    <MDBTable align='middle'>
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
                                                            <p className='fw-bold mb-1'>abc Bragg</p>

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

export default TechnicianManagment
// import React from 'react';
// import { MDBDataTableV5 } from 'mdbreact';
// const TechnicianManagement = () => {
//     const [datatable, setDatatable] = React.useState({
//         columns: [
//           {
//             label: 'Name',
//             field: 'name',
//             width: 150,
//             attributes: {
//               'aria-controls': 'DataTable',
//               'aria-label': 'Name',
//             },
//           },
//           {
//             label: 'Position',
//             field: 'position',
//             width: 270,
//           },
//           {
//             label: 'Office',
//             field: 'office',
//             width: 200,
//           },
//           {
//             label: 'Age',
//             field: 'age',
//             sort: 'asc',
//             width: 100,
//           },
//           {
//             label: 'Start date',
//             field: 'date',
//             sort: 'disabled',
//             width: 150,
//           },
//           {
//             label: 'Salary',
//             field: 'salary',
//             sort: 'disabled',
//             width: 100,
//           },
//         ],
//         rows: [
//           {
//             name: 'Tiger Nixon',
//             position: 'System Architect',
//             office: 'Edinburgh',
//             age: '61',
//             date: '2011/04/25',
//             salary: '$320',
//           },
//           {
//             name: 'Garrett Winters',
//             position: 'Accountant',
//             office: 'Tokyo',
//             age: '63',
//             date: '2011/07/25',
//             salary: '$170',
//           },
//           {
//             name: 'Ashton Cox',
//             position: 'Junior Technical Author',
//             office: 'San Francisco',
//             age: '66',
//             date: '2009/01/12',
//             salary: '$86',
//           },
//           {
//             name: 'Cedric Kelly',
//             position: 'Senior Javascript Developer',
//             office: 'Edinburgh',
//             age: '22',
//             date: '2012/03/29',
//             salary: '$433',
//           },
//           {
//             name: 'Airi Satou',
//             position: 'Accountant',
//             office: 'Tokyo',
//             age: '33',
//             date: '2008/11/28',
//             salary: '$162',
//           },
//           {
//             name: 'Brielle Williamson',
//             position: 'Integration Specialist',
//             office: 'New York',
//             age: '61',
//             date: '2012/12/02',
//             salary: '$372',
//           },
//           {
//             name: 'Herrod Chandler',
//             position: 'Sales Assistant',
//             office: 'San Francisco',
//             age: '59',
//             date: '2012/08/06',
//             salary: '$137',
//           },
//           {
//             name: 'Rhona Davidson',
//             position: 'Integration Specialist',
//             office: 'Tokyo',
//             age: '55',
//             date: '2010/10/14',
//             salary: '$327',
//           },
//           {
//             name: 'Colleen Hurst',
//             position: 'Javascript Developer',
//             office: 'San Francisco',
//             age: '39',
//             date: '2009/09/15',
//             salary: '$205',
//           },
//           {
//             name: 'Sonya Frost',
//             position: 'Software Engineer',
//             office: 'Edinburgh',
//             age: '23',
//             date: '2008/12/13',
//             salary: '$103',
//           },
//           {
//             name: 'Jena Gaines',
//             position: 'Office Manager',
//             office: 'London',
//             age: '30',
//             date: '2008/12/19',
//             salary: '$90',
//           },
//           {
//             name: 'Quinn Flynn',
//             position: 'Support Lead',
//             office: 'Edinburgh',
//             age: '22',
//             date: '2013/03/03',
//             salary: '$342',
//           },
//           {
//             name: 'Charde Marshall',
//             position: 'Regional Director',
//             office: 'San Francisco',
//             age: '36',
//             date: '2008/10/16',
//             salary: '$470',
//           },
//           {
//             name: 'Haley Kennedy',
//             position: 'Senior Marketing Designer',
//             office: 'London',
//             age: '43',
//             date: '2012/12/18',
//             salary: '$313',
//           },
//           {
//             name: 'Tatyana Fitzpatrick',
//             position: 'Regional Director',
//             office: 'London',
//             age: '19',
//             date: '2010/03/17',
//             salary: '$385',
//           },
//           {
//             name: 'Michael Silva',
//             position: 'Marketing Designer',
//             office: 'London',
//             age: '66',
//             date: '2012/11/27',
//             salary: '$198',
//           },
//           {
//             name: 'Paul Byrd',
//             position: 'Chief Financial Officer (CFO)',
//             office: 'New York',
//             age: '64',
//             date: '2010/06/09',
//             salary: '$725',
//           },
//           {
//             name: 'Gloria Little',
//             position: 'Systems Administrator',
//             office: 'New York',
//             age: '59',
//             date: '2009/04/10',
//             salary: '$237',
//           },
//           {
//             name: 'Bradley Greer',
//             position: 'Software Engineer',
//             office: 'London',
//             age: '41',
//             date: '2012/10/13',
//             salary: '$132',
//           },
//           {
//             name: 'Dai Rios',
//             position: 'Personnel Lead',
//             office: 'Edinburgh',
//             age: '35',
//             date: '2012/09/26',
//             salary: '$217',
//           },
//           {
//             name: 'Jenette Caldwell',
//             position: 'Development Lead',
//             office: 'New York',
//             age: '30',
//             date: '2011/09/03',
//             salary: '$345',
//           },
//           {
//             name: 'Yuri Berry',
//             position: 'Chief Marketing Officer (CMO)',
//             office: 'New York',
//             age: '40',
//             date: '2009/06/25',
//             salary: '$675',
//           },
//           {
//             name: 'Caesar Vance',
//             position: 'Pre-Sales Support',
//             office: 'New York',
//             age: '21',
//             date: '2011/12/12',
//             salary: '$106',
//           },
//           {
//             name: 'Doris Wilder',
//             position: 'Sales Assistant',
//             office: 'Sidney',
//             age: '23',
//             date: '2010/09/20',
//             salary: '$85',
//           },
//           {
//             name: 'Angelica Ramos',
//             position: 'Chief Executive Officer (CEO)',
//             office: 'London',
//             age: '47',
//             date: '2009/10/09',
//             salary: '$1',
//           },
//           {
//             name: 'Gavin Joyce',
//             position: 'Developer',
//             office: 'Edinburgh',
//             age: '42',
//             date: '2010/12/22',
//             salary: '$92',
//           },
//           {
//             name: 'Jennifer Chang',
//             position: 'Regional Director',
//             office: 'Singapore',
//             age: '28',
//             date: '2010/11/14',
//             salary: '$357',
//           },
//           {
//             name: 'Brenden Wagner',
//             position: 'Software Engineer',
//             office: 'San Francisco',
//             age: '28',
//             date: '2011/06/07',
//             salary: '$206',
//           },
//           {
//             name: 'Fiona Green',
//             position: 'Chief Operating Officer (COO)',
//             office: 'San Francisco',
//             age: '48',
//             date: '2010/03/11',
//             salary: '$850',
//           },
//           {
//             name: 'Shou Itou',
//             position: 'Regional Marketing',
//             office: 'Tokyo',
//             age: '20',
//             date: '2011/08/14',
//             salary: '$163',
//           },
//           {
//             name: 'Michelle House',
//             position: 'Integration Specialist',
//             office: 'Sidney',
//             age: '37',
//             date: '2011/06/02',
//             salary: '$95',
//           },
//           {
//             name: 'Suki Burks',
//             position: 'Developer',
//             office: 'London',
//             age: '53',
//             date: '2009/10/22',
//             salary: '$114',
//           },
//           {
//             name: 'Prescott Bartlett',
//             position: 'Technical Author',
//             office: 'London',
//             age: '27',
//             date: '2011/05/07',
//             salary: '$145',
//           },
//           {
//             name: 'Gavin Cortez',
//             position: 'Team Leader',
//             office: 'San Francisco',
//             age: '22',
//             date: '2008/10/26',
//             salary: '$235',
//           },
//           {
//             name: 'Martena Mccray',
//             position: 'Post-Sales support',
//             office: 'Edinburgh',
//             age: '46',
//             date: '2011/03/09',
//             salary: '$324',
//           },
//           {
//             name: 'Unity Butler',
//             position: 'Marketing Designer',
//             office: 'San Francisco',
//             age: '47',
//             date: '2009/12/09',
//             salary: '$85',
//           },
//           {
//             name: 'Howard Hatfield',
//             position: 'Office Manager',
//             office: 'San Francisco',
//             age: '51',
//             date: '2008/12/16',
//             salary: '$164',
//           },
//           {
//             name: 'Hope Fuentes',
//             position: 'Secretary',
//             office: 'San Francisco',
//             age: '41',
//             date: '2010/02/12',
//             salary: '$109',
//           },
//           {
//             name: 'Vivian Harrell',
//             position: 'Financial Controller',
//             office: 'San Francisco',
//             age: '62',
//             date: '2009/02/14',
//             salary: '$452',
//           },
//           {
//             name: 'Timothy Mooney',
//             position: 'Office Manager',
//             office: 'London',
//             age: '37',
//             date: '2008/12/11',
//             salary: '$136',
//           },
//           {
//             name: 'Jackson Bradshaw',
//             position: 'Director',
//             office: 'New York',
//             age: '65',
//             date: '2008/09/26',
//             salary: '$645',
//           },
//           {
//             name: 'Olivia Liang',
//             position: 'Support Engineer',
//             office: 'Singapore',
//             age: '64',
//             date: '2011/02/03',
//             salary: '$234',
//           },
//           {
//             name: 'Bruno Nash',
//             position: 'Software Engineer',
//             office: 'London',
//             age: '38',
//             date: '2011/05/03',
//             salary: '$163',
//           },
//           {
//             name: 'Sakura Yamamoto',
//             position: 'Support Engineer',
//             office: 'Tokyo',
//             age: '37',
//             date: '2009/08/19',
//             salary: '$139',
//           },
//           {
//             name: 'Thor Walton',
//             position: 'Developer',
//             office: 'New York',
//             age: '61',
//             date: '2013/08/11',
//             salary: '$98',
//           },
//           {
//             name: 'Finn Camacho',
//             position: 'Support Engineer',
//             office: 'San Francisco',
//             age: '47',
//             date: '2009/07/07',
//             salary: '$87',
//           },
//           {
//             name: 'Serge Baldwin',
//             position: 'Data Coordinator',
//             office: 'Singapore',
//             age: '64',
//             date: '2012/04/09',
//             salary: '$138',
//           },
//           {
//             name: 'Zenaida Frank',
//             position: 'Software Engineer',
//             office: 'New York',
//             age: '63',
//             date: '2010/01/04',
//             salary: '$125',
//           },
//           {
//             name: 'Zorita Serrano',
//             position: 'Software Engineer',
//             office: 'San Francisco',
//             age: '56',
//             date: '2012/06/01',
//             salary: '$115',
//           },
//           {
//             name: 'Jennifer Acosta',
//             position: 'Junior Javascript Developer',
//             office: 'Edinburgh',
//             age: '43',
//             date: '2013/02/01',
//             salary: '$75',
//           },
//           {
//             name: 'Cara Stevens',
//             position: 'Sales Assistant',
//             office: 'New York',
//             age: '46',
//             date: '2011/12/06',
//             salary: '$145',
//           },
//           {
//             name: 'Hermione Butler',
//             position: 'Regional Director',
//             office: 'London',
//             age: '47',
//             date: '2011/03/21',
//             salary: '$356',
//           },
//           {
//             name: 'Lael Greer',
//             position: 'Systems Administrator',
//             office: 'London',
//             age: '21',
//             date: '2009/02/27',
//             salary: '$103',
//           },
//           {
//             name: 'Jonas Alexander',
//             position: 'Developer',
//             office: 'San Francisco',
//             age: '30',
//             date: '2010/07/14',
//             salary: '$86',
//           },
//           {
//             name: 'Shad Decker',
//             position: 'Regional Director',
//             office: 'Edinburgh',
//             age: '51',
//             date: '2008/11/13',
//             salary: '$183',
//           },
//           {
//             name: 'Michael Bruce',
//             position: 'Javascript Developer',
//             office: 'Singapore',
//             age: '29',
//             date: '2011/06/27',
//             salary: '$183',
//           },
//           {
//             name: 'Donna Snider',
//             position: 'Customer Support',
//             office: 'New York',
//             age: '27',
//             date: '2011/01/25',
//             salary: '$112',
//           },
//         ], });
//   return (
//     <MDBDataTableV5 hover bordered striped small entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />
//   );
// }

// export default TechnicianManagement;


// import React from 'react';
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// const TechnicianManagment = () => {
//     return (
//         <MDBTable align='middle'>
//             <MDBTableHead>
//                 <tr>
//                     <th scope='col'>Name</th>
//                     <th scope='col'>Title</th>
//                     <th scope='col'>Status</th>
//                     <th scope='col'>Position</th>
//                     <th scope='col'>Actions</th>
//                 </tr>
//             </MDBTableHead>
//             <MDBTableBody>
//                 <tr>
//                     <td>
//                         <div className='d-flex align-items-center'>
//                             <img
//                                 src='https://mdbootstrap.com/img/new/avatars/8.jpg'
//                                 alt=''
//                                 style={{ width: '45px', height: '45px' }}
//                                 className='rounded-circle'
//                             />
//                             <div className='ms-3'>
//                                 <p className='fw-bold mb-1'>John Doe</p>
//                                 <p className='text-muted mb-0'>john.doe@gmail.com</p>
//                             </div>
//                         </div>
//                     </td>
//                     <td>
//                         <p className='fw-normal mb-1'>Software engineer</p>
//                         <p className='text-muted mb-0'>IT department</p>
//                     </td>
//                     <td>
//                         <MDBBadge color='success' pill>
//                             Active
//                         </MDBBadge>
//                     </td>
//                     <td>Senior</td>
//                     <td>
//                         <MDBBtn color='link' rounded size='sm'>
//                             Edit
//                         </MDBBtn>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <div className='d-flex align-items-center'>
//                             <img
//                                 src='https://mdbootstrap.com/img/new/avatars/6.jpg'
//                                 alt=''
//                                 style={{ width: '45px', height: '45px' }}
//                                 className='rounded-circle'
//                             />
//                             <div className='ms-3'>
//                                 <p className='fw-bold mb-1'>Alex Ray</p>
//                                 <p className='text-muted mb-0'>alex.ray@gmail.com</p>
//                             </div>
//                         </div>
//                     </td>
//                     <td>
//                         <p className='fw-normal mb-1'>Consultant</p>
//                         <p className='text-muted mb-0'>Finance</p>
//                     </td>
//                     <td>
//                         <MDBBadge color='primary' pill>
//                             Onboarding
//                         </MDBBadge>
//                     </td>
//                     <td>Junior</td>
//                     <td>
//                         <MDBBtn color='link' rounded size='sm'>
//                             Edit
//                         </MDBBtn>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <div className='d-flex align-items-center'>
//                             <img
//                                 src='https://mdbootstrap.com/img/new/avatars/7.jpg'
//                                 alt=''
//                                 style={{ width: '45px', height: '45px' }}
//                                 className='rounded-circle'
//                             />
//                             <div className='ms-3'>
//                                 <p className='fw-bold mb-1'>Kate Hunington</p>
//                                 <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
//                             </div>
//                         </div>
//                     </td>
//                     <td>
//                         <p className='fw-normal mb-1'>Designer</p>
//                         <p className='text-muted mb-0'>UI/UX</p>
//                     </td>
//                     <td>
//                         <MDBBadge color='warning' pill>
//                             Awaiting
//                         </MDBBadge>
//                     </td>
//                     <td>Senior</td>
//                     <td>
//                         <MDBBtn color='link' rounded size='sm'>
//                             Edit
//                         </MDBBtn>
//                     </td>
//                 </tr>
//             </MDBTableBody>
//         </MDBTable>
//     );
// }
// export default TechnicianManagment