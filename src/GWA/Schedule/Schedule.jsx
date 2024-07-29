import React from 'react'
import './Schedule.css'
import Sidebar from "../Sidebar";
import ReactBigCalendar from './ReactBigCalendar';

function Schedule() {
  return (
    <div className="schedule-page">
      <Sidebar />
      <div className="schedule-content">
        <div className="demo-top-component"></div>
        <div className="myschedule">
            <h2 className="schedule-title">My Schedule</h2>
            <div className="allandcal">
                <div className="calender">
                  {/* <div className='toolbar'>
                    <div className="todayandaddevent">
                      <button style={{color:"inherit"}}>Today</button>
                    </div>
                    <div className="curentmonth">
                      <p style={{color:"black"}}>July 2024</p>
                    </div>
                    <div className="selectmonth">
                      <select name="month" id="month"  style={{color:"inherit"}}>
                        <option value="select month">Select Month</option>
                        <option value="July 2024">July 2024</option>
                        <option value="August 2024">August 2024</option>
                        <option value="September 2024">September 2024</option>
                        <option value="October 2024">October 2024</option>
                        <option value="November 2024">November 2024</option>
                        <option value="December 2024">December 2024</option>
                        <option value="January 2025">January 2025</option>
                        <option value="February 2025">February 2025</option>
                        <option value="March 2025">March 2025</option>
                        <option value="April 2025">April 2025</option>
                        <option value="May 2025">May 2025</option>
                        <option value="June 2025">June 2025</option>
                      </select>
                    </div>
                  </div> */}
                    <ReactBigCalendar></ReactBigCalendar>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Schedule