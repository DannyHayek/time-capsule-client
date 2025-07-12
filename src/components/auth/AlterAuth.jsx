import React from 'react'
import { useNavigate } from 'react-router-dom';

const AlterAuth = ( { authType , setAuth } ) => {

    let text = "Don't have an account?";
    let link = "Signup!";

    if (authType === "Signup") {
        text = "Already have an account?";
        link = "Login!";
    }
  return (
    <div>
        <p className='auth-change-text font'>{text}</p>
        <button  onClick={() => {
            if (authType === "Login") {
                localStorage.setItem("authType", "Signup");
                setAuth("Signup");
            } else {
                localStorage.setItem("authType", "Login");
                setAuth("Login");
            }
        
          }} className='auth-change-link'>{link}</button>
    </div>
  )
}

export default AlterAuth