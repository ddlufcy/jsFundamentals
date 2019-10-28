import React, {useState, useEffect} from 'react';
import Logout from '../../components/Logout';

const Footer = (props) => {
    return(
        <div className="main">
            <p>Daniel Lufcy 2019</p>
            <Logout token={props.token}  logout={props.logout}/>
        </div>
    )
}

export default Footer;