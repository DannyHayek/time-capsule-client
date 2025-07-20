import React, { useState } from 'react'
import shareIcon from '../../assets/Icons/share-trans.png'
import { useNavigate } from 'react-router-dom'

const MessageStreamCard = ({ num, user, bottled, recieved, status, tag, country, body, surprise }) => {
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

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  if (bottled < recieved && surprise) {
    const start = new Date(bottled);
    const end = new Date(recieved);

    return (
      <div>
        <div className='flex column space-evenly message-stream-card'>
        <div className='flex column message-stream-card-title'>
          <div className='flex'>
            <h3>Bottle # {num} </h3>
            <img className='share-icon' src={shareIcon} alt="Share icon"></img>
          </div>
            <h5>{country}</h5>
        </div>
        

        <div className='message-stream-info'>
          <article>
            <h4 className='stream-info-title'>Revealed In</h4>
            <p>{dateDiffInDays(start, end)} days</p>
          </article>
        </div>
      
        </div>
      </div>
    )
  }
  // console.log(num);
  return (
    <div className='flex column space-evenly message-stream-card'>
        <div className='flex column message-stream-card-title'>
          <div className='flex'>
            <h3>Bottle # {num} </h3>
            <img className='share-icon' src={shareIcon} alt="Share icon"></img>
          </div>
            <h5>{country}</h5>
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