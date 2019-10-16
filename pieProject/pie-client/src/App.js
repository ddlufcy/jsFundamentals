import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState(10);
  return (
    <div className="App">
      
      {/* {sessionToken} */}
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;


//array destructuring

// let [first, second, third] = ['The Fellowship of the ring', 'Two Towers', 'Return of the King'];

// let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
// let[first, third, ...others] = planets;
// console.log(first)