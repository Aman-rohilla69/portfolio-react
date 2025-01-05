import React from "react";
import "./Services.css";
import Services_Data from '../../Portfolio Data/Services_Data';
import arrow_icon from '../../Images/arrow.jpg';
function Services() {
  return <div id="services" className="services">
    <div className="services-title" >
        <h1>My Services</h1>
    </div>
    <div className="services-container" >
        {Services_Data.map((service,index)=>{                     // use to call the service data from the portfolio data 
            return <div key={index} className="services-format">
               <h2>{service.s_no}</h2>         
               <h2>{service.s_name}</h2>
               <p>{service.s_desc}</p>
               <div className="services-readmore" >
                <p>Read More</p>
                <img className="arrow" src= {arrow_icon} alt="arrow icon" ></img>
               </div>
            </div>
        })}
    </div>
  </div>;
}

export default Services;
