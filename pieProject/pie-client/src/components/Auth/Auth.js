import React, { useState } from 'react';
import './Auth.css'

const Auth = (props) => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassWord] = useState('');
    const[login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassWord('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ? 
        (
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <br />
                <input type="text" id='firstName' value={firstName} onchange={(e) => setFirstName (e.target.value)}/>
                <br />
                <label htmlFor='lastName'>LastName:</label>
                <br />
                <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName (e.target.value)}/>
                <br />
            </div>
        ) :null;


    return(
        <div>
            <form>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email</label>
                <br />
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='password' id='password' value={password} onChange={(e) => setPassWord (e.target.value)}/>
                <br />
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Auth;