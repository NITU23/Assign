
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom"


function App() {
  
  
  return (
    <div >
    <div className='div1'>
    <h1 className='heading'>Login Here</h1>
    <form >
  <label>
    Username:
    <input type="email" className='Login' 
    placeholder='Enter Your Email Id Here'
    autoComplete='off'
    name="username" />
  </label>
  <br></br>
  <br></br>
  <label>
    Password:
    <input type="password" 
    placeholder='Enter Your Password Here'
    autoComplete='off'
    className='Pass' 
    name="password" />
  </label>
  <br></br>
   <br></br>
   <Link to="InnerPage" className='button'>
    <Button variant='primary'>Login</Button>
   </Link>
</form>
    </div>
      
         
           </div>
  );
}
export default App;
