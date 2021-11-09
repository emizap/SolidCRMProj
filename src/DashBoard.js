import React from 'react';
import './Dashboard.css';
import logo2 from './logo2.svg';
import clock from './clock.svg';

const Dashboard = () =>{
    return(
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
        </div>
    )

}

export default Dashboard;