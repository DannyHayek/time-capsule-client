import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShoreMessageCard = ({ num, user, bottled, recieved, status, tag, country, body }) => {
    const navigate = useNavigate();

    const currentMessage = {
    "num": num,
    "user": user,
    "bottled": bottled,
    "recieved": recieved,
    "status": status,
    "tag": tag,
    "body": body
  }

  return (
    <div className='flex column message-stream-card'>
        <h3>{user}</h3>
        <h4>{country}</h4>
        <h5>{tag}</h5>
        <p className="shore-card-text">{body}</p>
        <button className='primary-btn font view-message-stream-btn view-message-shore-btn' onClick={() => {
            localStorage.setItem("currentMessage", JSON.stringify(currentMessage));
            navigate("/viewMessage");
        }} >
                View
        </button>
    </div>
  )
}

export default ShoreMessageCard