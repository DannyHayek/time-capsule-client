import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingAuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => {
            navigate("/authPage");
          }} 
          className='auth-btn primary-btn login-btn font'>Login</button>

        <button onClick={() => {
            navigate("/authPage");
          }} 
          className='auth-btn secondary-btn signup-btn font'>Signup</button>

    </div>
  )
}

export default LandingAuthButtons