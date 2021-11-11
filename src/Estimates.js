import React from 'react';
import './Dashboard.css';
import 'font-awesome/css/font-awesome.min.css';
import logo2 from './logo2.svg';
import clock from './clock.svg';

const Estimates = () => {

    function openPage(pageName,elmnt){
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }

        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(pageName).style.display = "block";
    }

    return (
        <div className="dashboardHome">
            <div className="SideBar">
                <div className="logo">
                    <img src={logo2} className="dashlogo" alt="logo" />
                </div>
            </div>
            <div className="headerArea">
                <div>
                    <p><img src={clock} className="clock" alt="clock" /><font className="headerAreaDir"><h4>Estimating</h4></font></p>
                </div>
            </div>
            <div className="dataArea">
                <div>
                    <input type="text" placeholder=" &#xF002;  Search customers by name" className="searchBox" /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<p className="SearchFilterClass">Filter by: &nbsp; <select className="MySelector">
                        <option>7 Days</option>
                        <option>14 Days</option>
                        <option>21 Days</option>
                    </select></p>
                </div>

                &nbsp;&nbsp;<button className="estimates_area" onClick={openPage('upcoming_estimates',this)}>Upcoming Estimates</button>&nbsp;
                <button onClick={openPage('estimates_sent',this)}>Estimates Sent</button>
                <div className="estimates_area">
                <div>
                    <div id="upcoming_estimates" className="">
                        <h2>upcoming Estimates</h2>
                        <p>This area is for upcoming estimates</p>
                    </div>

                    <div id="estimates_sent" className="">
                    <h2>Sent Estimates</h2>
                        <p>This area is for Sent Estimates</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default Estimates;