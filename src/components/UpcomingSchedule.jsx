import React from "react";
import { upcomingSchedule } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import './UpcomingSchedule.css';


const UpcomingSchedule = () =>{
    console.log(upcomingSchedule);
    return (
        <div className="upcoming-schedule">
            <h4>The Upcoming Schedule</h4>
            {upcomingSchedule.map((group,index) =>(
                <div key={index} className="day-group">
                    <p className="day-label">On {group.day}</p>
                    <div className="appointments-row" >
                        {group.items?.map((item, idx) => (
                            <SimpleAppointmentCard
                             key={idx}
                            title={item.title}
                            time={item.time}
                            icon={item.icon}/>
                        ))}

                        </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingSchedule;
