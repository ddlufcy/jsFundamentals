import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/power-button.jpg';

const Logout = (props) => {
    return (
        <div>
            <img onClick={() => props.setSession(undefined)} id="logout" className="logout" src={logoutPic} alt="power button" />
        </div>
    )
}

export default Logout;