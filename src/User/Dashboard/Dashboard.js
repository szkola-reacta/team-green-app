import React from 'react';
import './Style/dashboard.css';
import Overview from './Overview';

function Dashboard(){
    return(
        <div>
            <div className="sidebar">
                <div className="userInfo">
                    <div className="userTopMenu">
                        <span className="userNick">Jake</span>
                        <div className="userNotification">
                            <span>notify</span>
                            <span>message</span>
                        </div>
                    </div>
                    <img src="#" alt="avatar" />
                    <div className="userInformation">
                        <span className="userName">Hello, name</span>
                        <span className="userEmail">email@email.com</span>
                    </div>
                </div>
                <a className="active" href="#">Overview</a>
                <a href="#">Moje przepisy</a>
                <a href="#">Ulubione przepisy</a>
                <a href="#">Ustawienia</a>
            </div>
            <div className="dashboardContent">
                <Overview />
            </div>
        </div>
    );
}

export default Dashboard;