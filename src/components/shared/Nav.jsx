import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();

  return (
    <div>
        <nav className='flex space-evenly navbar'>
            <button className='navBtn' onClick={() => {
            navigate("/");
            }}>
                Logo
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
            navigate("/authPage");
             }}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Nav