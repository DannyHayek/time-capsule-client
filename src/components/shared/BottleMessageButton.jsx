import React from 'react'
import { useNavigate } from 'react-router-dom';

const BottleMessageButton = () => {
    const navigate = useNavigate();

  return (
    <div>
        <hr></hr>
        
        <button className='primary-btn bottle-message-button' onClick={() => {
            navigate("/createMessage");
             }}>
                Bottle a Message!
            </button>
    </div>
  )
}

export default BottleMessageButton