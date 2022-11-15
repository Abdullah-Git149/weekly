import './App.css';
import ContextProvider from './context/context';
import AddNew from './pages/AddNew';
import CustomerManagment from './pages/CustomerManagment';
import EditAddress from './pages/EditAddress';
import EditFormSample from './pages/EditFormSample';
import EditGenerator from './pages/EditGenerator';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditCustomer from './pages/EditCustomer';
import GeneratorManagment from './pages/GeneratorManagment';
import AddNewGenerator from './pages/AddNewGenerator';
import RequestManagment from './pages/RequestManagment';
import AddRequest from './pages/AddRequest';
import Calender from './pages/Calender';
import TechnicianManagment from './pages/TechnicianManagment';
import AddNewTechnician from './pages/AddNewTechnician';
import DailySchedule from './pages/DailySchedule';
import { getUserToken } from "./store/slices/userSlice"
import { useSelector } from 'react-redux';
import ContentManagment from './pages/ContentManagment';
import MiscSetting from './pages/MiscSetting';
function App() {

  const authToken = useSelector(getUserToken)


  return (
    <ContextProvider>
      <>


        <BrowserRouter>
          {
            authToken ? <>

              <Routes>

                <Route path='*' element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/add-new-customer" element={<AddNew />} />
                <Route path="/edit-address" element={<EditAddress />} />
                <Route path="/edit-generator" element={<EditGenerator />} />
                <Route path="/customer-managment" element={<CustomerManagment />} />
                <Route path="/generator-managment" element={<GeneratorManagment />} />
                <Route path="/edit-customer" element={<EditCustomer />} />
                <Route path="/add-new-generator" element={<AddNewGenerator />} />
                <Route path="/request-managment" element={<RequestManagment />} />
                <Route path="/add-request" element={<AddRequest />} />
                <Route path="/calender-view" element={<Calender />} />
                <Route path="/technician-managment" element={<TechnicianManagment />} />
                <Route path="/add-new-technician" element={<AddNewTechnician />} />
                <Route path="/daily-schedule" element={<DailySchedule />} />
                <Route path="/content-managment" element={<ContentManagment />} />
                <Route path="/misc-setting-managment" element={<MiscSetting />} />

              </Routes>

            </> :
              <>
                <Routes>
                  <Route path="*" element={<Navigate to="/login" />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/forget-password" exact element={<ForgetPassword />} />
                </Routes>
              </>

          }
        </BrowserRouter>
      </>

    </ContextProvider>
  );
}

export default App;
