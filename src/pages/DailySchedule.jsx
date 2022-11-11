import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const DailySchedule = () => {
    return (
        <div>
            <section className="dashboardWrap">
                {/*?php include 'includes/side-menu.php';?*/}
                <SideMenu />
                <div className="mainContent">
                    {/*?php include 'includes/top-bar.php';?*/}
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Technician Management</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">
                                    <div className="topText xy-between pb-2 mb-3 borT">
                                        <p className="title">Daily Schedule</p>
                                        <div className="btnWrap type-2 justify-content-end">
                                            <a href="#!" className="ctBtn type-2 clr-2">List View</a>
                                        </div>
                                    </div>
                                    <div className="btnWrap ms-0 pb-4">
                                        <a href="#!" className="ctBtn">Today</a>
                                        <a href="#!" className="ctBtn">Tomorrow</a>
                                        <a href="#!" className="ctBtn">Custom</a>
                                    </div>
                                    <table id="myTable" className="display">
                                        <thead>
                                            <tr>
                                                <th>Technician Name</th>
                                                <th>Specialization</th>
                                                <th>Priority</th>
                                                <th>Off Work</th>
                                                <th>Zones</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Curt Bragg</td>
                                                <td>
                                                    <div className="d-flex xy-between checkboxRow">
                                                        <div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check-1" />
                                                                <label className="form-check-label" htmlFor="check-1">
                                                                    Maintenance
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check-2" />
                                                                <label className="form-check-label" htmlFor="check-2">
                                                                    Emergency
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check-3" />
                                                                <label className="form-check-label" htmlFor="check-3">
                                                                    Service
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="check-4" />
                                                                <label className="form-check-label" htmlFor="check-4">
                                                                    Estimate
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex xy-between checkboxRow">
                                                        <div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" defaultValue id="check-5" name="radio-group" />
                                                                <label className="form-check-label" htmlFor="check-5">
                                                                    Maintenance
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" defaultValue id="check-6" name="radio-group" />
                                                                <label className="form-check-label" htmlFor="check-6">
                                                                    Emergency
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" defaultValue id="check-7" name="radio-group-2" />
                                                                <label className="form-check-label" htmlFor="check-7">
                                                                    Service
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" defaultValue id="check-8" name="radio-group-2" />
                                                                <label className="form-check-label" htmlFor="check-8">
                                                                    Estimate
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex xy-center checkboxRow">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <form className="selectOption">
                                                        <div className="multiselect">
                                                            <div className="selectBox" onclick="showCheckboxes()">
                                                                <select>
                                                                    <option>Select an option</option>
                                                                </select>
                                                                <div className="overSelect" />
                                                            </div>
                                                            <div id="checkboxes">
                                                                <label htmlFor="one">
                                                                    <input type="checkbox" id="one" />Zone 1</label>
                                                                <label htmlFor="two">
                                                                    <input type="checkbox" id="two" />Zone 2</label>
                                                                <label htmlFor="three">
                                                                    <input type="checkbox" id="three" />Zone 3</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </td>
                                                <td><button className="ctBtn marginAuto updateBtn">Update</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DailySchedule