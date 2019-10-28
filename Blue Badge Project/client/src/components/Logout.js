import React from 'react';
import './Logout.css';


const Logout = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={props.logout} id="logout" className="logout" alt="logout">Logout</button>
        </div>
    )
}

export default Logout;