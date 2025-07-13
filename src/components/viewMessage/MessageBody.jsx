import React from 'react'

const MessageBody = () => {

  return (
    <div>
        <p className='message-body'>
            {JSON.parse(localStorage.getItem("currentMessage"))["body"]};
        </p>
    </div>
  )
}

export default MessageBody