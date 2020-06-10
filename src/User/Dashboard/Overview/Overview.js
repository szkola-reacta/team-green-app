import React from 'react';

function Overview(){
    return(
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
    );
}

export default Overview;