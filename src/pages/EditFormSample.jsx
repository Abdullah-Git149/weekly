import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

const EditFormSample = () => {
  return (
    <div>
         <section className="dashboardWrap">
        {/*?php include 'includes/side-menu.php';?*/}
        <SideMenu/>
        <div className="mainContent">
          {/*?php include 'includes/top-bar.php';?*/}
          <TopBar/>
          <div className="contentBody">
            <h1 className="headingMain pt-3">Edit Customer</h1>	
            <div className="row pt-2">
              <div className="col-12">
                <div className="genBox type-2">
                  <div className="topText xy-between pb-2 mb-3 borT">
                    <p className="title">Edit Customer</p>
                    <div className="btnWrap type-2 justify-content-end">
                      <a href="#!" className="ctBtn type-2 clr-2">Delete Customer</a>	
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
                      <label>Category <span>:</span></label>
                      <select name id className="inputItem">
                        <option value disabled selected>Enter Category</option>
                        <option value>Active</option>
                        <option value>Dective</option>
                      </select>
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

export default EditFormSample