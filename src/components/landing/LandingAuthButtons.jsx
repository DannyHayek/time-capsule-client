import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingAuthButtons = () => {
  const navigate = useNavigate();


  return (
    <div>
        <button onClick={() => {
          localStorage.setItem("authType", "Login");
          navigate("/authPage");
          }} 
          className='auth-btn primary-btn login-btn font'>Login</button>

        <button onClick={() => {
          localStorage.setItem("authType", "Signup");
          navigate("/authPage");
          }} 
          className='auth-btn secondary-btn signup-btn font'>Signup</button>

    </div>
  )
}

export default LandingAuthButtons