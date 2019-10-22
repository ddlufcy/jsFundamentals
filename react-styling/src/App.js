import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import ViewOne from './components/View/ViewOne'
import ViewTwo from './components/View/ViewTwo'

function App() {
  return (
    <div>
      <Navbar />
      <ViewOne />
      <h1 className='shopTitle' style={{textAlign: 'center', marginTop: '-4em'}}>Shop Records!</h1>
      <ViewTwo />
    </div>
  );
}

export default App;
