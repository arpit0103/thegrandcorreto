import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
const Loginnav = () => {
  return (
    <div className="log">
    <div className="sgn1">
        <div className="textsign">
            <h1>Welcome Back!!!</h1>
            <p>To Keep Connected With Us Login With Your Personal Info !!</p>
        </div>
    <NavLink className='anav1' to='signin'>
        <Button variant="outlined" fontSize="large" className='abtna1'>Sign In</Button>
    </NavLink>
    </div>
    <div className="sgn2">
    <div className="textsign">
            <h1>Hello Friend!!!</h1>
            <p>Enter Your Personal Details And Start Journey With Us</p>
        </div>
    <NavLink className='anav2' to='signup'>
    <Button variant="outlined" fontSize="large" className='abtna2'>Sign Up</Button>
    </NavLink>
    </div>
    </div>
  )
}

export default Loginnav;