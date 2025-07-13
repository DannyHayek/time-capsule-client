import React from 'react'

const MessageStreamCard = ({ num, bottled, recieved, status, tag }) => {
  return (
    <div className='flex column space-evenly message-stream-card'>
        <p>{num}</p>

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