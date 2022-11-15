import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const MiscSetting = () => {
    return (
        <div>
            <section className="dashboardWrap">
                {/*?php include 'includes/side-menu.php';?*/}
                <SideMenu />
                <div className="mainContent">
                    {/*?php include 'includes/top-bar.php';?*/}
                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Misc-Settings Management</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2 settingsWrap">
                                    <form action className="addCustomerForm">
                                        <div className="form-group row">
                                            <div className="col-6">
                                                <label>Maintenance Charges for Air Cooled Generator</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="$ 210" required />
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-pen-to-square" /></a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label>Hours before user can cancel the request without any charges</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="4 hours" required />
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-pen-to-square" /></a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label>Charge for emergency requests</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="$ 375 " required />
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-pen-to-square" /></a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label>Maintenance Charges for Liquid Cooled Generator</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="$ 315 " required />
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-pen-to-square" /></a>
                                            </div>
                                        </div>
                                        <h2 className="subHeading borTop">Reminder Settings:</h2>
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label>A reminder should be sent before</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="1 day " required />
                                                <a hefr="#!" className="editBtn xy-center me-3"><i className="fa-solid fa-pen-to-square" /></a>
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-trash" /></a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-6">
                                                <label>A reminder should be sent before</label>
                                            </div>
                                            <div className="col-6 d-flex align-item-center">
                                                <input type="text" className="inputItem" placeholder defaultValue="2 day " required />
                                                <a hefr="#!" className="editBtn xy-center me-3"><i className="fa-solid fa-pen-to-square" /></a>
                                                <a hefr="#!" className="editBtn xy-center"><i className="fa-solid fa-trash" /></a>
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

export default MiscSetting