import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();

  return (
    <div>
        <nav>
            <button onClick={() => {
            navigate("/");
            }}>
                Logo
            </button>

            <button onClick={() => {
            navigate("/profile");
             }}>
                Profile
            </button>

            <button onClick={() => {
            navigate("/userStream");
             }}>
                Your Stream
            </button>

            <button onClick={() => {
            navigate("/messageShore");
             }}>
                Message Shore
            </button>

            <button onClick={() => {
            navigate("/authPage");
             }}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Nav