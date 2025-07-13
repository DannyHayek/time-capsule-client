import React from 'react'

const MessageStreamCard = ({ num, bottled, recieved, status, tag }) => {
  return (
    <div className='flex column space-evenly message-stream-card'>
        <div className='flex'>
            <h3>Bottle #{num}</h3>
            <img src="../../assets/"></img>
        </div>
        

        <div className='message-stream-info'>
            <p>{bottled}</p>
            <p>{recieved}</p>
            <p>{status}</p>
            <p>{tag}</p>
        </div>
        
    </div>
  )
}

export default MessageStreamCard