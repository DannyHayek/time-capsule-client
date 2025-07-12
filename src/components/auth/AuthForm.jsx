import React, { useState } from 'react'
import AuthButton from './AuthButton'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import AlterAuth from './AlterAuth'
import NameInput from './NameInput'

const AuthForm = () => {
    const [authType, setAuth] = useState(localStorage.getItem("authType"));

    const [currentEmail, setEmail] = useState("");
    const [currentPass, setPass] = useState("");
    const [currentName, setName] = useState("");


  const handleInput = () => {
    console.log(currentEmail);
    console.log(currentPass);
    if (authType === "Signup") {
      console.log(currentName);
    }
  }


  return (
    <div className='flex column flex-center auth-form-btn'>
        <form className='flex column flex-center auth-form'>
            {authType === "Signup" && <NameInput setName={setName}/>}

            <EmailInput setEmail={setEmail}/>

            <PasswordInput setPass={setPass}/>
        </form>

        <AuthButton handleInput={handleInput}/>

        <AlterAuth authType={authType} setAuth={setAuth}/>
    </div>
  )
}

export default AuthForm