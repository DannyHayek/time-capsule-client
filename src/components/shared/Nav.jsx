import React from 'react'
import { useNavigate } from 'react-router-dom'
import smallLogo from '../../assets/Logo/temporal_river_logo_no_river_white_text.png';
import CreateAPI from './CreateAPI';
import axios from 'axios';
import GetUserID from '../../components/shared/GetUserID';
import GetToken from '../../components/shared/GetToken';


const Nav = () => {
    const navigate = useNavigate();

    const logout = () => {
        const api = CreateAPI("/user/logout");

        const token = GetToken();

        axios.get(api, {
            headers: {
                'Authorization': `bearer ${token}`,
            }
            }).then(localStorage.removeItem("user"));
    }

  return (
    <div>
        <nav className='flex space-evenly navbar'>
            <button className='navBtn nav-logo' onClick={() => {
                navigate("/");
            }}>
                <img className='nav-logo' src={smallLogo} alt='Temporal River Logo'></img>
            </button>

            <button className='navBtn' onClick={() => {
                navigate("/profile");
             }}>
                Profile
            </button>

            <button className='navBtn' onClick={() => {
                navigate("/messageStream");
             }}>
                Your Stream
            </button>

            <button className='navBtn' onClick={() => {
                navigate("/messageShore");
             }}>
                Message Shore
            </button>

            <button className='navBtn' onClick={() => {
                logout();
                navigate("/authPage");
             }}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Nav