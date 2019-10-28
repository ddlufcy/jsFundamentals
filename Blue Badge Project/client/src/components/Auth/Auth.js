
import React, {useState} from 'react';
import {Label, Button, Form} from 'reactstrap';
const Auth = (props) =>{
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState ('');
   const [login, setLogin] = useState(true);
   const title = ()=>{
       return login ? 'Login' : 'Signup';
   }
   const loginToggle = (event) => {
       event.preventDefault();
       setLogin(!login);
       setUsername('');
       setPassword('');
   }
   const signupFields = () => !login ?
   (
       <div>
        <p>Signup to find and share you favorite trails!</p>
       </div>
   ) : null;
   const handleSubmit = (e) => {
       e.preventDefault();
       const url = login ? 'http://localhost:3001/auth/signIn' : 'http://localhost:3001/auth/signUp'
       const bodyObj = login ? {
           username: username,
           password: password
       } : {
           username: username,
           password : password,
       }
       fetch(url, {
           method: 'POST',
           body: JSON.stringify(bodyObj),
           headers: {
               'Content-Type': 'application/json'
           }
       })
       .then(res => res.json())
       .then(json => props.setSession(json.sessionToken))
       .catch(err => console.log(err))
   }
   return(
     <Form onSubmit= {handleSubmit}>
         <br/>
         <h1>{title()}</h1>
         {signupFields()}
         <br/>
         <Label htmlFor='username'>Username:</Label>
         <br/>
         <input type='text' id = 'username' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
         <br/>
         <Label htmlFor='password'>Password:</Label>
         <br/>
         <input type='password' id='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
         <br/>
         <Button  onClick={loginToggle}>Login/Signup</Button>
         <br/>
         <Button type='submit'>Submit</Button>
     </Form>
   )
}
export default Auth;