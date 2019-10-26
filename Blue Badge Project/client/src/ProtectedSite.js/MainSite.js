import React, {useState, useEffect} from 'react';
import Sidebar from '../Home/Site/Sidebar';
import Footer from '../Home/Site/Footer';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

const MainSite = (props) => {
    return(
    <div className="main">
        <Router>
        <Sidebar />
        </Router>
        <Footer />
    </div>
    )
}

export default MainSite;