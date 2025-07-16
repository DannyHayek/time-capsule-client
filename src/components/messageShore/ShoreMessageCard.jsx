import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShoreMessageCard = () => {
    const navigate = useNavigate();

  return (
    <div className='flex column message-stream-card'>
        <h3>Username</h3>
        <h4>Tag</h4>
        <p>Message Text</p>
        <button className='primary-btn font view-message-stream-btn' onClick={() => {
            // localStorage.setItem("currentMessage", JSON.stringify(currentMessage));
            navigate("/viewMessage");
        }} >
                View
        </button>
    </div>
  )
}

export default ShoreMessageCard