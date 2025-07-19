import React, { useState } from 'react'
import AuthButton from './AuthButton'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import AlterAuth from './AlterAuth'
import NameInput from './NameInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CreateAPI from '../shared/CreateAPI'

const AuthForm = () => {
    const [authType, setAuth] = useState(localStorage.getItem("authType"));

    const [currentEmail, setEmail] = useState("");
    const [currentPass, setPass] = useState("");
    const [currentName, setName] = useState("");

    const navigate = useNavigate();

  const handleInput = () => {
    console.log(currentEmail);
    // localStorage.setItem("currentEmail", currentEmail);

    console.log(currentPass);
    // localStorage.setItem("currentPass", currentPass);

    if (authType === "Signup") {
      console.log(currentName);
      localStorage.setItem("currentName", currentName);
    }

    authenticate();
  }

  const authenticate = () => {
    const api = CreateAPI("/guest/" + authType.toLowerCase());

    axios.post(api, {"email": currentEmail, "password": currentPass, "name":currentName})
    .then(response => localStorage.setItem("user", JSON.stringify((response.data["payload"]))))
    .then(console.log(JSON.parse(localStorage.getItem("user"))));

    navigate("/Profile");
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