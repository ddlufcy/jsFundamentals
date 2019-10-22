import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/pies/Pies'

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  
  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies token={sessionToken} /> : <Auth setSession={setSessionToken} />
  }
  return (
    <div className="App">
      
      {/* {sessionToken} */}
      <Navbar  setSession={setSessionToken} />
      {viewConductor()}
    </div>
  );
}

export default App;


//array destructuring

// let [first, second, third] = ['The Fellowship of the ring', 'Two Towers', 'Return of the King'];

// let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
// let[first, third, ...others] = planets;
// console.log(first)