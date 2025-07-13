import React, { useState } from 'react'
import shareIcon from '../../assets/Icons/share-trans.png'
import { useNavigate } from 'react-router-dom'

const MessageStreamCard = ({ num, bottled, recieved, status, tag, body }) => {
  const navigate = useNavigate();
  const currentMessage = {
    "num": num,
    "bottled": bottled,
    "recieved": recieved,
    "status": status,
    "tag": tag,
    "body": body
  }
  // console.log(num);
  return (
    <div className='flex column space-evenly message-stream-card'>
        <div className='flex message-stream-card-title'>
            <h3>Bottle # {num} </h3>
            <img className='share-icon' src={shareIcon} alt="Share icon"></img>
        </div>
        

        <div className='message-stream-info'>
          <article>
            <h4 className='stream-info-title'>Bottled</h4>
            <p>{bottled}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Recieved</h4>
            <p>{recieved}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Status</h4>
            <p>{status}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Tag</h4>
            <p>{tag}</p>
          </article>
        </div>
        

        <button className='primary-btn font view-message-stream-btn' onClick={() => {
          localStorage.setItem("currentMessage", JSON.stringify(currentMessage));
          navigate("/viewMessage");
          }} >
          View
        </button>
    </div>
  )
}

export default MessageStreamCard