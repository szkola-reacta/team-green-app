import React from 'react';
import './Style/dashboard.css';

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
            </div>
            <div className="content">
                <div id="Overview">
                    <h2>Panel kontrolny</h2>
                    <div className="userStatisticIcon">
                        <div className="userStatIcon">
                            <img src="#" alt="icon" />
                            <h3>Dodane przepisy</h3>
                        </div>
                        <div className="userStatIcon">
                            <img src="#" alt="icon" />
                            <h3>Dodanych jako ulubione</h3>
                        </div>
                        <div className="userStatIcon">
                            <img src="#" alt="icon" />
                            <h3>Ilość wyświetleń twoich przepisów</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;