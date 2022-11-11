import React from 'react'
import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Calender = () => {



    let firstDaty = 1;
    const events = [
        { title: "Estimate", start: '2022-11-02', backgroundColor: "blue", },
        { title: "Service", start: "2022-11-06", backgroundColor: "green", textColor: "red" },
        { title: "Emergency", start: "2022-11-07", backgroundColor: "green", textColor: "red" },
        { title: "Maintenance", start: "2022-11-19", backgroundColor: "green", textColor: "red" },

    ];
    return (
        <div>
            <section className="dashboardWrap">
                <SideMenu />
                <div className="mainContent">

                    <TopBar />
                    <div className="contentBody">
                        <h1 className="headingMain pt-3">Calender</h1>
                        <div className="row pt-2">
                            <div className="col-12">
                                <div className="genBox type-2">

                                    {/* ADD NEW CUSTOMER FORM START*/}
                                    <FullCalendar
                                        eventBackgroundColor='black'
                                        eventColor='black'
                                        defaultView="dayGridMonth"
                                        firstDay={firstDaty}
                                        locale="en"
                                        header={{
                                            left: "prev,next",
                                            center: "title",
                                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                                        }}
                                        themeSystem="bootstrap"
                                        plugins={[dayGridPlugin]}
                                        events={events}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calender