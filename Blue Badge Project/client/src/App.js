import React, {useState, useEffect} from 'react';

//Components
import './App.css';

import Auth from './components/Auth/Auth';
import MainSite from './ProtectedSite.js/MainSite';


function App() {
 const [ sessionToken, setSessionToken] = useState(undefined);
 const viewConductor = () => {
 return sessionToken !== undefined ? <MainSite setSession ={setSessionToken} /> : <Auth setSession ={setSessionToken}/>
 }
 return (
   <div className="App">
     {viewConductor()}
   </div>
 );
}
export default App;
