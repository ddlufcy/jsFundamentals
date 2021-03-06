import React from 'react';
import './Navbar.css';

import piePic from '../../assets/piePic.jpg'
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <h2>Username</h2>
                <img id="piePic" src={piePic} alt="pie" />
                <Logout setSession={props.setSession} />
            </nav>
        </div>
    )
} 

export default Navbar;